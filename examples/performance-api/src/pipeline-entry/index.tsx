import { root, useEffect, useState } from "@lynx-js/react";
import type { PerformanceEntry, PipelineEntry } from "@lynx-js/types";
import { ScrollItem } from "../common/scroll-item/index.jsx";
import "./index.scss";

export default function PipelineEntryExample() {
  const [pipelineEntry, setPipelineEntry] = useState("");
  const [myName, setMyName] = useState<string | undefined>(undefined);

  useEffect(() => {
    "background-only";
    // 1. Create a performance observer.
    const observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      if (entry.entryType == "pipeline") {
        // 3. Received "pipeline" event of "myPipeline".
        const pipelineEntry = entry as PipelineEntry;
        // `PerformanceEntry.identifier` is equal to `view.__lynx_timing_flag`.
        if (pipelineEntry.identifier == "myNamePipeline") {
          setPipelineEntry(JSON.stringify(pipelineEntry, null, 4));
        }
      }
    });
    // 2. Register to listen to the "pipeline" event.
    observer.observe(["pipeline"]);

    // Update real data after simulating a network request.
    setTimeout(() => {
      setMyName("PipelineEntry");
    }, 2000);
  }, []);

  return (
    <view className="container">
      <text className="title" __lynx_timing_flag={myName ? "myNamePipeline" : ""}>Hello {myName}~</text>
      <ScrollItem title="PipelineEntry" value={pipelineEntry} />
    </view>
  );
}

root.render(<PipelineEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
