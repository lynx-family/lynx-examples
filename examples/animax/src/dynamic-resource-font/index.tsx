// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import type * as Lynx from "@lynx-js/types";

import "../App.css";

import type { AnimaXErrorParam, AnimaXReadyParam } from "../intrinsic-element.js";
import { DYNAMIC_FONT_LOTTIE_SRC, DYNAMIC_FONT_REPLACEMENT_URL } from "../shared/animation.js";
import { createCompositionElementProxy, isPropertyUpdateSuccessful } from "../shared/composition-proxy.js";

type AnimaXReadyEvent = Lynx.BaseEvent<"bindready", AnimaXReadyParam>;
type AnimaXErrorEvent = Lynx.BaseEvent<"binderror", AnimaXErrorParam>;

function App() {
  const [status, setStatus] = useState("loading");

  const handleReady = (e: AnimaXReadyEvent) => {
    const proxy = createCompositionElementProxy(e);

    if (!proxy) {
      setStatus("animax napi module unavailable");
      return;
    }

    proxy.updateFontByName("Arial-BoldMT", DYNAMIC_FONT_REPLACEMENT_URL, (success, errorType) => {
      console.log("[animax] updateFontByName", success, errorType);
    });

    proxy.submitResourcePropertiesUpdate((success, errorType) => {
      setStatus(isPropertyUpdateSuccessful(success) ? "font resource updated" : `submit failed ${errorType}`);
      proxy.play();
    });
  };

  const handleError = (e: AnimaXErrorEvent) => {
    setStatus(`error ${e.detail.code}`);
    console.log("[animax] load error", e.detail.data);
  };

  return (
    <view className="example">
      <view className="dock status-panel">
        <view className="status-row">
          <text className="status-label">Method</text>
          <text className="status-value">updateFontByName</text>
        </view>
        <view className="status-row">
          <text className="status-label">Status</text>
          <text className="status-value">{status}</text>
        </view>
      </view>
      <view className="surface">
        <animax-view
          className="animax"
          src={DYNAMIC_FONT_LOTTIE_SRC}
          autoplay={false}
          loop={true}
          objectfit="contain"
          dynamic-resource={true}
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
