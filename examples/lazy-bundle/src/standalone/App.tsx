import { lazy, Suspense, useEffect } from "@lynx-js/react";

import { createProducerBundleUrl } from "./entry-url.js";

import "../App.css";

const MyLazyBundle = lazy(() =>
  import(createProducerBundleUrl("MyLazyBundle.lynx.bundle"), {
    with: { type: "component" },
  })
);

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
