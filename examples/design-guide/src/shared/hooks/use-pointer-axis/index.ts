import { useRef } from "@lynx-js/react";
import type { LayoutChangeEvent, TouchEvent } from "@lynx-js/types";
import { useElementFrame } from "../use-element-frame/index.js";
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
  frame: externalFrame,
}: UsePointerAxisProps = {}): UsePointerAxisReturnValue {
  /** Element (coordinate frame) & metrics */

  const internalFrameRef = useElementFrame();
  const frame = externalFrame ?? internalFrameRef;

  const posRef = useRef<PointerAxisPosition | null>(null);
  const draggingRef = useRef(false);

  const pickCoord = (e: TouchEvent) => {
    const t = e.touches?.[0] ?? e.changedTouches?.[0];
    if (!t) return null;
    return axis === "x" ? t.clientX : t.clientY;
  };

  const startRef = axis === "x" ? frame.leftRef : frame.topRef;
  const lengthRef = axis === "x" ? frame.widthRef : frame.heightRef;

  const buildPosition = (coord: number | null): PointerAxisPosition | null => {
    if (coord === null) return null;
    const length = lengthRef.current;
    const start = startRef.current;

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

    // Web: viewport changes may not trigger layoutchange; refresh rect before computing.
    if (externalFrame == null) {
      internalFrameRef.refreshRect(() => {
        buildPosition(pickCoord(e));
        if (posRef.current) onUpdate?.(posRef.current);
      });
    }

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
    // If using injected frame, measurement is handled elsewhere.
    if (externalFrame != null) return;
    internalFrameRef.handleLayoutChange(e);
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
