// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import type * as Lynx from "@lynx-js/types";

import "../App.css";

import type { AnimaXTapParam } from "../intrinsic-element.js";
import { EVENTS_TAP_LOTTIE_SRC } from "../shared/animation.js";

type AnimaXTapEvent = Lynx.BaseEvent<"bindtaplayers", AnimaXTapParam>;

function App() {
  const [layers, setLayers] = useState("tap animation");

  const handleTapLayers = (e: AnimaXTapEvent) => {
    setLayers(e.detail.layerList.join(", ") || "no layer");
  };

  return (
    <view className="example">
      <view className="dock status-panel">
        <view className="status-row">
          <text className="status-label">Layers</text>
          <text className="status-value">{layers}</text>
        </view>
      </view>
      <view className="surface tap-surface">
        <animax-view
          className="animax"
          src={EVENTS_TAP_LOTTIE_SRC}
          autoplay={true}
          loop={true}
          objectfit="contain"
          bindtaplayers={handleTapLayers}
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
