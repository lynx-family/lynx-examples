// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useRef, useState } from "@lynx-js/react";

const App = () => {
  return (
    <view
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <title-bar-view moveable={true} style={{ width: "100%", height: "50px", backgroundColor: "red" }}>
        <text style={{ fontSize: "30px" }}>Title Bar View, drag me</text>
      </title-bar-view>
    </view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
