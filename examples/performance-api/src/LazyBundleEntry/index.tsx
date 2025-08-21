const MyLazyBundle = lazy(() => import("./MyLazyBundle.jsx"));

import { lazy, root, Suspense, useCallback, useMemo, useState } from "@lynx-js/react";
import type { LazyBundleEntry, PerformanceEntry } from "@lynx-js/types";
import { useEffect } from "react";
import { ScrollItem } from "../common/ScrollItem/index.jsx";
import "./index.scss";

export default function LazyBundleEntryExample() {
  const [lazyBundleEntry, setLazyBundleEntry] = useState<string>("");
  const [entryName, setEntryName] = useState<string>("Waiting...");

  useEffect(() => {
    "background-only";
    // 1. Create a performance observer.
    const observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      if (entry.entryType == "resource") {
        // 3. Received "resource.lazyBundleEntry" event.
        const lazyBundleEntry = entry as LazyBundleEntry;
        setLazyBundleEntry(JSON.stringify(lazyBundleEntry, null, 4));
        setEntryName("LazyBundleEntry");
      }
    });
    // 2. Register to listen to the "resource" event.
    observer.observe(["resource"]);
  }, []);

  return (
    <view className="container">
      <text className="title">Hello LazyBundleEntry~</text>
      <Suspense fallback={<text className="sub-text">Loading...</text>}>
        <MyLazyBundle />
      </Suspense>
      <ScrollItem title={entryName} value={lazyBundleEntry} />
    </view>
  );
}

root.render(<LazyBundleEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
