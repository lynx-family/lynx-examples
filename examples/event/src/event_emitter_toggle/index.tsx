import { root, useState } from "@lynx-js/react";
import { useLynxGlobalEventListener } from "@lynx-js/react";
import type { TouchEvent } from "@lynx-js/types";

export function ComponentA() {
  const [eventLog, setEventlog] = useState<string>("");

  useLynxGlobalEventListener("tapitem", (e) => {
    setEventlog((e as TouchEvent).target.dataset.item);
  });

  return (
    <view style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
      <text>
        Tap on item-<text style={{ color: "red" }}>{eventLog}</text>
      </text>
    </view>
  );
}

export function ComponentB() {
  function handleTap(e: TouchEvent) {
    lynx.getJSModule("GlobalEventEmitter").toggle("tapitem", e);
  }

  return (
    <scroll-view
      scroll-orientation="vertical"
      style={{ width: "100%", height: "calc(100% - 40px)", marginTop: "40px" }}
    >
      {[0, 1, 2, 3, 4, 5, 6].map((item) => {
        return (
          <view
            style={{
              width: "calc(100% - 10px)",
              height: "200px",
              margin: "5px",
              backgroundColor: "orange",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
            data-item={item + 1}
            bindtap={handleTap}
          >
            <text user-interaction-enabled={false}>item-{item + 1}</text>
          </view>
        );
      })}
    </scroll-view>
  );
}

export default function App() {
  return (
    <view style={{ width: "100%", height: "90%" }}>
      <view
        style={{ width: "100%", height: "150px", backgroundColor: "yellow" }}
      >
        <view style={{ position: "absolute" }}>
          <text style={{ color: "blue" }}>ComponentA</text>
        </view>
        <ComponentA />
      </view>
      <view
        style={{
          width: "100%",
          height: "calc(100% - 165px)",
          marginTop: "15px",
          backgroundColor: "#ccc",
        }}
      >
        <view style={{ position: "absolute" }}>
          <text style={{ color: "blue" }}>ComponentB</text>
        </view>
        <ComponentB />
      </view>
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
