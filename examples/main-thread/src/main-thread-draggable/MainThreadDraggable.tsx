import type { MainThread, ScrollEvent } from "@lynx-js/types";

export function MainThreadDraggable({ size }: { size: number }) {
  let onScroll = (event: MainThread.TouchEvent & ScrollEvent) => {
    "main thread";
    const detail = event.detail.scrollTop;
    const newPos = {
      x: 0,
      y: 500 - detail,
    };
    event.currentTarget.setStyleProperty(
      "transform",
      `translate(${newPos.x}px, ${newPos.y}px)`,
    );
  };

  return (
    <view
      global-target="scroll"
      main-thread:global-bindscroll={onScroll}
      style={{
        height: size + "px",
        width: size + "px",
        background: "lightskyblue",
        transform: `translate(0px, 500px)`,
      }}
    >
      <text>MTDraggable</text>
    </view>
  );
}
