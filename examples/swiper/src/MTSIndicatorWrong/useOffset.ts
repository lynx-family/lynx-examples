import { useMainThreadRef } from "@lynx-js/react";
import type { MainThread } from "@lynx-js/types";

export function useOffset({
  onOffsetUpdate,
  onIndexUpdate,
  itemWidth,
}: {
  onOffsetUpdate: (offset: number) => void;
  onIndexUpdate: (index: number) => void;
  itemWidth: number;
}) {
  const touchStartXRef = useMainThreadRef<number>(0);
  const touchStartCurrentOffsetRef = useMainThreadRef<number>(0);
  const currentOffsetRef = useMainThreadRef<number>(0);
  const currentIndexRef = useMainThreadRef<number>(0);

  function updateOffset(offset: number) {
    "main thread";
    currentOffsetRef.current = offset;
    onOffsetUpdate(offset);
    const index = Math.round(-offset / itemWidth);
    if (currentIndexRef.current !== index) {
      currentIndexRef.current = index;
      onIndexUpdate(index);
    }
  }

  function handleTouchStart(e: MainThread.TouchEvent) {
    "main thread";
    touchStartXRef.current = e.touches[0].clientX;
    touchStartCurrentOffsetRef.current = currentOffsetRef.current;
  }

  function handleTouchMove(e: MainThread.TouchEvent) {
    "main thread";
    const touchMoveX = e.touches[0].clientX;
    const deltaX = touchMoveX - touchStartXRef.current;
    updateOffset(touchStartCurrentOffsetRef.current + deltaX);
  }

  function handleTouchEnd(e: MainThread.TouchEvent) {
    "main thread";
    touchStartXRef.current = 0;
    touchStartCurrentOffsetRef.current = 0;
  }

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
