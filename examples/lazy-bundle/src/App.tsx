import { lazy, Suspense, useEffect } from "@lynx-js/react";

import "./App.css";

const url =
  "https://lf-lynx.tiktok-cdns.com/obj/lynx-artifacts-oss-sg/plugin/static/lazy-bundle-producer-new.lynx.bundle";
const MyLazyBundle = lazy(() => import(url, { with: { type: "component" } }));

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
