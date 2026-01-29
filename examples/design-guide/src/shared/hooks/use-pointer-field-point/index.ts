import { useRef, useState } from "@lynx-js/react";
import type { LayoutChangeEvent, TouchEvent } from "@lynx-js/types";
import { usePointerInteraction } from "../use-pointer-interaction/index.js";

type FieldPoint = {
  /** Normalized x in [0, 1] (not clamped). */
  x: number;
  /** Normalized y in [0, 1] (not clamped). */
  y: number;
};

type UsePointerFieldPointProps = {
  /** Initial normalized x, defaults to 0.5*/
  x0?: number;
  y0?: number;
};

function usePointerFieldPoint({ x0 = 0.5, y0 = 0.5 }: UsePointerFieldPointProps = {}) {
  const [p, setP] = useState<FieldPoint>({ x: x0, y: y0 });

  const eleTopRef = useRef<number | null>(null);
  const eleHeightRef = useRef(0);

  const lastYRatioRef = useRef(y0);

  const pointer = usePointerInteraction({
    onUpdate(pos) {
      setP({
        x: pos.offsetRatio,
        y: lastYRatioRef.current,
      });
    },
  });

  const updateYFromEvent = (e: TouchEvent) => {
    const top = eleTopRef.current;
    const height = eleHeightRef.current;
    if (top != null && height > 0) {
      lastYRatioRef.current = (e.detail.y - top) / height;
    }
  };

  const handlePointerDown2D = (e: TouchEvent) => {
    updateYFromEvent(e);
    pointer.handlePointerDown(e);
  };

  const handlePointerMove2D = (e: TouchEvent) => {
    updateYFromEvent(e);
    // X handled by existing hook
    pointer.handlePointerMove(e);
  };

  const handleLayoutChange2D = (e: LayoutChangeEvent) => {
    eleHeightRef.current = e.detail.height;

    const currentTarget = lynx
      .createSelectorQuery()
      // @ts-expect-error
      .selectUniqueID(e.currentTarget.uid);

    currentTarget
      ?.invoke({
        method: "boundingClientRect",
        params: { relativeTo: "screen" },
        success: (res: { top: number }) => {
          eleTopRef.current = res.top;
        },
      })
      .exec();

    pointer.handleElementLayoutChange(e);
  };

  return {
    p,
    handlePointerDown: handlePointerDown2D,
    handlePointerMove: handlePointerMove2D,
    handlePointerUp: pointer.handlePointerUp,
    handleElementLayoutChange: handleLayoutChange2D,
  };
}

export { usePointerFieldPoint };
export type { FieldPoint };
