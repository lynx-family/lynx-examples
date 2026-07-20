// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { runOnMainThread, useEffect, useMainThreadRef, useMemo } from "@lynx-js/react";
import type { MainThread } from "@lynx-js/types";

const SEGMENT_COUNT = 3;
const MAX_ROWS = 4;
const LOOP_THRESHOLD_ITEM_COUNT = 2;
const RESUME_DELAY_MS = 800;
const MAX_START_ATTEMPTS = 60;
const MOMENTUM_START_VELOCITY = 220;
const MOMENTUM_MAX_VELOCITY = 4000;
const MOMENTUM_STOP_VELOCITY = 25;
const MOMENTUM_MAX_OFFSET = 90;
const MOMENTUM_DECAY = 0.0032;
const ROW_SCROLL_RATES = ["18rpx", "22rpx", "20rpx", "24rpx"] as const;

interface RowItem<T> {
  item: T;
  itemIndex: number;
  itemKey: string;
}

interface RowConfig<T> {
  loopStartPosition: number;
  rowItems: RowItem<T>[];
  scrollRate: (typeof ROW_SCROLL_RATES)[number];
}

interface VisibleListCell {
  index?: number;
  position?: number;
  left?: number;
}

export interface DanmakuProps<T> {
  items: T[];
  rows?: number;
  autoScroll?: boolean;
  getItemKey: (item: T) => string;
  renderItem: (item: T, index: number) => JSX.Element;
  onItemTap?: (item: T, index: number, rowIndex: number) => void;
}

function invokeListMethod(
  element: MainThread.Element,
  method: string,
  params: Record<string, unknown> = {},
  onSuccess?: () => void,
  onError?: () => void,
) {
  "main thread";

  try {
    const result = element.invoke(method, params) as Promise<unknown> | undefined;
    if (result && typeof result.then === "function") {
      void result.then(() => onSuccess?.()).catch(() => onError?.());
    } else {
      onSuccess?.();
    }
  } catch {
    onError?.();
  }
}

