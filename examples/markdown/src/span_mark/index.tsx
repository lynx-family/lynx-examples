// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { renderExample } from "../common.js";
import type { MarkdownStyle } from "../intrinsic-element.js";

function App() {
  const content = `
<span class="hl">highlighted text</span>, <span class="uline">underlined text</span>.
`;
  const style: MarkdownStyle = {
    ".hl": {
      backgroundImage:
        "linear-gradient(180deg, rgba(255, 245, 157, 0) 0%, rgba(255, 245, 157, 0) 60%, rgba(255, 245, 157, 1) 60%, rgba(255, 245, 157, 1) 100%)",
      paddingLeft: 2,
      paddingRight: 2,
    },
    ".uline": {
      textDecorationLine: "underline",
      textDecorationColor: "ff9800",
      textDecorationStyle: "solid",
      textDecorationThickness: 2,
    },
  };

  return (
    <view className="plain-surface">
      <markdown content={content} markdown-style={style} />
    </view>
  );
}

renderExample("Span Mark", <App />);
