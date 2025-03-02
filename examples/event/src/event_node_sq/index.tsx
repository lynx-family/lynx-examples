import { root } from "@lynx-js/react";
import type { NodesRef, SelectorQuery, Target, TouchEvent } from "@lynx-js/types";

export default function App() {
  function handleTap(e: TouchEvent) {
    const rndCol = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${
      Math.floor(Math.random() * 256)
    })`;
    (lynx
      .createSelectorQuery() as { selectUniqueID(uid: number): NodesRef } & SelectorQuery)
      .selectUniqueID((e.currentTarget as { uid: number } & Target).uid)
      .setNativeProps({
        "background-color": rndCol,
      })
      .exec();
  }

  return (
    <view
      style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}
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
