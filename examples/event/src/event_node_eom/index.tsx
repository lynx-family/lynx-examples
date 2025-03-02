import { root } from "@lynx-js/react";
import type { MainThread } from "@lynx-js/types";

export default function App() {
  function handleTapInMTS(e: MainThread.TouchEvent) {
    "main thread";
    const rndCol = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${
      Math.floor(Math.random() * 256)
    })`;
    e.currentTarget.setStyleProperty("background-color", rndCol);
  }

  return (
    <view
      style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}
      main-thread:bindtap={handleTapInMTS}
    >
      <view
        style={{
          width: "100px",
          height: "50px",
          borderRadius: "5px",
          backgroundColor: "gray",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <text style={{ color: "red" }}>click me</text>
      </view>
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
