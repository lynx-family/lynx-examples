import { useRef, useState } from "@lynx-js/react";
import type { LayoutChangeEvent, MouseEvent } from "@lynx-js/types";

type Point = { x: number; y: number };
type Rect = { left: number; top: number; width: number; height: number };
type TargetId = number | string | null;

const LOGO_SIZE = { width: 132, height: 132 };
const LOGO_HOME: Point = { x: 160, y: 94 };

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function readTargetId(event: LayoutChangeEvent): TargetId {
  // @ts-expect-error Lynx internal UniqueID typing
  return event.currentTarget?.uid ?? event.currentTarget?.uniqueId ?? null;
}

function queryRectById(id: TargetId, onSuccess?: (rect: Rect) => void) {
  if (id == null) {
    return;
  }

  const target = lynx
    .createSelectorQuery()
    // @ts-expect-error Lynx internal UniqueID typing
    .selectUniqueID(id);

  target
    ?.invoke({
      method: "boundingClientRect",
      success: (rect: Rect) => onSuccess?.(rect),
    })
    .exec();
}

function readClientPoint(event: MouseEvent): Point {
  const x = event.clientX;
  const y = event.clientY;
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
  const stageRectRef = useRef<Rect | null>(null);
  const desktopRectRef = useRef<Rect | null>(null);
  const desktopClientRectRef = useRef<Rect | null>(null);
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
    if (!desktopClientRectRef.current || !stageRectRef.current) {
      desktopRectRef.current = null;
      return;
    }
    desktopRectRef.current = toStageRect(desktopClientRectRef.current, stageRectRef.current);
  };

  const refreshStageRect = (onRefreshed?: () => void) => {
    queryRectById(stageTargetIdRef.current, (rect) => {
      stageRectRef.current = rect;
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
      desktopClientRectRef.current = rect;
      syncDesktopRect();
      onRefreshed?.();
    });
  };

  const refreshMeasurements = (onRefreshed?: () => void) => {
    refreshStageRect(() => refreshDesktopRect(onRefreshed));
  };

  const handleStageLayout = (event: LayoutChangeEvent) => {
    stageTargetIdRef.current = readTargetId(event);
    refreshStageRect();
  };

  const handleDesktopLayout = (event: LayoutChangeEvent) => {
    desktopTargetIdRef.current = readTargetId(event);
    refreshMeasurements();
  };

  const handleLogoDown = (event: MouseEvent) => {
    const clientPoint = readClientPoint(event);

    refreshMeasurements(() => {
      if (!stageRectRef.current) return;
      const point = toStagePoint(clientPoint, stageRectRef.current);
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

  const handleMove = (event: MouseEvent) => {
    if (!dragActiveRef.current || !stageRectRef.current) return;
    const point = toStagePoint(readClientPoint(event), stageRectRef.current);
    const next = getDraggedLogoPosition(point, stageRectRef.current, dragOffsetRef.current);
    setLogoPosition(next);
    setDesktopHot(desktopRectRef.current ? shouldDockLogo(next, desktopRectRef.current) : false);
  };

  const finishDrag = (event: MouseEvent) => {
    if (!dragActiveRef.current || !stageRectRef.current) return;
    dragActiveRef.current = false;
    const point = toStagePoint(readClientPoint(event), stageRectRef.current);
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

  return {
    desktopHot,
    docked,
    dragging,
    logoPos,
    cancelDrag,
    finishDrag,
    handleDesktopLayout,
    handleLogoDown,
    handleMove,
    handleStageLayout,
  };
}
