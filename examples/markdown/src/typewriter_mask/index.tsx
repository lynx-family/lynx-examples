// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { useState } from "@lynx-js/react";

import { renderExample } from "../common.js";
import type { MarkdownEffect, MarkdownStyle } from "../intrinsic-element.js";

function App() {
  const content = `
this is a **Markdown**!!
`;
  const style: MarkdownStyle = {
    typewriterCursor: {
      customCursor: "none",
    },
  };
  const [effect, setEff] = useState<MarkdownEffect>({
    type: "text-mask",
    color: "linear-gradient(90deg, #ffffff00 0%, rgb(255, 255, 255) 100%)",
    rangeStart: -4,
    rangeEnd: -1,
  });

  return (
    <view className="plain-surface">
      <markdown
        content={content}
        markdown-style={style}
        animation-type="typewriter"
        animation-velocity={20}
        markdown-effect={effect}
        binddrawEnd={() => {
          setEff({});
        }}
      >
      </markdown>
    </view>
  );
}

renderExample("Typewriter Mask", <App />);
