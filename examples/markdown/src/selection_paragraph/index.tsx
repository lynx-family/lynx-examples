// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { useRef, useState } from "@lynx-js/react";

import type * as Lynx from "@lynx-js/types";
import { renderExample } from "../common.js";
import type { MarkdownTextBoundingRect } from "../intrinsic-element.js";

function App() {
  const content = `
this is a **Markdown**!!

this is a **Markdown**!!

this is a **Markdown**!!
  `;
  const inSelection = useRef(false);
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
    console.log("selection change: " + start + "," + end);
    if (start === -1) {
      setMenuVisible("hidden");
      inSelection.current = false;
      return;
    }

    const modifySelection = !inSelection.current;
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
          console.log(res.boundingRect);
          if (modifySelection) {
            const x = res.boundingRect.left + res.boundingRect.width / 2;
            const y = res.boundingRect.top + res.boundingRect.height / 2;
            lynx
              .createSelectorQuery()
              .select("#markdown")
              .invoke({
                method: "setTextSelection",
                params: {
                  startX: x,
                  startY: y,
                  endX: x,
                  endY: y,
                  selectionTextType: "paragraph",
                },
              })
              .exec();
          } else {
            setLeftOffset(res.boundingRect.left + res.boundingRect.width / 2 - 30);
            setTopOffset(res.boundingRect.top + res.boundingRect.height / 2 - 10);
          }
        },
        fail(res) {
          console.log(res.code, res.data);
        },
      })
      .exec();
    inSelection.current = true;
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
          <text className="menu-button">Select</text>
          <view className="menu-divider" />
          <text className="menu-button">Copy</text>
        </view>
      </view>
    </view>
  );
}

renderExample("Selection Paragraph", <App />);
