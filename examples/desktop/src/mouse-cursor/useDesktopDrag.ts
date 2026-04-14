import { useRef, useState } from "@lynx-js/react";
import type { LayoutChangeEvent, TouchEvent } from "@lynx-js/types";
import { useTouchEmulationCompat } from "./useTouchEmulationCompat";

type Point = { x: number; y: number };
type Rect = { left: number; top: number; width: number; height: number };
type TargetId = number | string | null;

const STAGE_FALLBACK: Rect = { left: 0, top: 0, width: 980, height: 320 };
const LOGO_SIZE = { width: 132, height: 132 };
const LOGO_HOME: Point = { x: 160, y: 94 };

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function readLayoutSize(event: LayoutChangeEvent): Pick<Rect, "width" | "height"> {
  const detail = (event.detail ?? {}) as Partial<Rect> & { layout?: Partial<Rect> };
  const layout = detail.layout ?? detail;
  return {
    width: typeof layout.width === "number" ? layout.width : 0,
    height: typeof layout.height === "number" ? layout.height : 0,
  };
}

function readTargetId(event: LayoutChangeEvent): TargetId {
  // @ts-expect-error Lynx internal UniqueID typing
  return event.currentTarget?.uid ?? event.currentTarget?.uniqueId ?? null;
}

function queryRectById(id: TargetId, onSuccess?: (rect: Rect) => void) {
  if (id == null) {
    onSuccess?.(STAGE_FALLBACK);
    return;
  }

  const target = lynx
    .createSelectorQuery()
    // @ts-expect-error Lynx internal UniqueID typing
    .selectUniqueID(id);

  target
    ?.invoke({
      method: "boundingClientRect",
      // Keep pointer coords and element rects in the same screen-based space on web.
      params: { relativeTo: "screen" },
      success: (rect: Rect) => onSuccess?.(rect),
    })
    .exec();
}

function readScreenPoint(event: TouchEvent): Point {
  const touch = event.touches?.[0] ?? event.changedTouches?.[0];
  const x = typeof touch?.clientX === "number"
    ? touch.clientX
    : typeof touch?.pageX === "number"
    ? touch.pageX
    : typeof event.detail?.x === "number"
    ? event.detail.x
    : 0;
  const y = typeof touch?.clientY === "number"
    ? touch.clientY
    : typeof touch?.pageY === "number"
    ? touch.pageY
    : typeof event.detail?.y === "number"
    ? event.detail.y
    : 0;
  return { x, y };
}

function toStagePoint(point: Point, stageRect: Rect): Point {
  return {
    x: point.x - stageRect.left,
    y: point.y - stageRect.top,
  };
}

function toStageRect(rect: Rect, stageRect: Rect): Rect {
  return {
    left: rect.left - stageRect.left,
    top: rect.top - stageRect.top,
    width: rect.width,
    height: rect.height,
  };
}

function isInside(rect: Rect, point: Point) {
  return point.x >= rect.left
    && point.x <= rect.left + rect.width
    && point.y >= rect.top
    && point.y <= rect.top + rect.height;
}

function getDraggedLogoPosition(point: Point, stageRect: Rect, dragOffset: Point) {
  return {
    x: clamp(point.x - dragOffset.x, 24, stageRect.width - LOGO_SIZE.width - 24),
    y: clamp(point.y - dragOffset.y, 24, stageRect.height - LOGO_SIZE.height - 24),
  };
}

function getLogoRect(position: Point): Rect {
  return {
    left: position.x,
    top: position.y,
    width: LOGO_SIZE.width,
    height: LOGO_SIZE.height,
  };
}

function getRectIntersectionArea(a: Rect, b: Rect) {
  const overlapWidth = Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left));
  const overlapHeight = Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top));
  return overlapWidth * overlapHeight;
}

function shouldDockLogo(position: Point, desktopRect: Rect) {
  const logoRect = getLogoRect(position);
  const logoCenter = {
    x: logoRect.left + logoRect.width / 2,
    y: logoRect.top + logoRect.height / 2,
  };

  if (isInside(desktopRect, logoCenter)) {
    return true;
  }

  const overlapRatio = getRectIntersectionArea(logoRect, desktopRect) / (logoRect.width * logoRect.height);
  return overlapRatio >= 0.35;
}

function getDockedLogoPosition(desktopRect: Rect) {
  return {
    x: desktopRect.left + Math.round((desktopRect.width - LOGO_SIZE.width) / 2),
    y: desktopRect.top + Math.round((desktopRect.height - LOGO_SIZE.height) / 2) - 15,
  };
}

