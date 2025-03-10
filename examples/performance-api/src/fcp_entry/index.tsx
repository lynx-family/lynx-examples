import * as React from "@lynx-js/react";
import { root, useMemo, useState } from "@lynx-js/react";
import type { MetricFcpEntry, PerformanceEntry } from "@lynx-js/types";
import "./index.scss";

export default function MetricFcpEntryExample(this: any) {
  const [fcpEntry, setFcpEntry] = useState<string>("");

  useMemo(() => {
    "background-only";
    // 1. Create a performance observer.
    const observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      if (entry.entryType == "metric" && entry.name == "fcp") {
        // 3. Received "metric.fcp" event.
        const fcpEntry = entry as MetricFcpEntry;
        setFcpEntry(JSON.stringify(fcpEntry, null, 4));
      }
    });
    // 2. Register to listen to the "metric.fcp" event.
    observer.observe(["metric.fcp"]);
  }, []);

  return (
    <view className="container">
      <text className="title">Hello MetricFcpEntry~</text>
      <text className="entry">{fcpEntry}</text>
    </view>
  );
}

root.render(<MetricFcpEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
