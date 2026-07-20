import { root, runOnBackground, useState } from "@lynx-js/react";
import "./index.css";
import type { MainThread } from "@lynx-js/types";

export default function App() {
  const [active, setActive] = useState({ outer: false, middle: false, inner: false });

  // Utility to flash a box when it's clicked
  const flashBT = (key: "outer" | "middle" | "inner") => {
    setActive((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => setActive((prev) => ({ ...prev, [key]: false })), 200);
  };

  // Utility to flash a box when it's clicked
  const flash = (
    key: "outer" | "middle" | "inner",
  ) => {
    "main thread";
    runOnBackground(flashBT)(key);
  };

  function handleOuterTap(e: MainThread.TouchEvent) {
    "main thread";
    flash("outer");
  }

  function handleMiddleTap(e: MainThread.TouchEvent) {
    "main thread";
    flash("middle");
  }

  function handleInnerTap(e: MainThread.TouchEvent) {
    "main thread";
    e.stopPropagation(); // ✋ stop event bubbling
    flash("inner");
  }

  return (
    <view
      main-thread:bindtap={handleOuterTap}
      className={`box outer ${active.outer ? "active" : ""}`}
    >
      <text>Outer {active.outer ? "(active)" : "(inactive)"}</text>
      <view
        main-thread:bindtap={handleMiddleTap}
        className={`box middle ${active.middle ? "active" : ""}`}
      >
        <text>Middle {active.middle ? "(active)" : "(inactive)"}</text>
        <view
          main-thread:bindtap={handleInnerTap}
          className={`box inner ${active.inner ? "active" : ""}`}
        >
          <text>Inner (click me, stops propagation) {active.inner ? "(active)" : "(inactive)"}</text>
        </view>
      </view>
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
