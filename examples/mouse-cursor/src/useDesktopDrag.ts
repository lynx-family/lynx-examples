import { useRef, useState } from "@lynx-js/react";

type Point = { x: number; y: number };
type Rect = { left: number; top: number; width: number; height: number };

const STAGE_FALLBACK: Rect = { left: 0, top: 0, width: 980, height: 320 };
const LOGO_SIZE = { width: 132, height: 132 };
const LOGO_HOME: Point = { x: 160, y: 94 };

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function readLayout(event: any): Partial<Rect> {
  const detail = event?.detail ?? {};
  const layout = detail.layout ?? detail;
  return {
    left: typeof layout.left === "number" ? layout.left : typeof layout.x === "number" ? layout.x : undefined,
    top: typeof layout.top === "number" ? layout.top : typeof layout.y === "number" ? layout.y : undefined,
    width: typeof layout.width === "number" ? layout.width : undefined,
    height: typeof layout.height === "number" ? layout.height : undefined,
  };
}

function readPoint(event: any, stageRect: Rect): Point {
  const detail = event?.detail ?? {};
  const x = typeof event?.pageX === "number"
    ? event.pageX - stageRect.left
    : typeof event?.clientX === "number"
    ? event.clientX - stageRect.left
    : typeof event?.x === "number"
    ? event.x
    : typeof detail.pageX === "number"
    ? detail.pageX - stageRect.left
    : typeof detail.clientX === "number"
    ? detail.clientX - stageRect.left
    : typeof detail.x === "number"
    ? detail.x
    : 0;
  const y = typeof event?.pageY === "number"
    ? event.pageY - stageRect.top
    : typeof event?.clientY === "number"
    ? event.clientY - stageRect.top
    : typeof event?.y === "number"
    ? event.y
    : typeof detail.pageY === "number"
    ? detail.pageY - stageRect.top
    : typeof detail.clientY === "number"
    ? detail.clientY - stageRect.top
    : typeof detail.y === "number"
    ? detail.y
    : 0;
  return { x, y };
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
  const [stageRect, setStageRect] = useState<Rect>(STAGE_FALLBACK);
  const [desktopRect, setDesktopRect] = useState<Rect | null>(null);
  const [logoPos, setLogoPos] = useState<Point>(LOGO_HOME);
  const [dragOffset, setDragOffset] = useState<Point>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [desktopHot, setDesktopHot] = useState(false);
  const [docked, setDocked] = useState(false);
  const dragActiveRef = useRef(false);

  const handleStageLayout = (event: any) => {
    const layout = readLayout(event);
    setStageRect((current) => ({
      left: layout.left ?? current.left,
      top: layout.top ?? current.top,
      width: layout.width ?? current.width,
      height: layout.height ?? current.height,
    }));
  };

  const handleDesktopLayout = (event: any) => {
    const layout = readLayout(event);
    setDesktopRect((current) => ({
      left: layout.left ?? current.left,
      top: layout.top ?? current.top,
      width: layout.width ?? current.width,
      height: layout.height ?? current.height,
    }));
  };

  const handleLogoDown = (event: any) => {
    const point = readPoint(event, stageRect);
    dragActiveRef.current = true;
    setDragging(true);
    setDocked(false);
    setDragOffset({
      x: point.x - logoPos.x,
      y: point.y - logoPos.y,
    });
    setDesktopHot(false);
  };

  const handleMove = (event: any) => {
    if (!dragging || !dragActiveRef.current) return;
    const point = readPoint(event, stageRect);
    const next = getDraggedLogoPosition(point, stageRect, dragOffset);
    setLogoPos(next);
    setDesktopHot(desktopRect ? shouldDockLogo(next, desktopRect) : false);
  };

  const finishDrag = (event: any) => {
    if (!dragging || !dragActiveRef.current) return;
    dragActiveRef.current = false;
    const point = readPoint(event, stageRect);
    const releasePos = getDraggedLogoPosition(point, stageRect, dragOffset);
    const willDock = desktopRect ? shouldDockLogo(releasePos, desktopRect) : false;

    if (willDock && desktopRect) {
      setLogoPos(getDockedLogoPosition(desktopRect));
      setDocked(true);
    } else {
      setLogoPos(LOGO_HOME);
      setDocked(false);
    }

    setDragging(false);
    setDesktopHot(false);
  };

  const cancelDrag = () => {
    if (!dragging || !dragActiveRef.current) return;
    dragActiveRef.current = false;
    setLogoPos(LOGO_HOME);
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
