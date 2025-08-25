import * as React from "@lynx-js/react";
import { root, useMemo, useState } from "@lynx-js/react";
import type { PerformanceEntry } from "@lynx-js/types";
import "../common/common.css";
import "./index.css";

export default function InitLynxviewEntryExample(this: any) {
  const [receivedTypeEntries, setReceivedTypeEntries] = useState<Set<string>>(new Set<string>());
  const [receivedSpecificEntries, setReceivedSpecificEntries] = useState<Set<string>>(new Set<string>());

  function observerAllEntryTypePerformanceEntry() {
    "background-only";
    // 1. Create a performance observer.
    const observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      console.log(JSON.stringify(entry));
      // 3. process "metric.fcp" and "pipeline"
      let entryType: string | undefined;
      if (entry.entryType == "metric") {
        if (entry.name == "fcp") {
          entryType = "MetricFcpEntry";
        } else if (entry.name == "actualFmp") {
          entryType = "MetricActualFmpEntry";
        }
      } else if (entry.entryType == "pipeline") {
        entryType = "PipelineEntry";
      }
      if (entryType) {
        setReceivedTypeEntries(prevEntries => {
          const newEntries = new Set(prevEntries);
          newEntries.add(entryType);
          return newEntries;
        });
      }
    });
    // 2. register to listen to the "metric" and "pipeline" event.
    observer.observe(["metric", "pipeline"]);
  }

  function observeSpecificPerformanceEntry() {
    "background-only";
    // 1. Create a performance observer.
    const observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      // 3. process "metric.fcp" and "pipeline"
      let entryType: string | undefined;
      if (entry.entryType == "metric" && entry.name == "fcp") {
        entryType = "MetricFcpEntry";
      } else if (entry.entryType == "pipeline") {
        entryType = "PipelineEntry";
      }
      if (entryType) {
        setReceivedSpecificEntries(prevEntries => {
          const newEntries = new Set(prevEntries);
          newEntries.add(entryType);
          return newEntries;
        });
      }
    });
    // 2. register to listen to the "metric.fcp" and "pipeline" event.
    observer.observe(["metric.fcp", "pipeline"]);
  }

  useMemo(() => {
    observerAllEntryTypePerformanceEntry();
    observeSpecificPerformanceEntry();
  }, []);

  return (
    <view className="container">
      <view className="title-container">
        <text className="title">Hello PerformanceObserver::observe()</text>
      </view>
      <view className="card">
        <text className="section-title">Receive All EntryType Events:</text>
        <view className="entries-container">
          {Array.from(receivedTypeEntries).map((entryName, index) => (
            <text
              key={index}
              className="entry-item"
            >
              {entryName}
            </text>
          ))}
        </view>
      </view>
      <view className="card">
        <text className="section-title">Receive Specific EntryType Events:</text>
        <view className="entries-container">
          {Array.from(receivedSpecificEntries).map((entryName, index) => (
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

root.render(<InitLynxviewEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
