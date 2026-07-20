import { runOnBackground, runOnMainThread, useEffect, useMainThreadRef, useState } from "@lynx-js/react";
import type { MainThread } from "@lynx-js/types";

const COLORS = ["#4FC3F7", "#81C784", "#FFB74D", "#E57373", "#BA68C8"];

export function App() {
  // --- Background Thread state ---
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  // --- Main Thread function ---
  const boxRef = useMainThreadRef<MainThread.Element>(null);

  const applyColor = (color: string) => {
    "main thread";
    boxRef.current?.setStyleProperty("background-color", color);
  };

  // --- Cross-thread wiring ---
  // When count changes on BG thread, pick the next color and
  // call the MT function to apply it.
  useEffect(() => {
    const nextColor = COLORS[count % COLORS.length]!;
    runOnMainThread(applyColor)(nextColor);
  }, [count]);

  // Main Thread tap handler → calls BG function
  const onTap = () => {
    "main thread";
    runOnBackground(incrementCount)();
  };

  return (
    <view
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <view
        main-thread:ref={boxRef}
        main-thread:bindtap={onTap}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: COLORS[0],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
        }}
      >
        <text style={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>
          Tap count: {count}
        </text>
      </view>
    </view>
  );
}
