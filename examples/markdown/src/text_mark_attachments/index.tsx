// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { renderExample } from "../common.js";
import type { MarkdownMarkAttachment } from "../intrinsic-element.js";

function App() {
  const content = `
highlighted text, overlapping text, underlined text.
`;
  const attachments: MarkdownMarkAttachment[] = [
    {
      startIndex: 0,
      endIndex: 35,
      indexType: "source",
      style: {
        color:
          "linear-gradient(180deg, rgba(255, 245, 157, 0) 0%, rgba(255, 245, 157, 0) 60%, rgba(255, 245, 157, 1) 60%, rgba(255, 245, 157, 1) 100%)",
      },
    },
    {
      startIndex: 18,
      endIndex: 53,
      indexType: "source",
      style: {
        borderBottom: {
          lineType: "dashed",
          width: "2px",
          color:
            "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
        },
      },
    },
  ];

  return (
    <view className="plain-surface">
      <markdown content={content} text-mark-attachments={attachments} />
    </view>
  );
}

renderExample("Text Mark Attachments", <App />);
