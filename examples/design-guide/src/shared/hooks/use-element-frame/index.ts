import { useRef } from "@lynx-js/react";
import type { MutableRefObject } from "@lynx-js/react";
import type { LayoutChangeEvent } from "@lynx-js/types";

/**
 * Element measurement frame.
 *
 * Maintains the element's screen-based bounding frame:
 * - left / top (from boundingClientRect)
 * - width / height (from layout change)
 *
 * Designed to be shared by multiple pointer axes
 * to avoid duplicate layout queries.
 */
export type ElementFrame = {
  /** Screen-based left offset */
  leftRef: MutableRefObject<number | null>;

  /** Screen-based top offset */
  topRef: MutableRefObject<number | null>;

  /** Element width (px) */
  widthRef: MutableRefObject<number>;

  /** Element height (px) */
  heightRef: MutableRefObject<number>;
};

export type UseElementFrameReturnValue = ElementFrame & {
  /** Bind to <view bindlayoutchange={...} /> */
  handleLayoutChange: (e: LayoutChangeEvent) => void;
};

export function useElementFrame(): UseElementFrameReturnValue {
  const leftRef = useRef<number | null>(null);
  const topRef = useRef<number | null>(null);
  const widthRef = useRef(0);
  const heightRef = useRef(0);

  const handleLayoutChange = (e: LayoutChangeEvent) => {
    // Sync element size from layout event
    widthRef.current = e.detail.width;
    heightRef.current = e.detail.height;

    // Query screen-based bounding rect
    const currentTarget = lynx
      .createSelectorQuery()
      // @ts-expect-error Lynx internal UID typing
      .selectUniqueID(e.currentTarget.uid ?? e.currentTarget.uniqueId);

    currentTarget
      ?.invoke({
        method: "boundingClientRect",
        params: { relativeTo: "screen" },
        success: (res: { left: number; top: number }) => {
          leftRef.current = res.left;
          topRef.current = res.top;
        },
      })
      .exec();
  };

  return {
    leftRef,
    topRef,
    widthRef,
    heightRef,
    handleLayoutChange,
  };
}
