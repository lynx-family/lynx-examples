import * as React from "@lynx-js/react";
import { root, useMemo, useState } from "@lynx-js/react";
import type { InitContainerEntry, PerformanceEntry } from "@lynx-js/types";
import "./index.css";

export default function InitContainerEntryExample(this: any) {
  const [initContainerEntry, setInitContainerEntry] = useState<string>("");

  function observerPerformanceEntry() {
    "background-only";
    // 1. Create a performance observer.
    const observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      console.log(JSON.stringify(entry));
      if (entry.entryType == "init" && entry.name == "container") {
        // 3. Received "init.container" event.
        const initContainerEntry = entry as InitContainerEntry;
        setInitContainerEntry(JSON.stringify(initContainerEntry, null, 4));
        observer.disconnect();
      }
    });
    // 2. register to listen to the "init.container" event.
    observer.observe(["init.container"]);
  }

  useMemo(() => {
    observerPerformanceEntry();
  }, []);

  return (
    <view className="container">
      <text className="title">Hello InitContainerEntry~</text>
      <text className="entry">{initContainerEntry}</text>
    </view>
  );
}

root.render(<InitContainerEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
