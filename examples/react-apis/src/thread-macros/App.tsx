import { useEffect, useState } from "@lynx-js/react";

function fetchProfile() {
  "background only";
  console.log("fetchProfile");
}

export function App() {
  const [count, setCount] = useState(0);
  const [showMainThread, setShowMainThread] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  function handleTap() {
    "background only";
    setCount(count + 1);
  }

  function handleToggle() {
    "background only";
    setShowMainThread((v) => !v);
  }

  return (
    <view className="container">
      <view className="toggle" bindtap={handleToggle}>
        <text className="toggle-text">
          {showMainThread ? "Showing: First Frame (Main Thread)" : "Showing: After Hydration (Background)"}
        </text>
      </view>
      <view className="card" bindtap={handleTap}>
        <text>ReactLynx</text>
        <text>{count}</text>
        {showMainThread ? <text>main</text> : <text>background</text>}
      </view>
    </view>
  );
}
