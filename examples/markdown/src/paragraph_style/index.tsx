// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { renderExample } from "../common.js";
import type { MarkdownStyle } from "../intrinsic-element.js";

function App() {
  const content = `
<p class="center">paragraph alignment is center.</p>

<p class="right">paragraph alignment is right.</p>
`;
  const style: MarkdownStyle = {
    ".center": {
      textAlign: "center",
    },
    ".right": {
      textAlign: "right",
    },
  };

  return (
    <view className="plain-surface">
      <markdown content={content} markdown-style={style} />
    </view>
  );
}

renderExample("Paragraph Style", <App />);
