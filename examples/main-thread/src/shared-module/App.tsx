import { runOnBackground, useMainThreadRef, useMemo, useState } from "@lynx-js/react";
import type { MainThread } from "@lynx-js/types";
import { getColorCount, getNextColor } from "./color-utils.js" with { runtime: "shared" };

export function App() {
  // --- Background Thread state ---
  const [count, setCount] = useState(0);
  const currentColor = useMemo(() => getNextColor(count), [count]);

  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  // --- Main Thread function ---
  const boxRef = useMainThreadRef<MainThread.Element & { __colorIdx?: number }>(null);

  const onTap = () => {
    "main thread";
    // Use shared function directly on the Main Thread to get color
    const idx = boxRef.current?.__colorIdx ?? 0;
    const nextIdx = idx + 1;
    const color = getNextColor(nextIdx);

    boxRef.current?.setStyleProperty("background-color", color);
    if (boxRef.current) boxRef.current.__colorIdx = nextIdx;

    // Also update BG state so the text reflects the change
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
          backgroundColor: currentColor,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
        }}
      >
        <text style={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>
          Tap to cycle
        </text>
        <text style={{ fontSize: "14px", color: "white", marginTop: "8px" }}>
          Color {(count % getColorCount()) + 1}/{getColorCount()}
        </text>
      </view>
    </view>
  );
}
