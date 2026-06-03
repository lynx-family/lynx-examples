// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { renderExample } from "../common.js";
import type { MarkdownStyle } from "../intrinsic-element.js";

const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/b/be/Grapefruit_free.jpg";

function App() {
  const content = `
image:

![alt text](${imageUrl} width=100 height=100 "a grapefruit")
  `;
  const style: MarkdownStyle = {
    imageCaption: {
      color: "808080",
      fontSize: 13,
      textAlign: "left",
    },
  };

  return (
    <view className="plain-surface">
      <markdown content={content} markdown-style={style}>
        {" "}
      </markdown>
    </view>
  );
}

renderExample("Image Caption Style", <App />);
