import { root, useCallback, useEffect, useState } from "@lynx-js/react";
import type { LoadBundleEntry, PerformanceEntry, PipelineEntry, ReloadBundleEntry } from "@lynx-js/types";
import { ScrollItem } from "../common/ScrollItem/index.jsx";
import "./index.scss";

export default function ReloadBundleEntryExample() {
  const [pipelineEntry, setPipelineEntry] = useState<string>("");
  const [entryName, setEntryName] = useState<string>("pending");

  useEffect(() => {
    "background-only";
    // 1. Create a performance observer.
    const observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      if (entry.entryType == "pipeline") {
        // 3. Received "pipeline.loadBundle" event.
        const pipelineEntry = entry as PipelineEntry;
        setPipelineEntry(JSON.stringify(pipelineEntry, null, 4));
        if (entry.name.startsWith("reloadBundle")) {
          const reloadEntry = entry as ReloadBundleEntry;
          setEntryName(reloadEntry.name);
        } else if (entry.name.startsWith("loadBundle")) {
          const loadEntry = entry as LoadBundleEntry;
          setEntryName(loadEntry.name);
        }
      }
    });
    // 2. Register to listen to the "pipeline" event.
    observer.observe(["pipeline"]);
  }, []);

  const onTap = useCallback(() => {
    "background-only";
    lynx.reload({}, () => {});
  }, []);

  return (
    <view className="container">
      <text className="title">Hello ReloadBundleEntry~</text>
      <text className="button" bindtap={onTap}>Click To Reload</text>
      <ScrollItem title={entryName} value={pipelineEntry} />
    </view>
  );
}

root.render(<ReloadBundleEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
