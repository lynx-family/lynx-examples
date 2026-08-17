// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { type PropsWithChildren, useState } from "@lynx-js/react";

import { inlineImage } from "../mockData.js";
import { CompatibilityNote, FixtureGroup, ValueBadge } from "./shared.jsx";

function Counter({ children }: PropsWithChildren) {
  return (
    <view className="source-counter">
      <text className="source-counter-text">
        {"Hello world "}
        {children}
      </text>
    </view>
  );
}

export function BadCase() {
  const [changedColor, setChangedColor] = useState(false);

  return (
    <view className="fixture-column">
      <FixtureGroup label="issue 6179 · stacked copy and amount">
        <view className="bad-offer-card">
          <view className="bad-offer-copy">
            <text className="bad-offer-copy-text">{"邀请更多新朋友"}</text>
            <text className="bad-offer-copy-text">{"下载并打开示例应用"}</text>
            <text className="bad-offer-copy-text">{"完成公开演示任务"}</text>
          </view>
          <view className="bad-offer-highlight">
            <text className="bad-offer-normal">{"可得"}</text>
            <text className="bad-offer-amount">{"20"}</text>
            <text className="bad-offer-normal">{"积分"}</text>
          </view>
        </view>
      </FixtureGroup>

      <FixtureGroup label="issue 6199 · nested component slot">
        <Counter>
          <text className="source-counter-slot">{"sub text"}</text>
        </Counter>
      </FixtureGroup>

      <FixtureGroup label="issue 6228 · shared gradient update">
        <view className="gradient-regression-row" bindtap={() => setChangedColor(true)}>
          <text className="regression-caption">{"overflow: visible"}</text>
          <text
            className={changedColor ? "gradient-source-text gradient-source-text--changed" : "gradient-source-text"}
          >
            {"心心相映 · VISIBLE"}
          </text>
        </view>
        <view className="gradient-regression-row" bindtap={() => setChangedColor(true)}>
          <text className="regression-caption">{"overflow: hidden"}</text>
          <text
            className={changedColor
              ? "gradient-source-text gradient-source-text--hidden gradient-source-text--changed"
              : "gradient-source-text gradient-source-text--hidden"}
          >
            {"心心相映 · HIDDEN"}
          </text>
        </view>
      </FixtureGroup>

      <FixtureGroup label="maxlength and decoration regressions">
        <text className="bad-maxlength" text-maxlength="10">
          {"text-maxlength: 10, 文本显示测试"}
        </text>
        <view className="bad-decoration-surface">
          <text className="bad-decoration-text">{"hello world"}</text>
        </view>
      </FixtureGroup>
    </view>
  );
}

const weights = ["100", "200", "300", "400", "500", "600", "700", "bold", "800"];

export function BasicCase() {
  return (
    <view className="fixture-column">
      <FixtureGroup label="simple text">
        <text className="basic-expectation">{"简单文本场景"}</text>
      </FixtureGroup>
      <FixtureGroup label="text-align">
        <text className="basic-expectation basic-align-left">{"text-align: left"}</text>
        <text className="basic-expectation basic-align-right">{"text-align: right"}</text>
        <text className="basic-expectation basic-align-center">{"text-align: center"}</text>
      </FixtureGroup>
      <FixtureGroup label="font-weight 100–800 and bold">
        <view className="weight-matrix">
          {weights.map((weight) => (
            <text className={`basic-expectation source-weight-${weight}`} key={weight}>
              {`font-weight: ${weight} 中文`}
            </text>
          ))}
        </view>
      </FixtureGroup>
      <FixtureGroup label="font-style">
        <text className="basic-expectation">{"font-style: normal (default)"}</text>
        <text className="basic-expectation basic-italic">{"font-style: italic（斜体）"}</text>
        <text className="basic-expectation basic-italic-bold">{"italic（斜体）+ bold（粗体）"}</text>
      </FixtureGroup>
      <FixtureGroup label="text-decoration">
        <text className="basic-expectation basic-underline">{"text-decoration: underline"}</text>
        <text className="basic-expectation basic-line-through">{"text-decoration: line-through"}</text>
      </FixtureGroup>
      <FixtureGroup label="text-shadow">
        <text className="basic-expectation basic-shadow-single">{"single text shadow"}</text>
        <text className="basic-expectation basic-shadow-multiple">{"multiple text shadows"}</text>
      </FixtureGroup>
    </view>
  );
}

function BidiRow(
  { className = "", leading, trailing }: { className?: string; leading: string; trailing: string },
) {
  return (
    <text className={`bidi-source-row ${className}`} text-maxline="1">
      {leading}
      <view className="bidi-source-box" />
      {trailing}
    </text>
  );
}

export function BidiTextCase() {
  return (
    <view className="fixture-column bidi-source-container">
      <BidiRow leading="اَلْعَرَبِيَّةُ hello word " trailing=" hello word" />
      <BidiRow leading="هذا نص اختباري " trailing=" هذا نص اختباري" />
      <BidiRow leading="اَلْعَرَبِيَّةُ " trailing=" hello word" />
      <BidiRow className="bidi-source-ltr" leading="اَلْعَرَبِيَّةُ " trailing=" hello word" />
      <BidiRow className="bidi-source-rtl" leading="اَلْعَرَبِيَّةُ " trailing=" hello word" />
    </view>
  );
}

