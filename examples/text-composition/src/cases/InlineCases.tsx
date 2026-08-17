// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { FixtureGroup } from "./shared.jsx";

export function InlineTextCase() {
  return (
    <view className="fixture-column">
      <FixtureGroup label="inline text concatenation">
        <text className="inline-source-paragraph">
          {"简单文本场景:"}
          <text>{"[inline-text 1]"}</text>
          <text>{"[inline-text 2]"}</text>
        </text>
      </FixtureGroup>

      <FixtureGroup label="different size">
        <text className="inline-source-paragraph">
          {"简单文本场景:"}
          <text className="inline-source-small">{"[inline-text 1]"}</text>
          <text className="inline-source-large">{"[inline-text 2]"}</text>
        </text>
      </FixtureGroup>

      <FixtureGroup label="different and gradient colors">
        <text className="inline-source-paragraph">
          {"简单文本场景:"}
          <text className="inline-source-blue">{"[inline-text 1]"}</text>
          <text className="inline-source-cyan">{"[inline-text 2]"}</text>
        </text>
        <text className="inline-source-paragraph">
          {"inline-text gradient-color:"}
          <text className="inline-source-blue">{"[inline-text 1]"}</text>
          <text className="inline-source-gradient-right">{"[inline-text 2]"}</text>
        </text>
        <text className="inline-source-paragraph inline-source-outer-gradient inline-source-overflow-hidden">
          {"color override hidden:"}
          <text className="inline-source-gradient-left">{"[inline-text 1]"}</text>
          <text>{"[inline-text 2]"}</text>
        </text>
        <text className="inline-source-paragraph inline-source-outer-gradient inline-source-overflow-visible">
          {"color override visible:"}
          <text className="inline-source-gradient-left">{"[inline-text 1]"}</text>
          <text>{"[inline-text 2]"}</text>
        </text>
      </FixtureGroup>

      <FixtureGroup label="different style">
        <text className="inline-source-paragraph">
          {"简单文本场景:"}
          <text className="inline-source-italic">{"[inline-text 1]"}</text>
          <text className="inline-source-line-through">{"[inline-text 2]"}</text>
        </text>
        <text className="inline-source-paragraph">{"简单文本场景"}</text>
      </FixtureGroup>
    </view>
  );
}

function DecoratedInlineContent() {
  return (
    <>
      {"你说的 "}
      <text className="background-source-gradient">
        {"a下面是一个示例代码，👨‍👩‍👧‍👦展示文本背景渐变色"}
      </text>
      <text className="background-source-rounded">{" 展示圆角背景渐变色"}</text>
      <text className="background-source-dotted">{" 下划线和其他样式"}</text>
      <view className="background-source-inline-view">
        <text className="background-source-inline-view-text">{"这"}</text>
      </view>
    </>
  );
}

export function InlineTextBackgroundImageCase() {
  return (
    <view className="fixture-column">
      <FixtureGroup label="maxline 3 · paragraph line-height">
        <text className="background-source-paragraph background-source-paragraph--line-height" text-maxline="3">
          <DecoratedInlineContent />
        </text>
      </FixtureGroup>
      <FixtureGroup label="maxline 3 · default line-height">
        <text className="background-source-paragraph" text-maxline="3">
          <DecoratedInlineContent />
        </text>
      </FixtureGroup>
      <FixtureGroup label="maxline 2 · center">
        <text className="background-source-paragraph background-source-center" text-maxline="2">
          {"text-align:center; "}
          <text className="background-source-gradient">{"custom background color; "}</text>
          <text className="background-source-rounded">{"border radius background; "}</text>
          <text className="background-source-dotted">{"dot line;"}</text>
        </text>
      </FixtureGroup>
      <FixtureGroup label="maxline 2 · right · line-height 25">
        <text
          className="background-source-paragraph background-source-right background-source-paragraph--compact"
          text-maxline="2"
        >
          {"text-align:right; "}
          <text className="background-source-gradient">{"custom background color; "}</text>
          <text className="background-source-rounded">{"border radius background; "}</text>
          <text className="background-source-dotted">{"dot line;"}</text>
        </text>
      </FixtureGroup>
      <FixtureGroup label="maxline 2 · center · ellipsis">
        <text
          className="background-source-paragraph background-source-center background-source-paragraph--compact background-source-ellipsis"
          text-maxline="2"
        >
          {"text-align:center; "}
          <text className="background-source-gradient">{"custom background color; 自定义背景颜色 "}</text>
          <text className="background-source-rounded">{"border radius background; "}</text>
          <text className="background-source-dotted">{"dot line; 自定义下划线自定义下划线"}</text>
        </text>
      </FixtureGroup>
      <FixtureGroup label="maxline 3 · custom inline truncation">
        <text
          className="background-source-paragraph background-source-center background-source-ellipsis"
          text-maxline="3"
        >
          {"text-align:center; "}
          <text className="background-source-gradient">{"custom background color; 自定义背景颜色 "}</text>
          <text className="background-source-rounded">{"border radius background; "}</text>
          <text className="background-source-dotted">{"dot line; 自定义下划线自定义下划线 "}</text>
          <text className="background-source-gradient">{"超长的文本内容超长的文本内容超长的文本内容"}</text>
          <inline-truncation>
            <text>
              {"..."}
              <text className="background-source-full">{"全文"}</text>
            </text>
          </inline-truncation>
        </text>
      </FixtureGroup>
    </view>
  );
}
