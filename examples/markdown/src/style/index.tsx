// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { renderExample } from "../common.js";
import type { MarkdownStyle } from "../intrinsic-element.js";

function App() {
  const content = `
this is a **Markdown**!!

this is a \`inline code\`.
`;
  const style: MarkdownStyle = {
    normalText: {
      fontSize: 25,
    },
    inlineCode: {
      fontSize: 20,
      color: "ff0000",
    },
  };

  return (
    <view className="plain-surface">
      <markdown content={content} markdown-style={style} />
    </view>
  );
}

renderExample("Style", <App />);
