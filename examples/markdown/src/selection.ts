// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import type { MarkdownTextBoundingRect } from "./intrinsic-element.js";

type Rect = MarkdownTextBoundingRect["boundingRect"];

export function positionSelectionMenu(
  rect: Rect,
  setLeft: (left: number) => void,
  setTop: (top: number) => void,
) {
  lynx.createSelectorQuery().select("#selection-area").invoke({
    method: "boundingClientRect",
    success(container: Rect) {
      // Text bounds use page coordinates; the menu is relative to its container.
      const center = rect.left - container.left + rect.width / 2;
      setLeft(Math.max(0, Math.min(center - 72, container.width - 144)));
      setTop(Math.max(0, rect.top - container.top - 38));
    },
  }).exec();
}
