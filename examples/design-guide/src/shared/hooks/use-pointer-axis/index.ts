import { useRef } from "@lynx-js/react";
import type { LayoutChangeEvent, TouchEvent } from "@lynx-js/types";
import type { PointerAxisPosition, UsePointerAxisProps, UsePointerAxisReturnValueBase } from "./types.js";

/**
 * Pointer → element-local coordinates adapter (single axis, X).
 *
 * - The container usually hosts touch/pointer events (recommended for larger hit area).
 * - The element provides the measurement frame (layout + bounding rect).
 * - If you don't need a separate container, you may bind all handlers on the element
 *   itself (container === element).
 *
 * No clamping/step logic is applied here.
 */
function usePointerAxis({
  axis = "x",
  onUpdate,
  onCommit,
}: UsePointerAxisProps = {}): UsePointerAxisReturnValue {
  /** Element (coordinate frame) & metrics */
  const eleStartRef = useRef<number | null>(null); // left or top
  const eleLengthRef = useRef(0); // width or height
  const posRef = useRef<PointerAxisPosition | null>(null);
  const draggingRef = useRef(false);

  const pickCoord = (e: TouchEvent) => (axis === "x" ? e.detail.x : e.detail.y);

  const buildPosition = (coord: number): PointerAxisPosition | null => {
    const length = eleLengthRef.current;
    const start = eleStartRef.current;

    if (length > 0 && start != null) {
      const offset = coord - start;
      const offsetRatio = offset / length;
      const pos = { offset, offsetRatio, elementLength: length };
      posRef.current = pos;
      return pos;
    }
    return null;
  };

  const handlePointerDown = (e: TouchEvent) => {
    draggingRef.current = true;
    buildPosition(pickCoord(e));
    if (posRef.current) onUpdate?.(posRef.current);
  };

  const handlePointerMove = (e: TouchEvent) => {
    if (!draggingRef.current) return;
    buildPosition(pickCoord(e));
    if (posRef.current) onUpdate?.(posRef.current);
  };

  const handlePointerUp = (e: TouchEvent) => {
    draggingRef.current = false;
    buildPosition(pickCoord(e));
    if (posRef.current) {
      onUpdate?.(posRef.current);
      onCommit?.(posRef.current);
    }
  };

  const handleElementLayoutChange = (e: LayoutChangeEvent) => {
    eleLengthRef.current = axis === "x" ? e.detail.width : e.detail.height;

    const currentTarget = lynx
      .createSelectorQuery()
      // @ts-expect-error
      .selectUniqueID(e.currentTarget.uid);

    currentTarget
      ?.invoke({
        method: "boundingClientRect",
        params: { relativeTo: "screen" }, // screen-based so it matches e.detail.x/y
        success: (res: { left: number; top: number }) => {
          eleStartRef.current = axis === "x" ? res.left : res.top;
        },
      })
      .exec();
  };

  return {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleElementLayoutChange,
  };
}

type UsePointerAxisReturnValue = UsePointerAxisReturnValueBase<
  TouchEvent,
  LayoutChangeEvent
>;

export { usePointerAxis };
export type { PointerAxisPosition, UsePointerAxisProps, UsePointerAxisReturnValue };
