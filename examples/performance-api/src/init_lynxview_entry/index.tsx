import * as React from "@lynx-js/react";
import { root, useMemo, useState } from "@lynx-js/react";
import type { InitLynxviewEntry, PerformanceEntry } from "@lynx-js/types";
import "./index.css";

export default function InitLynxviewEntryExample(this: any) {
  const [initLynxviewEntry, setInitLynxviewEntry] = useState<string>("");

  function observerPerformanceEntry() {
    "background-only";
    // 1. Create a performance observer.
    let observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      if (entry.entryType == "init" && entry.name == "lynxview") {
        // 3. Received "init.lynxview" event.
        let initLynxviewEntry = entry as InitLynxviewEntry;
        setInitLynxviewEntry(JSON.stringify(initLynxviewEntry, null, 4));
        observer.disconnect();
      }
    });
    // 2. register to listen to the "init.lynxview" event.
    observer.observe(["init.lynxview"]);
  }

  useMemo(() => {
    observerPerformanceEntry();
  }, []);

  return (
    <view className="container">
      <text className="title">Hello InitLynxviewEntry~</text>
      <text className="entry">{initLynxviewEntry}</text>
    </view>
  );
}

root.render(<InitLynxviewEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
