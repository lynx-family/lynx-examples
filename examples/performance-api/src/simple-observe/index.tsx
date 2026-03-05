import * as React from "@lynx-js/react";
import { root, useMemo, useState } from "@lynx-js/react";
import type { PerformanceEntry } from "@lynx-js/types";
import "../common/common.css";
import "./index.css";

export default function SimpleObserveExample(this: any) {
  const [receivedEntries, setReceivedEntries] = useState<Set<string>>(new Set<string>());

  useMemo(() => {
    "background-only";
    // 1. Create a performance observer.
    const observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      // 3. process "metric.fsp" and "pipeline"
      let entryType: string | undefined;
      if (entry.entryType == "metric" && entry.name == "fsp") {
        entryType = "MetricFspEntry";
      } else if (entry.entryType == "pipeline") {
        entryType = "PipelineEntry";
      }
      if (entryType) {
        setReceivedEntries(prevEntries => {
          const newEntries = new Set(prevEntries);
          newEntries.add(entryType);
          return newEntries;
        });
      }
    });
    // 2. register to listen to the "metric.fsp" and "pipeline" event.
    observer.observe(["metric.fsp", "pipeline"]);
  }, []);

  return (
    <view className="container">
      <view className="title-container">
        <text className="title">Hello PerformanceObserver</text>
      </view>
      <view className="card">
        <text className="section-title">Received PerformanceEntry:</text>
        <view className="entries-container">
          {Array.from(receivedEntries).map((entryName, index) => (
            <text
              key={index}
              className="entry-item"
            >
              {entryName}
            </text>
          ))}
        </view>
      </view>
    </view>
  );
}

root.render(<SimpleObserveExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
