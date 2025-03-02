import * as React from "@lynx-js/react";
import { root, useMemo, useState } from "@lynx-js/react";
import type { MetricTtiEntry, PerformanceEntry } from "@lynx-js/types";
import "./index.scss";

export default function MetricTtiEntryExample(this: any) {
  const [ttiEntry, setTtiEntry] = useState<string>("");

  useMemo(() => {
    "background-only";
    // 1. Create a performance observer.
    let observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      if (entry.entryType == "metric" && entry.name == "tti") {
        // 3. Received "metric.tti" event.
        let ttiEntry = entry as MetricTtiEntry;
        setTtiEntry(JSON.stringify(ttiEntry, null, 4));
      }
    });
    // 2. Register to listen to the "metric.tti" event.
    observer.observe(["metric.tti"]);
  }, []);

  return (
    <view className="container">
      <text className="title">Hello MetricTtiEntry~</text>
      <text className="entry">{ttiEntry}</text>
    </view>
  );
}

root.render(<MetricTtiEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
