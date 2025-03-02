import { useRef } from "@lynx-js/react";
import type { NodesRef } from "@lynx-js/types";

export function useUpdateSwiperStyle() {
  const containerRef = useRef<NodesRef>(null);

  function updateSwiperStyle(offset: number) {
    containerRef.current?.setNativeProps({
      transform: `translateX(${offset}px)`,
    }).exec();
  }

  return {
    containerRef,
    updateSwiperStyle,
  };
}
