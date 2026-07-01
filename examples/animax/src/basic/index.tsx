// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import type * as Lynx from "@lynx-js/types";

import "../App.css";

import type { AnimaXErrorParam, AnimaXReadyParam } from "../intrinsic-element.js";
import { BASIC_LOTTIE_SRC, formatFrame } from "../shared/animation.js";

type AnimaXReadyEvent = Lynx.BaseEvent<"bindready", AnimaXReadyParam>;
type AnimaXErrorEvent = Lynx.BaseEvent<"binderror", AnimaXErrorParam>;

function App() {
  const [status, setStatus] = useState("loading");

  const handleReady = (e: AnimaXReadyEvent) => {
    setStatus(`ready: ${formatFrame(e.detail.total)} frames`);
  };

  const handleError = (e: AnimaXErrorEvent) => {
    setStatus(`error ${e.detail.code}`);
    console.log("[animax] load error", e.detail.data);
  };

  return (
    <view className="example">
      <view className="dock status-panel">
        <view className="status-row">
          <text className="status-label">Source</text>
          <text className="status-value">src</text>
        </view>
        <view className="status-row">
          <text className="status-label">Status</text>
          <text className="status-value">{status}</text>
        </view>
      </view>
      <view className="surface">
        <animax-view
          className="animax"
          src={BASIC_LOTTIE_SRC}
          autoplay={true}
          loop={true}
          objectfit="contain"
          bindready={handleReady}
          binderror={handleError}
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
