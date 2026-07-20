// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import type * as Lynx from "@lynx-js/types";

import "../App.css";

import type { AnimaXParam } from "../intrinsic-element.js";
import { BASIC_LOOP_LOTTIE_SRC, formatFrame } from "../shared/animation.js";

type AnimaXRepeatEvent = Lynx.BaseEvent<"bindrepeat", AnimaXParam>;
type AnimaXCompletionEvent = Lynx.BaseEvent<"bindcompletion", AnimaXParam>;

function App() {
  const [status, setStatus] = useState("loop-count: 2");
  const [repeat, setRepeat] = useState(0);

  const handleRepeat = (e: AnimaXRepeatEvent) => {
    setRepeat(e.detail.loopIndex);
    setStatus(`repeat: ${e.detail.loopIndex}`);
  };

  const handleCompletion = (e: AnimaXCompletionEvent) => {
    setStatus(`complete: ${formatFrame(e.detail.current)}`);
  };

  return (
    <view className="example">
      <view className="dock status-panel">
        <view className="status-row">
          <text className="status-label">Loop</text>
          <text className="status-value">loop-count=2</text>
        </view>
        <view className="status-row">
          <text className="status-label">Repeat</text>
          <text className="status-value">{repeat}</text>
        </view>
        <view className="status-row">
          <text className="status-label">Status</text>
          <text className="status-value">{status}</text>
        </view>
      </view>
      <view className="surface">
        <animax-view
          className="animax"
          src={BASIC_LOOP_LOTTIE_SRC}
          autoplay={true}
          loop-count={2}
          objectfit="contain"
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
