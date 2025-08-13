import { lazy, root, Suspense, useCallback, useMemo, useState } from "@lynx-js/react";
import type { PerformanceEntry } from "@lynx-js/types";
import { useLynxPerformanceObserver } from "../common/utils.jsx";
import "./index.scss";

const MyLazyComponent = lazy(() => import("./MyLazyComponent.jsx"));

export default function LazyBundleEntryExample(this: any) {
  const [lazyBundleEntry, setLazyBundleEntry] = useState<string>("");

  // 1. Create a performance observer callback.
  let callback = useCallback((entry: PerformanceEntry) => {
    console.log(entry.entryType, entry.name);
    if (entry.entryType == "resource" && entry.name == "lazyBundle") {
      // 3. Received "resource.lazyBundle" event.
      setLazyBundleEntry(JSON.stringify(entry, null, 4));
    }
  }, []);
  // 2. Register to listen to the "resource" event.
  const eventTypes = useMemo(() => ["resource"], []);
  useLynxPerformanceObserver(eventTypes, callback);

  return (
    <view className="container">
      <text className="title">Hello LazyBundleEntry~</text>

      <view style={{ flexDirection: "column" }}>
        <text className="entry">{lazyBundleEntry}</text>
      </view>

      <view style={{ flexDirection: "column" }}>
        <text>Hello, This is main page!</text>
        <Suspense fallback={<text>Loading...</text>}>
          <MyLazyComponent />
        </Suspense>
      </view>
    </view>
  );
}

root.render(<LazyBundleEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
