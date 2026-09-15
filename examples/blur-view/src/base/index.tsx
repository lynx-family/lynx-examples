// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";

import "../styles.css";

const App = () => {
  return (
    <view
      className="page"
      id="blur-target-view"
      flatten={false}
    >
      <view className="preview">
        <view className="preview-background" flatten={false} />
        <view className="preview-content" flatten={false}>
          <blur-view
            className="blur-panel"
            android-capture-target="blur-target-view"
            blur-radius="20"
          >
            <text className="blur-label">Blur</text>
          </blur-view>
        </view>
      </view>
      <text className="title">Hello Lynx</text>
      <text className="subtitle">blur-view, Lynx SDK 4.0+</text>
    </view>
  );
};

root.render(<App />);
