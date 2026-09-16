// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";

import { Caption } from "../components/caption/index.jsx";
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
            blur-effect="glass"
            glass-style="clear"
            glass-tint-color="rgba(0, 221, 255, 0.05)"
            glass-interactive
            blur-radius="20"
          >
            <text className="blur-label">Liquid Glass</text>
          </blur-view>
        </view>
      </view>
      <Caption
        title="Liquid Glass"
        subtitle="Powered by <blur-view>"
        footnote="Requires Lynx SDK 4.0+"
      />
    </view>
  );
};

root.render(<App />);
