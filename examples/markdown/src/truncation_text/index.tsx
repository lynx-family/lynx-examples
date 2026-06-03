// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { renderExample } from "../common.js";
import type { MarkdownStyle } from "../intrinsic-element.js";

function App() {
  const content = `
this is a **Markdown**!!

this is a **Markdown**!!

this is a **Markdown**!!
  `;
  const style: MarkdownStyle = {
    truncation: {
      content: "...more",
    },
  };

  return (
    <view className="plain-surface" style="height:100vh;position:relative;">
      <markdown
        id="markdown"
        content={content}
        markdown-style={style}
        text-maxline={2}
        style="height:100px;"
      />
    </view>
  );
}

renderExample("Truncation Text", <App />);
