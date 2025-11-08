// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import "@lynx-js/preact-devtools";
import "@lynx-js/react/debug";
import { root } from "@lynx-js/react";

const App = () => {
  return (
    <view>
      <text style={{ fontSize: "20px", color: "black", padding: "10px" }}>
        Below is the inline text example in frame page.
      </text>
      {/* @ts-ignore */}
      <frame
        style={{ width: "100%", height: "300px", border: "3px solid red" }}
        src="https://lynxjs.org/lynx-examples/text/dist/inline_text.lynx.bundle"
      >
        {/* @ts-ignore */}
      </frame>
    </view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