export function useDesktopDrag() {
  const [logoPos, setLogoPos] = useState<Point>(LOGO_HOME);
  const [dragging, setDragging] = useState(false);
  const [desktopHot, setDesktopHot] = useState(false);
  const [docked, setDocked] = useState(false);
  const stageRectRef = useRef<Rect>(STAGE_FALLBACK);
  const desktopRectRef = useRef<Rect | null>(null);
  const desktopScreenRectRef = useRef<Rect | null>(null);
  const stageTargetIdRef = useRef<TargetId>(null);
  const desktopTargetIdRef = useRef<TargetId>(null);
  const logoPosRef = useRef<Point>(LOGO_HOME);
  const dragOffsetRef = useRef<Point>({ x: 0, y: 0 });
  const dragActiveRef = useRef(false);

  const setLogoPosition = (next: Point) => {
    logoPosRef.current = next;
    setLogoPos(next);
  };

  const syncDesktopRect = () => {
    if (!desktopScreenRectRef.current) return;
    desktopRectRef.current = toStageRect(desktopScreenRectRef.current, stageRectRef.current);
  };

  const refreshStageRect = (onRefreshed?: () => void) => {
    queryRectById(stageTargetIdRef.current, (rect) => {
      stageRectRef.current = {
        ...stageRectRef.current,
        ...rect,
      };
      syncDesktopRect();
      onRefreshed?.();
    });
  };

  const refreshDesktopRect = (onRefreshed?: () => void) => {
    if (desktopTargetIdRef.current == null) {
      onRefreshed?.();
      return;
    }

    queryRectById(desktopTargetIdRef.current, (rect) => {
      desktopScreenRectRef.current = rect;
      syncDesktopRect();
      onRefreshed?.();
    });
  };

  const refreshMeasurements = (onRefreshed?: () => void) => {
    refreshStageRect(() => refreshDesktopRect(onRefreshed));
  };

  const handleStageLayout = (event: LayoutChangeEvent) => {
    const layout = readLayoutSize(event);
    stageRectRef.current = {
      ...stageRectRef.current,
      width: layout.width || stageRectRef.current.width,
      height: layout.height || stageRectRef.current.height,
    };
    stageTargetIdRef.current = readTargetId(event);
    refreshStageRect();
  };

  const handleDesktopLayout = (event: LayoutChangeEvent) => {
    desktopTargetIdRef.current = readTargetId(event);
    refreshMeasurements();
  };

  const handleLogoDown = (event: TouchEvent) => {
    const screenPoint = readScreenPoint(event);

    refreshMeasurements(() => {
      const point = toStagePoint(screenPoint, stageRectRef.current);
      dragActiveRef.current = true;
      setDragging(true);
      setDocked(false);
      dragOffsetRef.current = {
        x: point.x - logoPosRef.current.x,
        y: point.y - logoPosRef.current.y,
      };
      setDesktopHot(false);
    });
  };

  const handleMove = (event: TouchEvent) => {
    if (!dragActiveRef.current) return;
    const point = toStagePoint(readScreenPoint(event), stageRectRef.current);
    const next = getDraggedLogoPosition(point, stageRectRef.current, dragOffsetRef.current);
    setLogoPosition(next);
    setDesktopHot(desktopRectRef.current ? shouldDockLogo(next, desktopRectRef.current) : false);
  };

  const finishDrag = (event: TouchEvent) => {
    if (!dragActiveRef.current) return;
    dragActiveRef.current = false;
    const point = toStagePoint(readScreenPoint(event), stageRectRef.current);
    const releasePos = getDraggedLogoPosition(point, stageRectRef.current, dragOffsetRef.current);
    const willDock = desktopRectRef.current ? shouldDockLogo(releasePos, desktopRectRef.current) : false;

    if (willDock && desktopRectRef.current) {
      setLogoPosition(getDockedLogoPosition(desktopRectRef.current));
      setDocked(true);
    } else {
      setLogoPosition(LOGO_HOME);
      setDocked(false);
    }

    setDragging(false);
    setDesktopHot(false);
  };

  const cancelDrag = () => {
    if (!dragActiveRef.current) return;
    dragActiveRef.current = false;
    setLogoPosition(LOGO_HOME);
    setDocked(false);
    setDragging(false);
    setDesktopHot(false);
  };

  const stagePointerBind = useTouchEmulationCompat({
    onTouchMove: handleMove,
    onTouchEnd: finishDrag,
    onTouchCancel: cancelDrag,
  });

  const logoPointerBind = useTouchEmulationCompat({
    onTouchStart: handleLogoDown,
  });

  return {
    stagePointerBind,
    logoPointerBind,
    desktopHot,
    docked,
    dragging,
    logoPos,
    cancelDrag,
    handleDesktopLayout,
    handleStageLayout,
  };
}
