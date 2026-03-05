import type { ElementFrame } from "../use-element-frame/index.js";

/** Pointer position in the element’s local frame. */
type PointerAxisPosition = {
  /** Horizontal offset from element's left edge (px). Can be <0 or >length. */
  offset: number;
  /** offset / elementLength. Can be <0 or >1. */
  offsetRatio: number;
  /** Measured length of the element along this axis (px). */
  elementLength: number;
};

/** Interaction callbacks. */
type UsePointerAxisProps = {
  axis?: PointerAxis;
  /** Injected measurement frame */
  frame?: ElementFrame;
  /** Fires during drag/move. */
  onUpdate?: (pos: PointerAxisPosition) => void;
  /** Fires on pointer up (final value). */
  onCommit?: (pos: PointerAxisPosition) => void;
};

type UsePointerAxisReturnValueBase<TPointer, TLayout> = {
  /** Bind on CONTAINER (or ELEMENT if container === element): <view bindtouchstart|bindmousedown={handlePointerDown} /> */
  handlePointerDown: (e: TPointer) => void;
  /** Bind on CONTAINER (or ELEMENT if container === element): <view bindtouchmove|bindmousemove={handlePointerMove} /> */
  handlePointerMove: (e: TPointer) => void;
  /** Bind on CONTAINER (or ELEMENT if container===element): <view bindtouchend|bindtouchcancel|bindmousedown|bindmousecancel={handlePointerUp} /> */
  handlePointerUp: (e: TPointer) => void;
  /** Bind on ELEMENT: <view bindlayoutchange={handleElementLayoutChange} /> */
  handleElementLayoutChange: (e: TLayout) => void;
};

type PointerAxis = "x" | "y";

export type { PointerAxis, PointerAxisPosition, UsePointerAxisProps, UsePointerAxisReturnValueBase };
