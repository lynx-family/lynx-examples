// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { renderExample } from "../common.js";
import type { MarkdownStyle } from "../intrinsic-element.js";

function App() {
  const content = `
this is [<span class="red">link1</span>](url1).

this is [link2](url1).
`;
  const style: MarkdownStyle = {
    ".red": {
      color: "ff0000",
    },
    link: {
      color: "0000ff",
    },
  };

  return (
    <view className="plain-surface">
      <markdown content={content} markdown-style={style} />
    </view>
  );
}

renderExample("Span Style", <App />);
