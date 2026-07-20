// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import type * as Lynx from "@lynx-js/types";

import "../App.css";

import type { AnimaXErrorParam, AnimaXFPSParam, AnimaXParam, AnimaXReadyParam } from "../intrinsic-element.js";
import { ANIMAX_VIEW_ID, EVENTS_LOTTIE_SRC, formatFrame, invokeAnimaX } from "../shared/animation.js";

type AnimaXReadyEvent = Lynx.BaseEvent<"bindready", AnimaXReadyParam>;
type AnimaXEvent = Lynx.BaseEvent<
  "bindstart" | "bindcompletion" | "bindrepeat" | "bindupdate" | "bindfirstframe",
  AnimaXParam
>;
type AnimaXFPSEvent = Lynx.BaseEvent<"bindfps", AnimaXFPSParam>;
type AnimaXErrorEvent = Lynx.BaseEvent<"binderror", AnimaXErrorParam>;

function App() {
  const [logs, setLogs] = useState(["waiting"]);
  const logSlots = [...logs, "", "", "", "", ""].slice(0, 6);

  const pushLog = (label: string, e: AnimaXEvent | AnimaXReadyEvent) => {
    const item = `${label}: ${formatFrame(e.detail.current)}/${formatFrame(e.detail.total)}`;
    setLogs((list) => [item, ...list].slice(0, 6));
  };

  const pushFPSLog = (e: AnimaXFPSEvent) => {
    const fps = Math.ceil(Number.isFinite(e.detail.fps) ? e.detail.fps : 0);
    const drop = Math.ceil(Number.isFinite(e.detail.max_drop_rate) ? e.detail.max_drop_rate : 0);
    setLogs((list) => [`fps: ${fps}, drop ${drop}`, ...list].slice(0, 6));
  };

  const pushErrorLog = (e: AnimaXErrorEvent) => {
    setLogs((list) => [`error: ${e.detail.code}`, ...list].slice(0, 6));
    console.log("[animax] event error", e.detail.data);
  };

  const handleReady = (e: AnimaXReadyEvent) => {
    pushLog("ready", e);
    invokeAnimaX("subscribeUpdateEvents", { frames: [0, 30, 60, 89] });
  };

  return (
    <view className="example">
      <view className="dock event-list">
        {logSlots.map((log, index) => (
          <text className="event-item" key={`${index}-${log}`}>
            {log || " "}
          </text>
        ))}
      </view>
      <view className="surface">
        <animax-view
          id={ANIMAX_VIEW_ID}
          className="animax"
          src={EVENTS_LOTTIE_SRC}
          autoplay={true}
          loop-count={2}
          objectfit="contain"
          fps-event-interval={500}
          bindready={handleReady}
          bindfirstframe={(e) => pushLog("firstframe", e)}
          bindstart={(e) => pushLog("start", e)}
          bindrepeat={(e) => pushLog("repeat", e)}
          bindupdate={(e) => pushLog("update", e)}
          bindfps={pushFPSLog}
          binderror={pushErrorLog}
          bindcompletion={(e) => pushLog("completion", e)}
        />
      </view>
    </view>
  );
}

root.render(
  <view className="page">
    <App />
  </view>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
