// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import type * as Lynx from "@lynx-js/types";

import "../App.css";

import type { AnimaXErrorParam, AnimaXReadyParam } from "../intrinsic-element.js";
import { DYNAMIC_LAYER_LOTTIE_SRC } from "../shared/animation.js";
import { createCompositionElementProxy, createValueParam, LayerPropertyType } from "../shared/composition-proxy.js";

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

    const logUpdate = (success?: boolean, errorType?: number) => {
      console.log("[animax] layer property", success, errorType);
    };

    proxy.updateLayerProperty(
      LayerPropertyType.TransformOpacity,
      "rocket body / red white rounded body",
      createValueParam(82),
      logUpdate,
    );
    proxy.updateLayerProperty(
      LayerPropertyType.TransformRotation,
      "rocket body / red white rounded body",
      createValueParam(-8),
      logUpdate,
    );
    proxy.updateLayerProperty(
      LayerPropertyType.TransformPosition,
      "rocket body / red white rounded body",
      createValueParam({ x: 0, y: -16 }),
      logUpdate,
    );
    proxy.updateLayerProperty(
      LayerPropertyType.TransformScale,
      "window / blue porthole",
      createValueParam({ x: 1.18, y: 1.18 }),
      logUpdate,
    );
    proxy.updateLayerProperty(
      LayerPropertyType.Visibility,
      "sparks / glowing particles",
      createValueParam(true),
      logUpdate,
    );

    setStatus("visibility, opacity, rotation, position, scale updated");
    proxy.play();
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
          <text className="status-value">updateLayerProperty</text>
        </view>
        <view className="status-row">
          <text className="status-label">Status</text>
          <text className="status-value">{status}</text>
        </view>
      </view>
      <view className="surface">
        <animax-view
          className="animax"
          src={DYNAMIC_LAYER_LOTTIE_SRC}
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
