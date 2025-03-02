import { root, useState } from "@lynx-js/react";
import type { IntersectionObserver, ObserveCallbackResult, TouchEvent } from "@lynx-js/types";

export default function App() {
  const [eventLog, setEventLog] = useState<string>("");
  let observer: IntersectionObserver | null = null;

  function handleTap(e: TouchEvent) {
    "background only";
    setEventLog("");
    if (observer == null) {
      observer = lynx.createIntersectionObserver({ componentId: "" }, { thresholds: [] });
      observer.relativeTo("#container");
      for (let i = 1; i <= 7; i++) {
        observer.observe("#view-item-" + i, (res: ObserveCallbackResult) => {
          if ((res as { isIntersecting: boolean } & ObserveCallbackResult).isIntersecting) {
            let rect = res.intersectionRect;
            let rect_str = ", location: [" + rect.left + ", " + rect.top + ", " + rect.right + ", " + rect.bottom + "]";
            setEventLog((log) => log + (log === "" ? "node: " : "\nnode: ") + res.observerId + rect_str);
          }
        });
      }
    }
  }

  return (
    <view
      style={{ width: "100%", height: "90%", overflow: "hidden" }}
      bindtap={(e) => {
        handleTap(e);
      }}
    >
      <view
        style={{
          width: "calc(100% - 10px)",
          height: "150px",
          margin: "5px",
          borderWidth: "2px",
        }}
      >
        <text>Click the page to get intersected nodes:</text>
        <text style={{ color: "red" }}>{eventLog}</text>
      </view>
      <view
        style={{
          width: "100%",
          height: "calc(100% - 165px)",
          paddingTop: "40px",
          marginTop: "15px",
          backgroundColor: "yellow",
        }}
        id="container"
      >
        {[0, 1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <view
              style={{
                width: "calc(100% - 10px)",
                height: "150px",
                margin: "5px",
                borderRadius: "5px",
                backgroundColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${
                  Math.floor(Math.random() * 256)
                })`,
                alignItems: "center",
              }}
              id={`view-item-${item + 1}`}
            >
              <text>view-item-{item + 1}</text>
            </view>
          );
        })}
        <view style={{ position: "absolute" }}>
          <text style={{ color: "blue" }}>view container</text>
        </view>
      </view>
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
