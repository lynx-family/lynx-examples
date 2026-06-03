// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { useState } from "@lynx-js/react";

import type * as Lynx from "@lynx-js/types";
import { renderExample } from "../common.js";
import type { MarkdownTextBoundingRect } from "../intrinsic-element.js";

function App() {
  const content = `
this is a **Markdown**!!

this is a **Markdown**!!

this is a **Markdown**!!
  `;
  const [menuVisible, setMenuVisible] = useState<"hidden" | "visible">(
    "hidden",
  );
  const [topOffset, setTopOffset] = useState(0);
  const [leftOffset, setLeftOffset] = useState(0);

  const onSelectionChange = (
    params: Lynx.BaseEvent<
      "bindselectionchange",
      { start: number; end: number }
    >,
  ) => {
    const start = params.detail.start;
    const end = params.detail.end;
    if (start === -1) {
      setMenuVisible("hidden");
      return;
    }

    setMenuVisible("visible");
    lynx
      .createSelectorQuery()
      .select("#markdown")
      .invoke({
        method: "getTextBoundingRect",
        params: {
          start,
          end,
        },
        success(res: MarkdownTextBoundingRect) {
          setLeftOffset(res.boundingRect.left + res.boundingRect.width / 2 - 30);
          setTopOffset(res.boundingRect.top + res.boundingRect.height / 2 - 10);
        },
      })
      .exec();
  };

  const onSelectAll = () => {
    lynx
      .createSelectorQuery()
      .select("#markdown")
      .invoke({
        method: "setTextSelection",
        params: {
          startX: 0,
          startY: 0,
          endX: Number.MAX_VALUE,
          endY: Number.MAX_VALUE,
        },
      })
      .exec();
  };

  return (
    <view className="plain-surface selection-area">
      <markdown
        id="markdown"
        content={content}
        text-selection={true}
        bindselectionchange={onSelectionChange}
        style="overflow:visible;"
      />
      <view
        id="menu"
        className="selection-menu"
        style={{
          visibility: menuVisible,
          left: leftOffset + "px",
          top: topOffset + "px",
          width: "60px",
        }}
      >
        <view className="menu-inner">
          <text className="menu-button" bindtap={onSelectAll}>Select</text>
          <view className="menu-divider" />
          <text className="menu-button">Copy</text>
        </view>
      </view>
    </view>
  );
}

renderExample("Selection Select All", <App />);
