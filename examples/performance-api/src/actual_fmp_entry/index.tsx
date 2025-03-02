import * as React from "@lynx-js/react";
import { root, useMemo, useState } from "@lynx-js/react";
import type { MetricActualFmpEntry, PerformanceEntry } from "@lynx-js/types";
import "./index.scss";

export default function MetricActualFmpEntryExample(this: any) {
  const [msg, setMsg] = useState<string>("This is the initialization data.");
  const [actualfmpEntry, setActualFMPEntry] = useState<string>("");
  const [hasActualData, setHasActualData] = useState<boolean>(false);

  useMemo(() => {
    "background-only";
    // 1. Create a performance observer.
    let observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      if (entry.entryType == "metric" && entry.name == "actualFmp") {
        // 3. Received "metric.actualFmp" event.
        let actualfmpEntry = entry as MetricActualFmpEntry;
        setActualFMPEntry("actualfmpEntry : " + JSON.stringify(actualfmpEntry, null, 4));
      }
    });
    // 2. egister to listen to the "metric.actualFmp" event.
    observer.observe(["metric.actualFmp"]);

    // Update real data after simulating a network request.
    setTimeout(() => {
      setMsg("This is the actual data.");
      setHasActualData(true);
    }, 3000);
  }, []);

  return (
    <view className="container">
      <text className="title">Hello MetricActualFmpEntry~</text>
      <text __lynx_timing_flag={hasActualData ? "__lynx_timing_actual_fmp" : ""}>{msg}</text>
      <text className="entry">{actualfmpEntry}</text>
    </view>
  );
}

root.render(<MetricActualFmpEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
