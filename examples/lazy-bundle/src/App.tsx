import { lazy, Suspense, useEffect } from "@lynx-js/react";

import "./App.css";

const MyLazyBundle = lazy(() => import("./MyLazyBundle.jsx"));

export function App() {
  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);

  return (
    <view className="root">
      <text className="text">Hello, ReactLynx</text>
      <Suspense fallback={<text className="sub-text">Loading...</text>}>
        <MyLazyBundle />
      </Suspense>
    </view>
  );
}
