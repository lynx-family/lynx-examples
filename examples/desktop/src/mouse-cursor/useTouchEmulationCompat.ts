import { useMemo } from "@lynx-js/react";
import type { MouseEvent, TouchEvent } from "@lynx-js/types";

type TouchEventType = "touchstart" | "touchmove" | "touchend" | "touchcancel";

type TouchLikeHandlers = {
  onTouchStart?: (event: TouchEvent) => void;
  onTouchMove?: (event: TouchEvent) => void;
  onTouchEnd?: (event: TouchEvent) => void;
  onTouchCancel?: (event: TouchEvent) => void;
};

type TouchLikeBindProps = {
  bindtouchstart?: (event: TouchEvent) => void;
  bindmousedown?: (event: MouseEvent) => void;
  bindtouchmove?: (event: TouchEvent) => void;
  bindmousemove?: (event: MouseEvent) => void;
  bindtouchend?: (event: TouchEvent) => void;
  bindtouchcancel?: (event: TouchEvent) => void;
  bindmouseup?: (event: MouseEvent) => void;
};

function toTouchEvent(event: TouchEvent | MouseEvent, type: TouchEventType): TouchEvent {
  if ("touches" in event) return event as TouchEvent;

  const mouse = event;
  const touch = {
    identifier: 1,
    pageX: mouse.pageX,
    pageY: mouse.pageY,
    clientX: mouse.clientX,
    clientY: mouse.clientY,
  };

  return {
    detail: {
      x: mouse.pageX,
      y: mouse.pageY,
    },
    touches: type === "touchend" || type === "touchcancel" ? [] : [touch],
    changedTouches: [touch],
  } as TouchEvent;
}

export function useTouchEmulationCompat({
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onTouchCancel,
}: TouchLikeHandlers): TouchLikeBindProps {
  return useMemo(() => {
    const bind: TouchLikeBindProps = {};

    if (onTouchStart) {
      bind.bindtouchstart = (event) => {
        onTouchStart(toTouchEvent(event, "touchstart"));
      };
      bind.bindmousedown = (event) => {
        onTouchStart(toTouchEvent(event, "touchstart"));
      };
    }

    if (onTouchMove) {
      bind.bindtouchmove = (event) => {
        onTouchMove(toTouchEvent(event, "touchmove"));
      };
      bind.bindmousemove = (event) => {
        const buttons = event.buttons;
        if (!buttons || (buttons & 1) === 0) return;
        onTouchMove(toTouchEvent(event, "touchmove"));
      };
    }

    if (onTouchEnd) {
      bind.bindtouchend = (event) => {
        onTouchEnd(toTouchEvent(event, "touchend"));
      };
      bind.bindmouseup = (event) => {
        onTouchEnd(toTouchEvent(event, "touchend"));
      };
    }

    if (onTouchCancel) {
      bind.bindtouchcancel = (event) => {
        onTouchCancel(toTouchEvent(event, "touchcancel"));
      };
    }

    return bind;
  }, [onTouchStart, onTouchMove, onTouchEnd, onTouchCancel]);
}
