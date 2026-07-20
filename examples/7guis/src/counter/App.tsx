import { useCallback, useState } from "@lynx-js/react";

export function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <view
      style={{
        display: "flex",
        padding: "20px",
        flexDirection: "row",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <text style={{ fontSize: "24px", minWidth: "60px" }}>{count}</text>
      <view
        style={{
          padding: "8px 20px",
          backgroundColor: "#0077ff",
          borderRadius: "6px",
        }}
        bindtap={increment}
      >
        <text style={{ color: "#fff", fontSize: "16px" }}>Count</text>
      </view>
    </view>
  );
}
