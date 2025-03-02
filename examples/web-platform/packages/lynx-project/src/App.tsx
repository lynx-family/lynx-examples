import { useEffect } from "@lynx-js/react";

export function App() {
  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);

  return (
    <view>
      <text>Hello, ReactLynx</text>
    </view>
  );
}
