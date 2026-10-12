// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";

import "./index.scss";

const cards = [
  {
    number: "01",
    title: "Reflow the content",
    description: "Cards move from one column to two, then three as the viewport grows.",
    detail: "FLEX WRAP + WIDTH",
    className: "mint",
  },
  {
    number: "02",
    title: "Reveal a side panel",
    description: "Supporting content gets its own sidebar when there is room beside the page.",
    detail: "DISPLAY + MIN-WIDTH",
    className: "lavender",
  },
  {
    number: "03",
    title: "Give details room",
    description: "Larger type and generous spacing make the most of a bigger canvas.",
    detail: "FONT SIZE + PADDING",
    className: "peach",
  },
];

function MediaQueryLargeScreenDemo() {
  return (
    <scroll-view className="page" scroll-orientation="vertical">
      <view className="shell">
        <view className="topbar">
          <view className="brand">
            <view className="brand-mark">
              <text className="brand-letter">L</text>
            </view>
            <text className="brand-name">LYNX / LAYOUT LAB</text>
          </view>
          <text className="topbar-note">CSS @media</text>
        </view>

        <view className="workspace">
          <view className="sidebar">
            <text className="sidebar-eyebrow">THE BIG PICTURE</text>
            <text className="sidebar-title">{"More space.\nMore context."}</text>
            <text className="sidebar-copy">
              This panel appears at 1024px. The main content stays flexible beside it.
            </text>
            <view className="sidebar-divider" />
            <text className="sidebar-label">LAYOUT CHECKLIST</text>
            <text className="sidebar-item">01 / Reflow content</text>
            <text className="sidebar-item">02 / Reveal context</text>
            <text className="sidebar-item">03 / Adjust spacing</text>
            <view className="sidebar-rule">
              <text className="sidebar-rule-text">@media (min-width: 1024px)</text>
            </view>
          </view>

          <view className="main">
            <view className="hero">
              <text className="eyebrow">MEDIA QUERY / LARGE SCREEN ADAPTATION</text>
              <text className="hero-title">Room to grow.</text>
              <text className="hero-copy">
                One page, from phone to tablet to desktop. The layout adapts to the space available.
              </text>
              <view className="mode mode-compact">
                <view className="status-dot" />
                <text className="mode-text">COMPACT / 1 COLUMN</text>
              </view>
              <view className="mode mode-medium">
                <view className="status-dot" />
                <text className="mode-text">MEDIUM / 2 COLUMNS</text>
              </view>
              <view className="mode mode-expanded">
                <view className="status-dot" />
                <text className="mode-text">EXPANDED / 3 COLUMNS + SIDEBAR</text>
              </view>
            </view>

            <view className="breakpoints">
              <view className="breakpoint breakpoint-compact">
                <text className="breakpoint-name">Phone</text>
                <text className="breakpoint-range">&lt; 600px</text>
              </view>
              <view className="breakpoint breakpoint-medium">
                <text className="breakpoint-name">Tablet</text>
                <text className="breakpoint-range">600–1023px</text>
              </view>
              <view className="breakpoint breakpoint-expanded">
                <text className="breakpoint-name">Desktop</text>
                <text className="breakpoint-range">≥ 1024px</text>
              </view>
            </view>

            <view className="section-heading">
              <text className="section-title">Same content. New layout.</text>
              <text className="section-caption">Three ways to adapt</text>
            </view>
            <view className="cards">
              {cards.map((card) => (
                <view className={`card ${card.className}`} key={card.number}>
                  <text className="card-number">{card.number}</text>
                  <text className="card-title">{card.title}</text>
                  <text className="card-copy">{card.description}</text>
                  <text className="card-detail">{card.detail}</text>
                </view>
              ))}
            </view>

            <view className="footer">
              <view className="footer-dot" />
              <text className="footer-text">
                Resize the viewport. All layout changes come from CSS media queries.
              </text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  );
}

root.render(<MediaQueryLargeScreenDemo />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
