import { useRef, useState } from "@lynx-js/react";
import type { LayoutChangeEvent, MouseEvent } from "@lynx-js/types";

type Point = { x: number; y: number };
type Rect = { left: number; top: number; width: number; height: number };
type TargetId = number | string | null;

const STAGE_BASE = { width: 980, height: 320 };
const LOGO_SIZE = { width: 132, height: 132 };
const LOGO_HOME: Point = { x: 160, y: 94 };
const STAGE_PADDING = { x: 24, y: 24 };
const DOCK_OFFSET_Y = -15;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function scaleX(value: number, stageRect: Rect) {
  return value * stageRect.width / STAGE_BASE.width;
}

function scaleY(value: number, stageRect: Rect) {
  return value * stageRect.height / STAGE_BASE.height;
}

function toRenderedPoint(point: Point, stageRect: Rect): Point {
  return {
    x: scaleX(point.x, stageRect),
    y: scaleY(point.y, stageRect),
  };
}

function toLogicalPoint(point: Point, stageRect: Rect): Point {
  return {
    x: point.x * STAGE_BASE.width / stageRect.width,
    y: point.y * STAGE_BASE.height / stageRect.height,
  };
}

function getLogoSize(stageRect: Rect) {
  return {
    width: scaleX(LOGO_SIZE.width, stageRect),
    height: scaleY(LOGO_SIZE.height, stageRect),
  };
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
  const logoSize = getLogoSize(stageRect);
  const renderedPosition = {
    x: clamp(
      point.x - dragOffset.x,
      scaleX(STAGE_PADDING.x, stageRect),
      stageRect.width - logoSize.width - scaleX(STAGE_PADDING.x, stageRect),
    ),
    y: clamp(
      point.y - dragOffset.y,
      scaleY(STAGE_PADDING.y, stageRect),
      stageRect.height - logoSize.height - scaleY(STAGE_PADDING.y, stageRect),
    ),
  };
  return toLogicalPoint(renderedPosition, stageRect);
}

function getLogoRect(position: Point, stageRect: Rect): Rect {
  const renderedPosition = toRenderedPoint(position, stageRect);
  const logoSize = getLogoSize(stageRect);
  return {
    left: renderedPosition.x,
    top: renderedPosition.y,
    width: logoSize.width,
    height: logoSize.height,
  };
}

function getRectIntersectionArea(a: Rect, b: Rect) {
  const overlapWidth = Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left));
  const overlapHeight = Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top));
  return overlapWidth * overlapHeight;
}

function shouldDockLogo(position: Point, stageRect: Rect, desktopRect: Rect) {
  const logoRect = getLogoRect(position, stageRect);
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

function getDockedLogoPosition(desktopRect: Rect, stageRect: Rect) {
  const logoSize = getLogoSize(stageRect);
  return toLogicalPoint({
    x: desktopRect.left + Math.round((desktopRect.width - logoSize.width) / 2),
    y: desktopRect.top + Math.round((desktopRect.height - logoSize.height) / 2) + scaleY(DOCK_OFFSET_Y, stageRect),
  }, stageRect);
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
      const renderedLogoPos = toRenderedPoint(logoPosRef.current, stageRectRef.current);
      dragActiveRef.current = true;
      setDragging(true);
      setDocked(false);
      dragOffsetRef.current = {
        x: point.x - renderedLogoPos.x,
        y: point.y - renderedLogoPos.y,
      };
      setDesktopHot(false);
    });
  };

  const handleMove = (event: MouseEvent) => {
    if (!dragActiveRef.current || !stageRectRef.current) return;
    const point = toStagePoint(readClientPoint(event), stageRectRef.current);
    const next = getDraggedLogoPosition(point, stageRectRef.current, dragOffsetRef.current);
    setLogoPosition(next);
    setDesktopHot(desktopRectRef.current ? shouldDockLogo(next, stageRectRef.current, desktopRectRef.current) : false);
  };

  const finishDrag = (event: MouseEvent) => {
    if (!dragActiveRef.current || !stageRectRef.current) return;
    dragActiveRef.current = false;
    const point = toStagePoint(readClientPoint(event), stageRectRef.current);
    const releasePos = getDraggedLogoPosition(point, stageRectRef.current, dragOffsetRef.current);
    const willDock = desktopRectRef.current
      ? shouldDockLogo(releasePos, stageRectRef.current, desktopRectRef.current)
      : false;

    if (willDock && desktopRectRef.current) {
      setLogoPosition(getDockedLogoPosition(desktopRectRef.current, stageRectRef.current));
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

  const logoCardStyle = {
    left: `${logoPos.x / STAGE_BASE.width * 100}%`,
    top: `${logoPos.y / STAGE_BASE.height * 100}%`,
    width: `${LOGO_SIZE.width / STAGE_BASE.width * 100}%`,
    height: `${LOGO_SIZE.height / STAGE_BASE.height * 100}%`,
    cursor: dragging ? "grabbing" : "grab",
  };

  return {
    desktopHot,
    docked,
    dragging,
    logoCardStyle,
    cancelDrag,
    finishDrag,
    handleDesktopLayout,
    handleLogoDown,
    handleMove,
    handleStageLayout,
  };
}
