import { root, useState } from "@lynx-js/react";
import type { TouchEvent } from "@lynx-js/types";

export default function App() {
  const [bgColor, setBgColor] = useState<string>("white");

  function handleTap(e: TouchEvent) {
    const rndCol = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${
      Math.floor(Math.random() * 256)
    })`;
    setBgColor(rndCol);
  }

  return (
    <view
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
      }}
      bindtap={handleTap}
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
