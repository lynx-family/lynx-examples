import * as React from "@lynx-js/react";
import { root, useEffect, useMemo, useRef, useState } from "@lynx-js/react";
import type { LoadBundleEntry, PerformanceEntry, PerformanceObserver, PipelineEntry } from "@lynx-js/types";
import "../common/common.css";

export default function CreateCustomPerformanceMetricExample(this: any) {
  const [loadBundleEnd, setLoadBundleEnd] = useState<number>(0);
  const [pipelineStart, setPipelineStart] = useState<number>(0);
  const [waitingDuration, setWaitingDuration] = useState<number>(0);
  const [state, setState] = useState({
    importantElement: "Loading",
    __lynx_timing_flag: "",
  });

  const loadBundleEndRef = useRef(0);
  const observerRef = useRef<PerformanceObserver>();

  function observerPerformanceEntry() {
    "background-only";
    // 1. Create a performance observer.
    const observer = lynx.performance.createObserver((entry: PerformanceEntry) => {
      console.log(JSON.stringify(entry));
      if (entry.entryType == "pipeline" && entry.name == "loadBundle") {
        // 3. Received "pipeline.loadBundle" event.
        const LoadBundleEntry = entry as LoadBundleEntry;
        setLoadBundleEnd(LoadBundleEntry.loadBundleEnd);
      } else if (entry.entryType == "pipeline") {
        // 4. calculate waitingDuration
        const pipelineEntry = entry as PipelineEntry;
        if (pipelineEntry.identifier == "important-update") {
          setPipelineStart(pipelineEntry.pipelineStart);
          setWaitingDuration(pipelineEntry.pipelineStart - loadBundleEndRef.current);
          observer.disconnect();
        }
      }
    });
    // 2. register to listen to the "pipeline" event.
    observer.observe(["init", "pipeline"]);
    observerRef.current = observer;
  }

  useMemo(() => {
    observerPerformanceEntry();
  }, []);

  useEffect(() => {
    loadBundleEndRef.current = loadBundleEnd;
  }, [loadBundleEnd]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(() => ({
        __lynx_timing_flag: "important-update",
        importantElement: "Display",
      }));
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <view className="container">
      <text className="title">Create Your Performance Metric</text>
      <view className="card">
        <text className="entry highlight" __lynx_timing_flag={state.__lynx_timing_flag}>
          🎯 {state.importantElement} important element
        </text>
        <text className="entry">⏱️ loadBundleEnd: {loadBundleEnd} ms</text>
        <text className="entry">⏱️ updateTime: {pipelineStart} ms</text>
        <text className="entry">⏳ waitingDuration: updateTime - loadBundleEnd = {waitingDuration} ms</text>
      </view>
    </view>
  );
}

root.render(<CreateCustomPerformanceMetricExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
