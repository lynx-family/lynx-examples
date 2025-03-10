import * as React from "@lynx-js/react";
import { root, useMemo, useState } from "@lynx-js/react";
import type { LoadBundleEntry, PerformanceEntry } from "@lynx-js/types";
import "./index.scss";

export default function LoadBundleEntryExample(this: any) {
  const [loadBundleEntry, setLoadBundleEntry] = useState<string>("");

  useMemo(() => {
    "background-only";
    // 1. Create a performance observer.
    const observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      if (entry.entryType == "pipeline" && entry.name == "loadBundle") {
        // 3. Received "pipeline.loadBundle" event.
        const loadBundleEntry = entry as LoadBundleEntry;
        setLoadBundleEntry(JSON.stringify(loadBundleEntry, null, 4));
      }
    });
    // 2. Register to listen to the "pipeline" event.
    observer.observe(["pipeline"]);
  }, []);

  return (
    <view className="container">
      <text className="title">Hello LoadBundleEntry~</text>
      <text className="entry">{loadBundleEntry}</text>
    </view>
  );
}

root.render(<LoadBundleEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
