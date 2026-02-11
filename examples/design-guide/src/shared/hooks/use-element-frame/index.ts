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
  /**
   * Refresh bounding rect using the last known target id.
   * Useful on web where viewport changes may not always trigger layoutchange.
   *
   * The optional callback is invoked after refs are updated.
   */
  refreshRect: (onRefreshed?: () => void) => void;
};

export function useElementFrame(): UseElementFrameReturnValue {
  const leftRef = useRef<number | null>(null);
  const topRef = useRef<number | null>(null);
  const widthRef = useRef(0);
  const heightRef = useRef(0);

  // Keep the last known element id so we can re-query rect on demand.
  const targetIdRef = useRef<number | string | null>(null);

  const queryRectById = (id: number | string | null, onSuccess?: () => void) => {
    if (id == null) return;

    const currentTarget = lynx
      .createSelectorQuery()
      // @ts-expect-error Lynx internal UniqueID typing
      .selectUniqueID(id);

    currentTarget
      ?.invoke({
        method: "boundingClientRect",
        success: (res: { left: number; top: number; width: number; height: number }) => {
          leftRef.current = res.left;
          topRef.current = res.top;
          widthRef.current = res.width;
          heightRef.current = res.height;
          onSuccess?.();
        },
      })
      .exec();
  };

  const handleLayoutChange = (e: LayoutChangeEvent) => {
    // Sync element size from layout event
    widthRef.current = e.detail.width;
    heightRef.current = e.detail.height;

    // @ts-expect-error Lynx internal UniqueID typing
    const id = e.currentTarget.uid ?? e.currentTarget.uniqueId;
    targetIdRef.current = id;

    queryRectById(id);
  };

  const refreshRect = (onRefreshed?: () => void) => {
    queryRectById(targetIdRef.current, onRefreshed);
  };

  return {
    leftRef,
    topRef,
    widthRef,
    heightRef,
    handleLayoutChange,
    refreshRect,
  };
}
