// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import type * as Lynx from "@lynx-js/types";

import "../App.css";

import type { AnimaXErrorParam, AnimaXParam, AnimaXReadyParam } from "../intrinsic-element.js";
import { DYNAMIC_REPLACEMENT_IMAGE_URL, FIRSTFRAME_POSTER_LOTTIE_SRC, formatFrame } from "../shared/animation.js";

type AnimaXReadyEvent = Lynx.BaseEvent<"bindready", AnimaXReadyParam>;
type AnimaXFirstFrameEvent = Lynx.BaseEvent<"bindfirstframe", AnimaXParam>;
type AnimaXErrorEvent = Lynx.BaseEvent<"binderror", AnimaXErrorParam>;

function App() {
  const [status, setStatus] = useState("loading");
  const [showPoster, setShowPoster] = useState(true);

  const handleReady = (e: AnimaXReadyEvent) => {
    setStatus(`ready: ${formatFrame(e.detail.total)} frames`);
  };

  const handleFirstFrame = (e: AnimaXFirstFrameEvent) => {
    setShowPoster(false);
    setStatus(`first frame: ${formatFrame(e.detail.current)}`);
  };

  const handleError = (e: AnimaXErrorEvent) => {
    setStatus(`error ${e.detail.code}`);
    console.log("[animax] load error", e.detail.data);
  };

  return (
    <view className="example">
      <view className="dock status-panel">
        <view className="status-row">
          <text className="status-label">Poster</text>
          <text className="status-value">{showPoster ? "visible" : "hidden"}</text>
        </view>
        <view className="status-row">
          <text className="status-label">Status</text>
          <text className="status-value">{status}</text>
        </view>
      </view>
      <view className="surface poster-surface">
        <animax-view
          className="animax"
          src={FIRSTFRAME_POSTER_LOTTIE_SRC}
          autoplay={true}
          loop={true}
          objectfit="cover"
          bindready={handleReady}
          bindfirstframe={handleFirstFrame}
          binderror={handleError}
        />
        {showPoster
          ? (
            <view className="poster-layer">
              <image
                className="poster-image"
                src={DYNAMIC_REPLACEMENT_IMAGE_URL}
                mode="aspectFill"
              />
            </view>
          )
          : null}
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
