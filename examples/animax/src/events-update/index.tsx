// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import type * as Lynx from "@lynx-js/types";

import "../App.css";

import type { AnimaXParam, AnimaXReadyParam } from "../intrinsic-element.js";
import { ANIMAX_VIEW_ID, ceilFrame, EVENTS_UPDATE_LOTTIE_SRC, formatFrame, invokeAnimaX } from "../shared/animation.js";

type AnimaXReadyEvent = Lynx.BaseEvent<"bindready", AnimaXReadyParam>;
type AnimaXUpdateEvent = Lynx.BaseEvent<"bindupdate", AnimaXParam>;

function App() {
  const [status, setStatus] = useState("waiting");
  const [frame, setFrame] = useState(0);

  const handleReady = (e: AnimaXReadyEvent) => {
    setStatus(`ready: ${formatFrame(e.detail.total)} frames`);
    invokeAnimaX("subscribeUpdateEvent", { frame: 30 });
  };

  const handleUpdate = (e: AnimaXUpdateEvent) => {
    setFrame(ceilFrame(e.detail.current));
    setStatus(`update: ${formatFrame(e.detail.current)}`);
  };

  return (
    <view className="example">
      <view className="dock action-dock">
        <view className="status-panel">
          <view className="status-row">
            <text className="status-label">Frame</text>
            <text className="status-value">{frame}</text>
          </view>
          <view className="status-row">
            <text className="status-label">Status</text>
            <text className="status-value">{status}</text>
          </view>
        </view>
        <view className="control-grid two-up">
          <view
            className="button"
            bindtap={() => invokeAnimaX("subscribeUpdateEvent", { frame: 60 })}
          >
            <text className="button-text">Subscribe 60</text>
          </view>
          <view
            className="button secondary"
            bindtap={() => invokeAnimaX("subscribeUpdateEvents", { frames: [15, 45, 75] })}
          >
            <text className="button-text">Subscribe Many</text>
          </view>
        </view>
      </view>
      <view className="surface">
        <animax-view
          id={ANIMAX_VIEW_ID}
          className="animax"
          src={EVENTS_UPDATE_LOTTIE_SRC}
          autoplay={true}
          loop={true}
          objectfit="contain"
          bindready={handleReady}
          bindupdate={handleUpdate}
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
