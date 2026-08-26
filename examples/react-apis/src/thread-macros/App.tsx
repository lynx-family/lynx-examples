import { useEffect, useState } from "@lynx-js/react";

function fetchProfile() {
  "background only";
  console.log("fetchProfile");
}

export function App({ initialCount = 0 }: { initialCount?: number }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    fetchProfile();
  }, []);

  function handleTap() {
    "background only";
    setCount(count + 1);
  }

  return (
    <view className="card" bindtap={handleTap}>
      <text className="cardText title">ReactLynx</text>
      <text className="cardText">{count}</text>
      {/* For demonstration only. In practice, keep the structure identical across both threads. */}
      {__MAIN_THREAD__ ? <text className="cardText">main</text> : <text className="cardText">background</text>}
    </view>
  );
}

export default App;
