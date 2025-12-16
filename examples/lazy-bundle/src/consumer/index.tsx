import { lazy, root, Suspense, useEffect } from "@lynx-js/react";

import "./App.css";

const bundleUrl = `${process.env.ASSET_PREFIX}/producer.lynx.bundle`;
const MyLazyBundle = lazy(
  () =>
    import(bundleUrl, {
      with: { type: "component" },
    }),
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

root.render(<App />);
