// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { useState } from "@lynx-js/react";

import { longParagraph } from "../mockData.js";
import { BasicCase } from "./FoundationCases.jsx";
import { InlineTextCase } from "./InlineCases.jsx";
import { CompatibilityNote, FixtureGroup, ValueBadge } from "./shared.jsx";

function StaticMultiLineMatrix() {
  return (
    <view className="fixture-column">
      <FixtureGroup label="no text-maxline">
        <text className="multiline-source-text">{longParagraph}</text>
      </FixtureGroup>
      <FixtureGroup label="text-maxline 2">
        <text className="multiline-source-text" text-maxline="2">{longParagraph}</text>
      </FixtureGroup>
      <FixtureGroup label="text-maxline 4">
        <text className="multiline-source-text" text-maxline="4">{longParagraph}</text>
      </FixtureGroup>
      <FixtureGroup label="white-space nowrap">
        <view className="multiline-nowrap-window">
          <text className="multiline-source-text multiline-nowrap">{longParagraph}</text>
        </view>
      </FixtureGroup>
      <FixtureGroup label="text-maxline 4 · ellipsis">
        <text className="multiline-source-text multiline-ellipsis" text-maxline="4">{longParagraph}</text>
      </FixtureGroup>
    </view>
  );
}

export function LayerBasicCase() {
  return (
    <view className="fixture-column">
      <CompatibilityNote>
        {"The public rendering path replaces the source enableTextLayerRender switch. This page independently runs the complete visible basic matrix."}
      </CompatibilityNote>
      <BasicCase />
    </view>
  );
}

export function LayerInlineTextCase() {
  return (
    <view className="fixture-column">
      <CompatibilityNote>
        {"The public rendering path replaces the source enableTextLayerRender switch. This page independently runs the complete inline-text matrix."}
      </CompatibilityNote>
      <InlineTextCase />
    </view>
  );
}

export function LayerMultiLineCase() {
  return (
    <view className="fixture-column">
      <CompatibilityNote>
        {"The public rendering path replaces the source enableTextLayerRender switch. Unlimited, two-line, four-line, nowrap, and ellipsis inputs remain."}
      </CompatibilityNote>
      <StaticMultiLineMatrix />
    </view>
  );
}

export function MultiLineCase() {
  const [limit, setLimit] = useState("1");

  const onTap = () => {
    if (limit === "") {
      setLimit("1");
    } else {
      setLimit("");
    }
  };

  return (
    <view className="fixture-column">
      <FixtureGroup label="tap toggles text-maxline between 1 and empty">
        <text className="multiline-state">
          <ValueBadge>{`limit: ${limit === "" ? "empty" : limit}`}</ValueBadge>
        </text>
        <text
          className="multiline-source-text multiline-ellipsis"
          text-maxline={limit}
          bindtap={onTap}
          lynx-test-tag="maxline-test"
        >
          {longParagraph}
        </text>
      </FixtureGroup>
      <FixtureGroup label="text-maxline 2">
        <text className="multiline-source-text" text-maxline="2">{longParagraph}</text>
      </FixtureGroup>
      <FixtureGroup label="text-maxline 4">
        <text className="multiline-source-text" text-maxline="4">{longParagraph}</text>
      </FixtureGroup>
      <FixtureGroup label="white-space nowrap">
        <view className="multiline-nowrap-window">
          <text className="multiline-source-text multiline-nowrap">{longParagraph}</text>
        </view>
      </FixtureGroup>
      <FixtureGroup label="text-maxline 4 · ellipsis">
        <text className="multiline-source-text multiline-ellipsis" text-maxline="4">{longParagraph}</text>
      </FixtureGroup>
    </view>
  );
}

const fontRows = [
  ["font-source-f1", "public serif, fallback sans"],
  ["font-source-f2", "missing first, public serif second"],
  ["font-source-f3", "empty family"],
  ["font-source-f4", "empty first, public serif second"],
  ["font-source-f5", "public serif first, empty second"],
  ["font-source-f6", "public monospace"],
  ["font-source-f7", "public monospace, public serif"],
];

export function MultipleFontFamilyCase() {
  return (
    <view className="fixture-column">
      <CompatibilityNote>
        {"Offline system serif and monospace fonts replace two private network fonts while preserving seven fallback orders and empty-family boundaries."}
      </CompatibilityNote>
      {fontRows.map(([className, label], index) => (
        <view className="font-source-row" key={className}>
          <text className="font-source-label">{`f${index + 1} · ${label}`}</text>
          <text className={`font-source-sample ${className}`}>{"test 测试"}</text>
        </view>
      ))}
    </view>
  );
}

export function TextAlignRightBadCase() {
  return (
    <view className="align-right-source-root">
      <view className="align-right-source-spacer" />
      <view className="align-right-source-content">
        <text className="align-right-source-outer" lynx-test-tag="container">
          <text className="align-right-source-inner">
            {"aaa,122****2222,测试文本5555测试文本测试文本测试文本测试文本"}
          </text>
        </text>
      </view>
    </view>
  );
}

export function TextIndentCase() {
  return (
    <view className="fixture-column text-indent-source-root">
      <text className="text-indent-source text-indent-source--percent">
        <text>{"text-indent 10%"}</text>
      </text>
      <text className="text-indent-source text-indent-source--small">{"text-indent 10px"}</text>
      <text className="text-indent-source">{"text-indent no"}</text>
      <text className="text-indent-source text-indent-source--max text-indent-source--large">{"text-indent 50px"}</text>
      <text className="text-indent-source text-indent-source--large">
        {"fixed width text with text-indent 50px and multiline"}
      </text>
    </view>
  );
}

export function TransformCase() {
  return (
    <view className="transform-source-root" lynx-test-tag="transform">
      <view className="transform-source-outer">
        <text className="transform-source-text transform-source-rotate">{"abcde"}</text>
      </view>
      <view className="transform-source-outer">
        <text className="transform-source-text transform-source-scale">{"abcde"}</text>
      </view>
    </view>
  );
}

export function WhiteSpaceCase() {
  return (
    <view className="fixture-column white-space-source-root">
      <text className="white-space-source-title">{"white-space: normal"}</text>
      <text className="white-space-source-item white-space-source-normal">
        {"But ere she from the church-door stepped She smiled and told us why: 'It was a wicked woman's curse,' Quoth she, 'and what care I?' She smiled, and smiled, and passed it off Ere from the door she stept—"}
      </text>
      <text className="white-space-source-title">{"white-space: nowrap"}</text>
      <text className="white-space-source-item white-space-source-nowrap">{"But\n—"}</text>
    </view>
  );
}

export function WordBreakKeepAllCase() {
  return (
    <view className="fixture-column word-break-source-root">
      <text className="word-break-source-label">{"keep-all on:"}</text>
      <text className="word-break-source-text word-break-source-on">
        {"english 中文文本 한국어한 ブレーク english"}
      </text>
      <text className="word-break-source-label">{"keep-all off:"}</text>
      <text className="word-break-source-text word-break-source-off">
        {"english 中文文本 한국어한 ブレーク english"}
      </text>
    </view>
  );
}
