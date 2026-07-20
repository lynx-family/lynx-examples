import { useMainThreadRef, useState } from "@lynx-js/react";
import type { MainThread, ScrollEvent } from "@lynx-js/types";
import { BackgroundDraggable } from "./BackgroundDraggable.jsx";
import { MainThreadDraggable } from "./MainThreadDraggable.jsx";

const DEFAULT_POS = { x: 0, y: 500 };

export function App() {
  const mtDraggableRef = useMainThreadRef<MainThread.Element>(null);
  const [posStyle, setPosStyle] = useState(DEFAULT_POS);

  const onBtsScroll = (event: ScrollEvent) => {
    const scrollTop = event.detail.scrollTop;
    const newPos = {
      ...DEFAULT_POS,
      y: DEFAULT_POS.y - scrollTop,
    };
    setPosStyle(newPos);
  };

  const onMtsScroll = (event: ScrollEvent) => {
    "main thread";
    const scrollTop = event.detail.scrollTop;
    const newPos = {
      ...DEFAULT_POS,
      y: DEFAULT_POS.y - scrollTop,
    };
    mtDraggableRef.current?.setStyleProperty("transform", `translate(${newPos.x}px, ${newPos.y}px)`);
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
          bindscroll={onBtsScroll}
          main-thread:bindscroll={onMtsScroll}
          scroll-y
          style="display:linear;linear-direction:row;width:50%;height:100%"
        >
          <view style="background:yellow;width:100%;height:500px" />
          <view style="background:lightskyblue;width:100%;height:100px" />
          <view style="background:yellow;width:100%;height:1000px" />
        </scroll-view>
        <view style="width:50%;height:100%;display:linear;linear-direction:row;">
          <MainThreadDraggable size={100} main-thread:ref={mtDraggableRef} />
          <BackgroundDraggable size={100} posStyle={posStyle} />
        </view>
      </view>
    </view>
  );
}