export function Danmaku<T>({
  items,
  rows = 3,
  autoScroll = true,
  getItemKey,
  renderItem,
  onItemTap,
}: DanmakuProps<T>) {
  const safeRows = Math.min(MAX_ROWS, Math.max(1, Math.floor(rows)));
  const rowsData = useMemo(() => {
    const nextRows = Array.from({ length: safeRows }, () => [] as RowItem<T>[]);
    items.forEach((item, itemIndex) => {
      nextRows[itemIndex % safeRows]!.push({
        item,
        itemIndex,
        itemKey: getItemKey(item),
      });
    });
    return nextRows;
  }, [getItemKey, items, safeRows]);
  const rowConfigs = useMemo(
    () =>
      rowsData
        .filter((rowItems) => rowItems.length > 0)
        .map<RowConfig<T>>((rowItems, rowIndex) => ({
          loopStartPosition: rowItems.length + (rowIndex % rowItems.length),
          rowItems,
          scrollRate: ROW_SCROLL_RATES[rowIndex % ROW_SCROLL_RATES.length]!,
        })),
    [rowsData],
  );
  const rowBaseLengths = useMemo(
    () => rowConfigs.map(({ rowItems }) => rowItems.length),
    [rowConfigs],
  );
  const activeRowCount = rowConfigs.length;

  const listRefs = useMainThreadRef<Array<MainThread.Element | null>>([]);
  const layoutReadyRef = useMainThreadRef<boolean[]>([]);
  const startAttemptRef = useMainThreadRef<number[]>([]);
  const startScheduledRef = useMainThreadRef<boolean[]>([]);
  const commandVersionRef = useMainThreadRef(0);
  const autoScrollEnabledRef = useMainThreadRef(autoScroll);
  const touchActiveRef = useMainThreadRef(false);
  const draggingRef = useMainThreadRef(false);
  const lastTouchXRef = useMainThreadRef(0);
  const lastMoveTimeRef = useMainThreadRef(0);
  const swipeVelocityRef = useMainThreadRef(0);
  const momentumRunningRef = useMainThreadRef(false);
  const normalizingRef = useMainThreadRef<boolean[]>([]);
  const resumeTimerRef = useMainThreadRef<ReturnType<typeof setTimeout> | null>(null);

  function clearResumeTimer() {
    "main thread";

    if (resumeTimerRef.current !== null) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }

  function invalidatePendingCommands() {
    "main thread";

    commandVersionRef.current += 1;
    for (let rowIndex = 0; rowIndex < activeRowCount; rowIndex++) {
      startScheduledRef.current[rowIndex] = false;
    }
  }

  function stopAllAutoScroll() {
    "main thread";

    for (let rowIndex = 0; rowIndex < activeRowCount; rowIndex++) {
      const element = listRefs.current[rowIndex];
      if (!element) continue;
      try {
        void element.invoke("autoScroll", { start: false });
      } catch {
        // The row may be between mount and layout completion.
      }
    }
  }

  function resumeAllAutoScroll() {
    "main thread";

    if (
      !autoScrollEnabledRef.current
      || touchActiveRef.current
      || momentumRunningRef.current
    ) {
      return;
    }
    for (let rowIndex = 0; rowIndex < activeRowCount; rowIndex++) {
      if (normalizingRef.current[rowIndex]) return;
    }
    for (let rowIndex = 0; rowIndex < activeRowCount; rowIndex++) {
      const element = listRefs.current[rowIndex];
      if (!element) continue;
      invokeListMethod(
        element,
        "getVisibleCells",
        {},
        () => {
          if (
            !autoScrollEnabledRef.current
            || touchActiveRef.current
            || momentumRunningRef.current
          ) {
            return;
          }
          invokeListMethod(element, "autoScroll", {
            autoStop: false,
            rate: ROW_SCROLL_RATES[rowIndex % ROW_SCROLL_RATES.length],
            start: true,
          });
        },
      );
    }
  }

  function requestRowAutoScroll(
    rowIndex: number,
    resetToLoopStart: boolean,
    loopStartPosition: number,
    scrollRate: (typeof ROW_SCROLL_RATES)[number],
  ) {
    "main thread";

    if (
      startScheduledRef.current[rowIndex]
      || !autoScrollEnabledRef.current
      || touchActiveRef.current
      || momentumRunningRef.current
      || !listRefs.current[rowIndex]
      || (startAttemptRef.current[rowIndex] ?? 0) >= MAX_START_ATTEMPTS
    ) {
      return;
    }

    startScheduledRef.current[rowIndex] = true;
    const scheduledVersion = commandVersionRef.current;

    function finish() {
      "main thread";

      if (scheduledVersion === commandVersionRef.current) {
        startScheduledRef.current[rowIndex] = false;
      }
    }

    function retry() {
      "main thread";

      if (scheduledVersion !== commandVersionRef.current) return;
      if ((startAttemptRef.current[rowIndex] ?? 0) >= MAX_START_ATTEMPTS) {
        finish();
        return;
      }
      setTimeout(attempt, 16);
    }

    function startNativeScroll(element: MainThread.Element) {
      "main thread";

      if (
        scheduledVersion !== commandVersionRef.current
        || touchActiveRef.current
        || momentumRunningRef.current
        || !autoScrollEnabledRef.current
      ) {
        finish();
        return;
      }
      invokeListMethod(
        element,
        "autoScroll",
        { autoStop: false, rate: scrollRate, start: true },
        () => {
          startAttemptRef.current[rowIndex] = 0;
          finish();
        },
        retry,
      );
    }

    function positionThenStart(element: MainThread.Element) {
      "main thread";

      if (
        scheduledVersion !== commandVersionRef.current
        || touchActiveRef.current
        || momentumRunningRef.current
      ) {
        finish();
        return;
      }
      if (!resetToLoopStart) {
        startNativeScroll(element);
        return;
      }
      invokeListMethod(
        element,
        "scrollToPosition",
        {
          alignTo: "top",
          offset: 0,
          position: loopStartPosition,
          smooth: false,
        },
        () => startNativeScroll(element),
        retry,
      );
    }

    function attempt() {
      "main thread";

      if (
        scheduledVersion !== commandVersionRef.current
        || !autoScrollEnabledRef.current
        || touchActiveRef.current
        || momentumRunningRef.current
      ) {
        finish();
        return;
      }

      const element = listRefs.current[rowIndex];
      if (!element) {
        finish();
        return;
      }
      startAttemptRef.current[rowIndex] = (startAttemptRef.current[rowIndex] ?? 0) + 1;
      invokeListMethod(
        element,
        "getVisibleCells",
        {},
        () => {
          if (
            scheduledVersion !== commandVersionRef.current
            || touchActiveRef.current
            || momentumRunningRef.current
          ) {
            finish();
            return;
          }
          layoutReadyRef.current[rowIndex] = true;
          positionThenStart(element);
        },
        retry,
      );
    }

    setTimeout(attempt, 16);
  }

  const listRefHandlers = useMemo(
    () =>
      Array.from({ length: MAX_ROWS }, (_, rowIndex) => (element: MainThread.Element | null) => {
        "main thread";

        listRefs.current[rowIndex] = element;
        if (!element) {
          layoutReadyRef.current[rowIndex] = false;
          normalizingRef.current[rowIndex] = false;
          startScheduledRef.current[rowIndex] = false;
          return;
        }

        const config = rowConfigs[rowIndex];
        if (!config) return;
        startAttemptRef.current[rowIndex] = 0;
        requestRowAutoScroll(
          rowIndex,
          true,
          config.loopStartPosition,
          config.scrollRate,
        );
      }),
    [
      layoutReadyRef,
      listRefs,
      normalizingRef,
      rowConfigs,
      startAttemptRef,
      startScheduledRef,
    ],
  );

  const layoutCompleteHandlers = useMemo(
    () =>
      rowConfigs.map(({ loopStartPosition, scrollRate }, rowIndex) => () => {
        "main thread";

        layoutReadyRef.current[rowIndex] = true;
        startAttemptRef.current[rowIndex] = 0;
        requestRowAutoScroll(rowIndex, true, loopStartPosition, scrollRate);
      }),
    [layoutReadyRef, rowConfigs, startAttemptRef],
  );

  function normalizeRow(
    rowIndex: number,
    direction: "upper" | "lower",
    onlyIfUnsafe: boolean,
    resumeWhenDone: boolean,
  ) {
    "main thread";

    const element = listRefs.current[rowIndex];
    const baseLength = rowBaseLengths[rowIndex] ?? 0;
    if (
      !element
      || baseLength <= 0
      || normalizingRef.current[rowIndex]
    ) {
      return;
    }

    normalizingRef.current[rowIndex] = true;
    const normalizationVersion = commandVersionRef.current;
    let finished = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    function finish() {
      "main thread";

      if (finished) return;
      finished = true;
      if (timeoutId !== null) clearTimeout(timeoutId);
      normalizingRef.current[rowIndex] = false;
      if (
        resumeWhenDone
        && normalizationVersion === commandVersionRef.current
        && !touchActiveRef.current
        && !momentumRunningRef.current
      ) {
        resumeAllAutoScroll();
      }
    }

    try {
      void element.invoke("autoScroll", { start: false });
    } catch {
      // The row may already be stopped.
    }

    timeoutId = setTimeout(finish, 800);
    try {
      const result = element.invoke("getVisibleCells", {}) as
        | Promise<VisibleListCell[]>
        | undefined;
      if (!result || typeof result.then !== "function") {
        finish();
        return;
      }

      void result.then((cells) => {
        if (finished || normalizationVersion !== commandVersionRef.current) {
          finish();
          return;
        }

        let anchorIndex = 0;
        let anchorLeft = 0;
        let minIndex = Number.POSITIVE_INFINITY;
        let maxIndex = Number.NEGATIVE_INFINITY;
        let smallestLeft = Number.POSITIVE_INFINITY;

        for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
          const cell = cells[cellIndex];
          const index = cell?.index ?? cell?.position;
          const left = cell?.left;
          if (
            typeof index !== "number"
            || typeof left !== "number"
            || !Number.isFinite(index)
            || !Number.isFinite(left)
          ) {
            continue;
          }
          minIndex = Math.min(minIndex, index);
          maxIndex = Math.max(maxIndex, index);
          if (left < smallestLeft) {
            smallestLeft = left;
            anchorIndex = index;
            anchorLeft = left;
          }
        }

        if (!Number.isFinite(minIndex) || !Number.isFinite(maxIndex)) {
          finish();
          return;
        }

        const totalLength = baseLength * SEGMENT_COUNT;
        const unsafeUpper = minIndex <= LOOP_THRESHOLD_ITEM_COUNT;
        const unsafeLower = maxIndex >= totalLength - 1 - LOOP_THRESHOLD_ITEM_COUNT;
        if (onlyIfUnsafe && !unsafeUpper && !unsafeLower) {
          finish();
          return;
        }

        let jumpDirection = direction;
        if (unsafeUpper && !unsafeLower) jumpDirection = "upper";
        if (unsafeLower && !unsafeUpper) jumpDirection = "lower";

        let targetIndex = jumpDirection === "upper"
          ? anchorIndex + baseLength
          : anchorIndex - baseLength;
        if (targetIndex < 0 || targetIndex >= totalLength) {
          targetIndex = jumpDirection === "upper"
            ? anchorIndex - baseLength
            : anchorIndex + baseLength;
        }
        targetIndex = Math.max(0, Math.min(totalLength - 1, targetIndex));

        invokeListMethod(
          element,
          "scrollToPosition",
          {
            alignTo: "top",
            offset: anchorLeft,
            position: targetIndex,
            smooth: false,
          },
          finish,
          finish,
        );
      }).catch(finish);
    } catch {
      finish();
    }
  }

  const loopHandlers = useMemo(
    () =>
      rowBaseLengths.map((_, rowIndex) => ({
        lower: () => {
          "main thread";

          normalizeRow(rowIndex, "lower", false, true);
        },
        upper: () => {
          "main thread";

          normalizeRow(rowIndex, "upper", false, true);
        },
      })),
    [rowBaseLengths],
  );

  function normalizeAllRows() {
    "main thread";

    for (let rowIndex = 0; rowIndex < activeRowCount; rowIndex++) {
      normalizeRow(rowIndex, "lower", true, false);
    }
  }

  function scrollAllLists(offset: number) {
    "main thread";

    for (let rowIndex = 0; rowIndex < activeRowCount; rowIndex++) {
      const element = listRefs.current[rowIndex];
      if (!element) continue;
      try {
        void element.invoke("scrollBy", { offset });
      } catch {
        // The row may be between mount and layout completion.
      }
    }
  }

  function finishGestureMotion() {
    "main thread";

    momentumRunningRef.current = false;
    clearResumeTimer();
    normalizeAllRows();
    if (!autoScrollEnabledRef.current || touchActiveRef.current) return;
    resumeTimerRef.current = setTimeout(() => {
      resumeTimerRef.current = null;
      function resumeWhenNormalized() {
        "main thread";

        if (touchActiveRef.current || momentumRunningRef.current) return;
        for (let rowIndex = 0; rowIndex < activeRowCount; rowIndex++) {
          if (normalizingRef.current[rowIndex]) {
            requestAnimationFrame(resumeWhenNormalized);
            return;
          }
        }
        resumeAllAutoScroll();
      }

      resumeWhenNormalized();
    }, RESUME_DELAY_MS);
  }

  function startMomentum(initialVelocity: number) {
    "main thread";

    stopAllAutoScroll();
    momentumRunningRef.current = true;
    let velocity = Math.max(
      -MOMENTUM_MAX_VELOCITY,
      Math.min(MOMENTUM_MAX_VELOCITY, initialVelocity),
    );
    let lastFrameTime = 0;

    const step = () => {
      "main thread";

      if (!momentumRunningRef.current || touchActiveRef.current) return;
      const now = Date.now();
      if (lastFrameTime === 0) {
        lastFrameTime = now;
        requestAnimationFrame(step);
        return;
      }

      const elapsed = Math.min(40, Math.max(0, now - lastFrameTime));
      lastFrameTime = now;
      const rawOffset = (velocity * elapsed) / 1000;
      const offset = Math.max(-MOMENTUM_MAX_OFFSET, Math.min(MOMENTUM_MAX_OFFSET, rawOffset));
      if (Math.abs(offset) >= 0.1) scrollAllLists(offset);

      velocity *= Math.exp(-MOMENTUM_DECAY * elapsed);
      if (Math.abs(velocity) < MOMENTUM_STOP_VELOCITY) {
        finishGestureMotion();
        return;
      }
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  function handleTouchStart(event: MainThread.TouchEvent) {
    "main thread";

    clearResumeTimer();
    momentumRunningRef.current = false;
    touchActiveRef.current = true;
    draggingRef.current = false;
    lastTouchXRef.current = event.detail?.x ?? 0;
    lastMoveTimeRef.current = Date.now();
    swipeVelocityRef.current = 0;
    invalidatePendingCommands();
    stopAllAutoScroll();
  }

  function handleTouchMove(event: MainThread.TouchEvent) {
    "main thread";

    if (!touchActiveRef.current) return;
    const currentX = event.detail?.x ?? 0;
    const delta = lastTouchXRef.current - currentX;
    if (!draggingRef.current && Math.abs(delta) <= 8) return;

    draggingRef.current = true;
    lastTouchXRef.current = currentX;
    if (Math.abs(delta) < 0.1) return;

    const now = Date.now();
    const elapsed = now - lastMoveTimeRef.current;
    if (elapsed > 0 && elapsed < 80) {
      const instantVelocity = (delta / elapsed) * 1000;
      swipeVelocityRef.current = swipeVelocityRef.current * 0.75 + instantVelocity * 0.25;
    }
    lastMoveTimeRef.current = now;
    scrollAllLists(delta);
  }

  function handleTouchEnd() {
    "main thread";

    if (!touchActiveRef.current) return;
    touchActiveRef.current = false;
    const wasDragging = draggingRef.current;
    draggingRef.current = false;
    clearResumeTimer();
    const velocity = swipeVelocityRef.current;
    if (wasDragging && Math.abs(velocity) >= MOMENTUM_START_VELOCITY) {
      startMomentum(velocity);
      return;
    }
    finishGestureMotion();
  }

  function syncAutoScroll(enabled: boolean) {
    "main thread";

    autoScrollEnabledRef.current = enabled;
    clearResumeTimer();
    invalidatePendingCommands();
    if (enabled) resumeAllAutoScroll();
    else {
      momentumRunningRef.current = false;
      stopAllAutoScroll();
    }
  }

  function teardown() {
    "main thread";

    autoScrollEnabledRef.current = false;
    touchActiveRef.current = false;
    draggingRef.current = false;
    momentumRunningRef.current = false;
    clearResumeTimer();
    invalidatePendingCommands();
    stopAllAutoScroll();
  }

  useEffect(() => {
    void runOnMainThread(syncAutoScroll)(autoScroll);
  }, [autoScroll]);

  useEffect(() => {
    return () => {
      void runOnMainThread(teardown)();
    };
  }, []);

  if (items.length === 0) {
    return (
      <view className="danmaku-empty">
        <text className="danmaku-empty-text">No messages to display</text>
      </view>
    );
  }

  return (
    <view
      className="danmaku-rows"
      main-thread:bindtouchstart={handleTouchStart}
      main-thread:bindtouchmove={handleTouchMove}
      main-thread:capture-bindtouchend={handleTouchEnd}
      main-thread:capture-bindtouchcancel={handleTouchEnd}
      main-thread:bindtouchend={handleTouchEnd}
      main-thread:bindtouchcancel={handleTouchEnd}
    >
      {rowConfigs.map(({ loopStartPosition, rowItems }, rowIndex) => (
        <list
          className="danmaku-row"
          key={`${rowIndex}-${rowItems.map(({ itemKey }) => itemKey).join("-")}`}
          style={{ marginTop: rowIndex === 0 ? "0rpx" : "18rpx" }}
          main-thread:ref={listRefHandlers[rowIndex]}
          main-thread:bindlayoutcomplete={layoutCompleteHandlers[rowIndex]}
          main-thread:bindscrolltoupper={loopHandlers[rowIndex]?.upper}
          main-thread:bindscrolltolower={loopHandlers[rowIndex]?.lower}
          main-thread:bindscrolltoupperedge={loopHandlers[rowIndex]?.upper}
          main-thread:bindscrolltoloweredge={loopHandlers[rowIndex]?.lower}
          scroll-orientation="horizontal"
          list-type="single"
          span-count={1}
          enable-scroll={false}
          bounces={false}
          scroll-bar-enable={false}
          need-layout-complete-info={true}
          need-visible-item-info={true}
          upper-threshold-item-count={LOOP_THRESHOLD_ITEM_COUNT}
          lower-threshold-item-count={LOOP_THRESHOLD_ITEM_COUNT}
          initial-scroll-index={loopStartPosition}
        >
          {Array.from({ length: SEGMENT_COUNT }, (_, segmentIndex) =>
            rowItems.map(({ item, itemIndex, itemKey }) => (
              <list-item
                className="danmaku-list-item"
                item-key={`${segmentIndex}-${itemKey}`}
                key={`${segmentIndex}-${itemKey}`}
                bindtap={() => onItemTap?.(item, itemIndex, rowIndex)}
              >
                {renderItem(item, itemIndex)}
              </list-item>
            )))}
        </list>
      ))}
    </view>
  );
}