export function BoringLayoutCase() {
  return (
    <view className="fixture-column boring-source-container">
      <CompatibilityNote>
        {"The public ReactLynx page cannot enable the retired enableTextBoringLayout host switch or text-vertical-align property. The ten visible inputs remain independently represented."}
      </CompatibilityNote>
      <text className="boring-row boring-nowrap">{"white-space nowrap"}</text>
      <text className="boring-row boring-max-content">{"width max-content"}</text>
      <text className="boring-row boring-nowrap boring-line-height-large">{"line-height 30"}</text>
      <text className="boring-row boring-nowrap boring-line-height-small">{"line-height 10"}</text>
      <text className="boring-row boring-nowrap boring-centered">{"centered width 100"}</text>
      <text className="boring-row boring-nowrap boring-right">{"right width 100"}</text>
      <text className="boring-row boring-nowrap">{"hello world你好"}</text>
      <text className="boring-row boring-nowrap">
        {"hello "}
        <view className="boring-inline-view" />
        {" world"}
      </text>
      <text className="boring-row boring-nowrap">{"legacy text vertical center input"}</text>
      <text className="boring-row boring-empty">{"​"}</text>
    </view>
  );
}

function EventHitRow(
  { label, modifier, onImage, onText, onView }: {
    label: string;
    modifier: string;
    onImage: () => void;
    onText: () => void;
    onView: () => void;
  },
) {
  return (
    <view className="event-source-block">
      <text className="event-source-label">{label}</text>
      <text className={`event-source-line ${modifier}`}>
        <view className="event-source-view" bindtap={onView} />
        <image className="event-source-image" src={inlineImage} bindtap={onImage} />
        <text className="event-source-text" bindtap={onText}>{"hello world"}</text>
      </text>
    </view>
  );
}

export function EventWithPaddingCase() {
  const [inlineTextClickCount, setInlineTextClickCount] = useState(0);
  const [inlineImageClickCount, setInlineImageClickCount] = useState(0);
  const [inlineViewClickCount, setInlineViewClickCount] = useState(0);
  const handlers = {
    onImage: () => setInlineImageClickCount(inlineImageClickCount + 1),
    onText: () => setInlineTextClickCount(inlineTextClickCount + 1),
    onView: () => setInlineViewClickCount(inlineViewClickCount + 1),
  };

  return (
    <view className="fixture-column">
      <text className="event-counts" lynx-test-tag="count">
        <ValueBadge>{`view ${inlineViewClickCount}`}</ValueBadge>{" "}
        <ValueBadge>{`image ${inlineImageClickCount}`}</ValueBadge>{" "}
        <ValueBadge>{`text ${inlineTextClickCount}`}</ValueBadge>
      </text>
      <EventHitRow {...handlers} label="padding-left: 100" modifier="event-padding-left" />
      <EventHitRow {...handlers} label="margin-left: 100" modifier="event-margin-left" />
      <EventHitRow {...handlers} label="border-left: 100" modifier="event-border-left" />
      <EventHitRow {...handlers} label="padding-top: 30" modifier="event-padding-top" />
      <EventHitRow {...handlers} label="margin-top: 30" modifier="event-margin-top" />
      <EventHitRow {...handlers} label="border-top: 30" modifier="event-border-top" />
    </view>
  );
}

export function FontFamilyWeightCase() {
  return (
    <view className="fixture-column">
      <CompatibilityNote>
        {"System font fallbacks replace private fonts while preserving the 800/400 weights and the nested italic regression structure."}
      </CompatibilityNote>
      <text className="font-source-800">{"font-weight: 800 中文"}</text>
      <text className="font-source-400">{"font-weight: 400 中文"}</text>
      <text className="font-source-display">{"444你好世界こんにちは季節"}</text>
      <text className="font-source-question">
        <text className="font-source-question-part">{"Who uncovers Grogu's name in "}</text>
        <text className="font-source-question-part font-source-question-italic">{"The Mandalorian"}</text>
        <text className="font-source-question-part">{"?"}</text>
      </text>
    </view>
  );
}

function HyphenRow({ label, text, variant }: { label: string; text: string; variant: string }) {
  return (
    <view className="hyphen-source-row">
      <text className="hyphen-source-label">{label}</text>
      <text className={`hyphen-source-text ${variant}`}>{text}</text>
    </view>
  );
}

export function HyphensAutoCase() {
  return (
    <view className="fixture-column hyphen-source-container">
      <HyphenRow label="hyphens on" text="An extraordinarily long English word!" variant="hyphens-on" />
      <HyphenRow
        label="hyphens on with soft hyphen"
        text="An extra­ordinarily long English word!"
        variant="hyphens-on"
      />
      <HyphenRow label="hyphens off" text="An extraordinarily long English word!" variant="hyphens-off" />
      <HyphenRow
        label="hyphens off with soft hyphen"
        text="An extra­ordinarily long English word!"
        variant="hyphens-off"
      />
    </view>
  );
}

export function InlineElementAlignCenterCase() {
  return (
    <view className="inline-center-source-container">
      <text className="inline-center-source-text" text-maxline="1">
        {"测试文本 "}
        <image className="inline-center-source-image" src={inlineImage} />
        <view className="inline-center-source-view" />
        {" 这是一段测试文本这是一段测试文本"}
      </text>
    </view>
  );
}
