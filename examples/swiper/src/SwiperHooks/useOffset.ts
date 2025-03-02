import { useRef } from "@lynx-js/react";
import type { TouchEvent } from "@lynx-js/types";

export function useOffset({
  onOffsetUpdate,
}: {
  onOffsetUpdate: (offset: number) => void;
}) {
  const touchStartXRef = useRef<number>(0);
  const touchStartCurrentOffsetRef = useRef<number>(0);
  const currentOffsetRef = useRef<number>(0);

  function updateOffset(offset: number) {
    currentOffsetRef.current = offset;
    onOffsetUpdate(offset);
  }

  function handleTouchStart(e: TouchEvent) {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartCurrentOffsetRef.current = currentOffsetRef.current;
  }

  function handleTouchMove(e: TouchEvent) {
    const delta = e.touches[0].clientX - touchStartXRef.current;
    const offset = touchStartCurrentOffsetRef.current + delta;
    updateOffset(offset);
  }

  function handleTouchEnd(e: TouchEvent) {
    touchStartXRef.current = 0;
    touchStartCurrentOffsetRef.current = 0;
  }

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
