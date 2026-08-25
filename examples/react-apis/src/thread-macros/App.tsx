import { useEffect, useState } from "@lynx-js/react";

function fetchProfile() {
  "background only";
  console.log("fetchProfile");
}

export function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchProfile();
  }, []);

  function handleTap() {
    "background only";
    setCount(count + 1);
  }

  return (
    <view className="container">
      <view className="card" bindtap={handleTap}>
        <text>ReactLynx</text>
        <text>{count}</text>
        {__MAIN_THREAD__ ? <text>main</text> : <text>background</text>}
      </view>
    </view>
  );
}
