import { useEffect, useState } from "@lynx-js/react";

function fetchProfile() {
  "background only";
  console.log("fetchProfile");
}

export function App() {
  const [count, setCount] = useState(0);
  const [isMainThreadRender, setIsMainThreadRender] = useState(__MAIN_THREAD__);

  useEffect(() => {
    fetchProfile();
  }, []);

  function handleTap() {
    "background only";
    setCount(count + 1);
    setIsMainThreadRender(!isMainThreadRender);
  }

  return (
    <view className="container">
      <view className="card" bindtap={handleTap}>
        <text className="cardText title">ReactLynx</text>
        <text className="cardText">{count}</text>
        <text className="cardText">
          {isMainThreadRender ? "MT render" : "BT render"}
        </text>
        <text className="cardText hint">Tap to simulate MT / BT</text>
      </view>
    </view>
  );
}
