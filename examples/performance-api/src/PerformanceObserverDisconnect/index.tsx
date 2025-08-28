import * as React from "@lynx-js/react";
import { root, useMemo, useState } from "@lynx-js/react";
import type { PerformanceEntry } from "@lynx-js/types";
import "../common/common.css";
import "./index.css";

export default function InitLynxviewEntryExample(this: any) {
  const [hasReceivedEntries, setHasReceivedEntries] = useState<boolean>(false);

  function observePerformanceEntry() {
    "background-only";
    // 1. Create a performance observer.
    const observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      // 3. process performance entries
      setHasReceivedEntries(true);
      console.log(JSON.stringify(entry));
      // 4. stop receive more performance entries if needed
      observer.disconnect();
    });
    // 2. register to listen to the "metric.fcp" and "pipeline" event.
    observer.observe(["pipeline"]);
  }

  useMemo(() => {
    observePerformanceEntry();
  }, []);

  return (
    <view className="container">
      <text className="title">Hello PerformanceObserver::disconnect()</text>
      <view className="card">
        <text className="section-title">Is PerformanceObserver running?</text>
        <view className="entries-container">
          {hasReceivedEntries
            ? <text className="entry">Disconnect</text>
            : <text className="entry-item">Observing</text>}
        </view>
      </view>
    </view>
  );
}

root.render(<InitLynxviewEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
