import * as React from "@lynx-js/react";
import { root, useMemo, useState } from "@lynx-js/react";
import type { PerformanceEntry, PipelineEntry } from "@lynx-js/types";
import "./index.scss";

export const RenderPropItem = (props: { value: string; hightLightProp: string }) => {
  return (
    <text
      className={(props.hightLightProp && props.value.startsWith(`\t${props.hightLightProp}`))
        ? "hight-light-content"
        : "content"}
    >
      {props.value}
    </text>
  );
};

export default function PipelineEntryExample(this: any) {
  const [pipelineEntry, setPipelineEntry] = useState<string>();
  const [myName, setMyName] = useState<string | undefined>(undefined);
  const [allProps, setAllProps] = useState<string[]>([]);

  useMemo(() => {
    "background-only";
    // 1. Create a performance observer.
    const observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      if (entry.entryType == "pipeline") {
        // 3. Received "pipeline" event of "myPipeline".
        const pipelineEntry = entry as PipelineEntry;
        // `PerformanceEntry.identifier` is equal to `view.__lynx_timing_flag`.
        if (pipelineEntry.identifier == "myNamePipeline") {
          const allProps: string[] = [];
          Object.entries(pipelineEntry).map(([key, value]) => {
            const line = "\t" + key + " : " + JSON.stringify(value, null, 4);
            allProps.push(line.replace("}", "\t}"));
          });
          setAllProps(allProps);
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
      <scroll-view className="scroll" scroll-orientation="vertical">
        <text className="content">{"{"}</text>
        {allProps.map((entryName, index) => <RenderPropItem value={entryName} hightLightProp="hostPlatformTiming" />)}
        <text className="content">{"}"}</text>
      </scroll-view>
    </view>
  );
}

root.render(<PipelineEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
