import { useState } from "@lynx-js/react";
import type { ScrollEvent } from "@lynx-js/types";
import { BackgroundDraggable } from "./BackgroundDraggable.jsx";

export function App() {
  const [posStyle, setPosStyle] = useState({ x: 0, y: 500 });
  const onScroll = (event: ScrollEvent) => {
    const detail = event.detail.scrollTop;
    const newPos = {
      x: 0,
      y: 500 - detail,
    };
    setPosStyle(newPos);
  };

  return (
    <view
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "white",
      }}
    >
      <view style="display:linear;linear-direction:row;width:100%;height:100%">
        <scroll-view
          id="scroll"
          bindscroll={onScroll}
          scroll-y
          style="display:linear;linear-direction:row;width:50%;height:100%"
        >
          <view style="background:yellow;width:100%;height:500px" />
          <view style="background:lightskyblue;width:100%;height:100px" />
          <view style="background:yellow;width:100%;height:1000px" />
        </scroll-view>
        <view style="width:50%;height:100%;display:linear;linear-direction:row;">
          <BackgroundDraggable size={100} posStyle={posStyle} />
        </view>
      </view>
    </view>
  );
}
