// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import type * as Lynx from "@lynx-js/types";

import "../App.css";

import type { AnimaXParam } from "../intrinsic-element.js";
import { ANIMAX_VIEW_ID, formatFrame, invokeAnimaX, PLAY_SEGMENT_LOTTIE_SRC } from "../shared/animation.js";

type AnimaXEvent = Lynx.BaseEvent<"bindstart" | "bindcompletion", AnimaXParam>;

function App() {
  const [status, setStatus] = useState("ready");

  const updateStatus = (label: string) => (e: AnimaXEvent) => {
    setStatus(`${label}: ${formatFrame(e.detail.current)}`);
  };

  return (
    <view className="example">
      <view className="dock action-dock">
        <view className="status-panel">
          <view className="status-row">
            <text className="status-label">Segment</text>
            <text className="status-value">15-75</text>
          </view>
          <view className="status-row">
            <text className="status-label">Status</text>
            <text className="status-value">{status}</text>
          </view>
        </view>
        <view className="control-grid two-up">
          <view
            className="button"
            bindtap={() => invokeAnimaX("playSegment", { startFrame: 15, endFrame: 75 })}
          >
            <text className="button-text">Play Segment</text>
          </view>
          <view className="button secondary" bindtap={() => invokeAnimaX("stop")}>
            <text className="button-text">Stop</text>
          </view>
        </view>
      </view>
      <view className="surface">
        <animax-view
          id={ANIMAX_VIEW_ID}
          className="animax"
          src={PLAY_SEGMENT_LOTTIE_SRC}
          autoplay={false}
          loop={true}
          objectfit="contain"
          bindstart={updateStatus("start")}
          bindcompletion={updateStatus("complete")}
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
