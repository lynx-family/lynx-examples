// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useEffect, useState } from "@lynx-js/react";
import type * as Lynx from "@lynx-js/types";

import "../App.css";

import type { AnimaXErrorParam, AnimaXReadyParam } from "../intrinsic-element.js";
import { BASIC_JSON_LOTTIE_SRC, formatFrame, loadLottieJson } from "../shared/animation.js";

type AnimaXReadyEvent = Lynx.BaseEvent<"bindready", AnimaXReadyParam>;
type AnimaXErrorEvent = Lynx.BaseEvent<"binderror", AnimaXErrorParam>;

function App() {
  const [json, setJson] = useState("");
  const [status, setStatus] = useState("loading json");

  useEffect(() => {
    let cancelled = false;

    loadLottieJson(BASIC_JSON_LOTTIE_SRC)
      .then((data) => {
        if (cancelled) {
          return;
        }

        setJson(data);
        setStatus("json loaded");
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }

        setStatus("json load error");
        console.log("[animax] json load error", error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

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
          <text className="status-value">json</text>
        </view>
        <view className="status-row">
          <text className="status-label">Status</text>
          <text className="status-value">{status}</text>
        </view>
      </view>
      <view className="surface">
        {json
          ? (
            <animax-view
              className="animax"
              json={json}
              autoplay={true}
              loop={true}
              objectfit="contain"
              bindready={handleReady}
              binderror={handleError}
            />
          )
          : (
            <view className="loading-state">
              <text className="loading-text">Loading JSON</text>
            </view>
          )}
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
