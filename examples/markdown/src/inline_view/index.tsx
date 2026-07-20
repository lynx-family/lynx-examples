// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { renderExample } from "../common.js";
import type { MarkdownStyle } from "../intrinsic-element.js";

function App() {
  const content = `
this is a ![](inlineview://mkd)!!
  `;
  const style: MarkdownStyle = {
    normalText: {
      fontSize: 20,
    },
  };

  return (
    <view className="plain-surface">
      <markdown content={content} markdown-style={style}>
        <view id="mkd" className="inline-mark" flatten={false}>
          <text className="inline-mark-text">
            Markdown
          </text>
        </view>
      </markdown>
    </view>
  );
}

renderExample("Inline View", <App />);
