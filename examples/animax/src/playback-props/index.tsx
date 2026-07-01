// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import type * as Lynx from "@lynx-js/types";

import "../App.css";

import type { AnimaXParam, AnimaXReadyParam } from "../intrinsic-element.js";
import { ceilFrame, PLAYBACK_PROPS_LOTTIE_SRC } from "../shared/animation.js";

type AnimaXReadyEvent = Lynx.BaseEvent<"bindready", AnimaXReadyParam>;
type AnimaXEvent = Lynx.BaseEvent<"bindrepeat" | "bindcompletion", AnimaXParam>;

function App() {
  const [status, setStatus] = useState("loading");
  const [speed, setSpeed] = useState(1.25);
  const [progress, setProgress] = useState(0.2);

  const handleReady = (e: AnimaXReadyEvent) => {
    setStatus(`frames 24-${ceilFrame(e.detail.total) - 24}`);
  };

  const handleRepeat = (e: AnimaXEvent) => {
    setStatus(`repeat ${e.detail.loopIndex}`);
  };

  const handleCompletion = () => {
    setStatus("completion");
  };

  const setSlow = () => {
    setSpeed(0.6);
  };

  const setFast = () => {
    setSpeed(1.6);
  };

  const setEarlyProgress = () => {
    setProgress(0.2);
  };

  const setLateProgress = () => {
    setProgress(0.72);
  };

  return (
    <view className="example">
      <view className="dock action-dock">
        <view className="status-panel">
          <view className="status-row">
            <text className="status-label">Speed</text>
            <text className="status-value">{speed}</text>
          </view>
          <view className="status-row">
            <text className="status-label">Progress</text>
            <text className="status-value">{Math.ceil(progress * 100)}%</text>
          </view>
          <view className="status-row">
            <text className="status-label">Status</text>
            <text className="status-value">{status}</text>
          </view>
        </view>
        <view className="control-grid two-up">
          <view className="button" bindtap={setSlow}>
            <text className="button-text">Speed 0.6</text>
          </view>
          <view className="button secondary" bindtap={setFast}>
            <text className="button-text">Speed 1.6</text>
          </view>
          <view className="button secondary" bindtap={setEarlyProgress}>
            <text className="button-text">Progress 20%</text>
          </view>
          <view className="button secondary" bindtap={setLateProgress}>
            <text className="button-text">Progress 72%</text>
          </view>
        </view>
      </view>
      <view className="surface">
        <animax-view
          className="animax"
          src={PLAYBACK_PROPS_LOTTIE_SRC}
          autoplay={true}
          start-frame={24}
          end-frame={144}
          auto-reverse={true}
          speed={speed}
          progress={progress}
          loop-count={2}
          objectfit="contain"
          bindready={handleReady}
          bindrepeat={handleRepeat}
          bindcompletion={handleCompletion}
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
