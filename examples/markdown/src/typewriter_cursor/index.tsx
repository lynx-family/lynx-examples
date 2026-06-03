// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { renderExample } from "../common.js";
import type { MarkdownStyle } from "../intrinsic-element.js";

function App() {
  const content = `
this is a **Markdown**!!
`;
  const style: MarkdownStyle = {
    typewriterCursor: {
      customCursor: "cursor",
    },
  };

  return (
    <view className="plain-surface">
      <markdown
        content={content}
        markdown-style={style}
        animation-type="typewriter"
        animation-velocity={20}
      >
        <view id="cursor" className="cursor"></view>
      </markdown>
    </view>
  );
}

renderExample("Typewriter Cursor", <App />);
