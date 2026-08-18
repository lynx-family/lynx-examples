// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { useState } from "@lynx-js/react";

import { article, inlineImage } from "../mockData.js";

export function TextCompositionArticle() {
  const [notice, setNotice] = useState("Tap an inline element to verify its independent event region");

  return (
    <view className="article-card">
      <text className="eyebrow">{article.eyebrow}</text>
      <text className="article-title">{article.title}</text>
      <text className="article-body" lynx-test-tag="text-composition-owner">
        {article.lead}
        <text className="article-highlight">{article.highlight}</text>
        {article.tail}{" "}
        <image
          className="inline-image inline-image--center"
          src={inlineImage}
          bindtap={() => setNotice("Tapped the inline image")}
          lynx-test-tag="inline-image"
        />{" "}
        <view
          className="inline-chip inline-chip--center"
          bindtap={() => setNotice("Tapped the composite inline badge")}
          lynx-test-tag="inline-view"
        >
          <text className="inline-chip-dot">{"●"}</text>
          <text className="inline-chip-label">{"Low"}</text>
        </view>{" "}
        <text
          className="article-link"
          bindtap={() => setNotice("Tapped the inline text action")}
          lynx-test-tag="inline-text"
        >
          {article.action}
        </text>
      </text>
      <view className="event-notice">
        <text className="event-notice-text">{notice}</text>
      </view>
    </view>
  );
}
