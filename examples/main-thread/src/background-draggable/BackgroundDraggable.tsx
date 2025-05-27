import { useState } from "@lynx-js/react";
import type { ScrollEvent } from "@lynx-js/types";

export function BackgroundDraggable({ size }: { size: number }) {
  const [posStyle, setPosStyle] = useState({ x: 0, y: 500 });

  let onScroll = (event: ScrollEvent) => {
    const detail = event.detail.scrollTop;
    const newPos = {
      x: 0,
      y: 500 - detail,
    };
    setPosStyle(newPos);
  };

  return (
    <view
      global-target="scroll"
      global-bindscroll={onScroll}
      style={{
        height: size + "px",
        width: size + "px",
        background: "lightskyblue",
        transform: `translate(${posStyle.x}px, ${posStyle.y}px)`,
      }}
    >
      <text>BGDraggable</text>
    </view>
  );
}
