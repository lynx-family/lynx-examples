import { useRef, useState } from "@lynx-js/react";
import { useTouchEmulation } from "@lynx-js/react-use";
import type { LayoutChangeEvent, MouseEvent, TouchEvent } from "@lynx-js/types";
import { useElementFrame } from "../use-element-frame/index.js";
import { usePointerAxis } from "../use-pointer-axis/index.js";

export type PointerPoint = { x: number; y: number };

export type UsePointerPointProps = {
  x0?: number;
  y0?: number;
  debug?: boolean;
};

export type PointerBindProps = {
  /** Pointer (touch/mouse) handlers bound at the field level. */
  bindtouchstart?: (e: TouchEvent) => void;
  bindtouchmove?: (e: TouchEvent) => void;
  bindtouchend?: (e: TouchEvent) => void;
  bindtouchcancel?: (e: TouchEvent) => void;

  bindmousedown?: (e: MouseEvent) => void;
  bindmousemove?: (e: MouseEvent) => void;
  bindmouseup?: (e: MouseEvent) => void;

  /** Layout measurement handler for field coordinate mapping. */
  bindlayoutchange?: (e: LayoutChangeEvent) => void;
};

export type PointerPointDebugInfo = {
  /** Latest raw event coords from TouchEvent.detail */
  lastEvent?: { x: number; y: number };

  /** Latest frame snapshot used for mapping */
  frame: { left: number | null; top: number | null; width: number; height: number };

  /** Latest computed axis positions */
  axis: {
    x?: { offset: number; ratio: number; length: number };
    y?: { offset: number; ratio: number; length: number };
  };
};

export type UsePointerPointReturnValue = {
  p: PointerPoint;
  bind: PointerBindProps;
  handlePointerDown: (e: TouchEvent) => void;
  handlePointerMove: (e: TouchEvent) => void;
  handlePointerUp: (e: TouchEvent) => void;
  handleElementLayoutChange: (e: LayoutChangeEvent) => void;
  /** Debug-only: populated when `debug: true` */
  debug?: PointerPointDebugInfo;
};

function usePointerPoint({
  x0 = 0.5,
  y0 = 0.5,
  debug = false,
}: UsePointerPointProps = {}): UsePointerPointReturnValue {
  const [p, setP] = useState<PointerPoint>({ x: x0, y: y0 });

  const lastXRef = useRef(x0);
  const lastYRef = useRef(y0);

  const frameRef = useElementFrame();

  const debugRef = useRef<PointerPointDebugInfo>({
    frame: { left: null, top: null, width: 0, height: 0 },
    axis: {},
  });

  const syncFrameDebug = () => {
    if (!debug) return;
    debugRef.current.frame = {
      left: frameRef.leftRef.current,
      top: frameRef.topRef.current,
      width: frameRef.widthRef.current,
      height: frameRef.heightRef.current,
    };
  };

  const axisX = usePointerAxis({
    axis: "x",
    frame: frameRef,
    onUpdate(pos) {
      lastXRef.current = pos.offsetRatio;
      if (debug) {
        syncFrameDebug();
        debugRef.current.axis.x = {
          offset: pos.offset,
          ratio: pos.offsetRatio,
          length: pos.elementLength,
        };
      }
      setP({ x: lastXRef.current, y: lastYRef.current });
    },
  });

  const axisY = usePointerAxis({
    axis: "y",
    frame: frameRef,
    onUpdate(pos) {
      lastYRef.current = pos.offsetRatio;
      if (debug) {
        syncFrameDebug();
        debugRef.current.axis.y = {
          offset: pos.offset,
          ratio: pos.offsetRatio,
          length: pos.elementLength,
        };
      }
      setP({ x: lastXRef.current, y: lastYRef.current });
    },
  });

  const handlePointerDown = (e: TouchEvent) => {
    if (debug) {
      debugRef.current.lastEvent = { x: e.detail.x, y: e.detail.y };
    }
    frameRef.refreshRect(() => {
      axisY.handlePointerDown(e);
      axisX.handlePointerDown(e);
    });
  };

  const handlePointerMove = (e: TouchEvent) => {
    if (debug) {
      debugRef.current.lastEvent = { x: e.detail.x, y: e.detail.y };
    }
    axisY.handlePointerMove(e);
    axisX.handlePointerMove(e);
  };

  const handlePointerUp = (e: TouchEvent) => {
    if (debug) {
      debugRef.current.lastEvent = { x: e.detail.x, y: e.detail.y };
    }
    axisY.handlePointerUp(e);
    axisX.handlePointerUp(e);
  };

  const handleElementLayoutChange = (e: LayoutChangeEvent) => {
    frameRef.handleLayoutChange(e);
  };

  // One emulation at the boundary (touch + mouse)
  const bindPointer = useTouchEmulation({
    onTouchStart: handlePointerDown,
    onTouchMove: handlePointerMove,
    onTouchEnd: handlePointerUp,
  });

  return {
    p,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleElementLayoutChange,
    bind: {
      bindtouchstart: bindPointer.bindtouchstart,
      bindtouchmove: bindPointer.bindtouchmove,
      bindtouchend: bindPointer.bindtouchend,
      bindtouchcancel: bindPointer.bindtouchcancel,
      bindmousedown: bindPointer.bindmousedown,
      bindmousemove: bindPointer.bindmousemove,
      bindmouseup: bindPointer.bindmouseup,
      bindlayoutchange: handleElementLayoutChange,
    },
    debug: debug ? debugRef.current : undefined,
  };
}

export { usePointerPoint };
