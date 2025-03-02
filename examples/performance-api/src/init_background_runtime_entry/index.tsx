import * as React from "@lynx-js/react";
import { root, useMemo, useState } from "@lynx-js/react";
import type { InitBackgroundRuntimeEntry, PerformanceEntry } from "@lynx-js/types";

import "./index.css";

export default function InitBackgroundRuntimeEntryExample(this: any) {
  const [initBackgroundRuntimeEntry, setInitBackgroundRuntimeEntry] = useState<string>("");

  function observerPerformanceEntry() {
    "background-only";
    // 1. Create a performance observer.
    let observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      console.log(JSON.stringify(entry));
      if (entry.entryType == "init" && entry.name == "backgroundRuntime") {
        // 3. Received "init.backgroundRuntime" event.
        let initBackgroundRuntimeEntry = entry as InitBackgroundRuntimeEntry;
        setInitBackgroundRuntimeEntry(JSON.stringify(initBackgroundRuntimeEntry, null, 4));
        observer.disconnect();
      }
    });
    // 2. register to listen to the "init.backgroundRuntime" event.
    observer.observe(["init.backgroundRuntime"]);
  }

  useMemo(() => {
    observerPerformanceEntry();
  }, []);

  return (
    <view className="container">
      <text className="title">Hello InitBackgroundRuntimeEntry~</text>
      <text className="entry">{initBackgroundRuntimeEntry}</text>
    </view>
  );
}

root.render(<InitBackgroundRuntimeEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
