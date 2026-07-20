// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";

import "../App.css";

import { BASIC_LOTTIE_SRC } from "../shared/animation.js";

function App() {
  return (
    <view className="example">
      <view className="surface">
        <animax-view
          className="animax"
          src={BASIC_LOTTIE_SRC}
          autoplay={true}
          loop={true}
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
