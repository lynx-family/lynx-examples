// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { type ReactNode, useState } from "@lynx-js/react";

import { inlineImage } from "../mockData.js";
import { FixtureGroup, ValueBadge } from "./shared.jsx";

const InteractiveInlineTruncation = "inline-truncation" as unknown as (
  props: {
    bindtap: () => void;
    children: ReactNode;
  },
) => ReactNode;

const longEnglish =
  "this is a test text. this is a test text. this is a test text. this is a test text. this is a test text. this is a test text.";
const longArabic = "هذا نص للاختبار هذا نص للاختبار هذا نص للاختبار هذا نص للاختبار هذا نص للاختبار هذا نص للاختبار";

function BasicTail({ percentage = false }: { percentage?: boolean }) {
  return (
    <inline-truncation>
      <view
        className={percentage ? "trunc-basic-tail-view trunc-basic-tail-view--percentage" : "trunc-basic-tail-view"}
      />
      <text className="trunc-basic-tail-text">{"inline truncation"}</text>
    </inline-truncation>
  );
}

function TruncationHeightRow(
  { className, content = longEnglish, label, tail = true }: {
    className: string;
    content?: string;
    label: string;
    tail?: boolean;
  },
) {
  return (
    <view className="trunc-basic-row">
      <text className="trunc-basic-label">{label}</text>
      <text className={`trunc-basic-text ${className}`}>
        {content}
        {tail && <BasicTail />}
      </text>
    </view>
  );
}

export function InlineTruncationCase() {
  return (
    <view className="fixture-column">
      <TruncationHeightRow className="trunc-height-30" label="height 30 · line-height 20" />
      <TruncationHeightRow className="trunc-height-10" label="height 10 · flatten false tail" />
      <view className="trunc-basic-row">
        <text className="trunc-basic-label">{"height 20 · short text tail"}</text>
        <text className="trunc-basic-text trunc-height-20">
          {"this is a test text."}
          <inline-truncation>
            <text>{"inline truncation"}</text>
          </inline-truncation>
        </text>
      </view>
      <TruncationHeightRow
        className="trunc-height-25"
        content="this is a test text."
        label="height 25 · short text and view tail"
      />
      <TruncationHeightRow className="trunc-height-20" content="" label="height 20 · empty content" />
      <TruncationHeightRow
        className="trunc-height-10 trunc-overflow-visible"
        content="this is a test text."
        label="height 10 · overflow visible"
        tail={false}
      />
      <TruncationHeightRow className="trunc-height-10 trunc-ellipsis" label="height 10 · ellipsis" tail={false} />
      <TruncationHeightRow
        className="trunc-height-25 trunc-ellipsis trunc-no-line-height"
        label="height 25 · ellipsis · default line-height"
        tail={false}
      />
      <TruncationHeightRow className="trunc-height-40" label="height 40 · custom tail" />
      <TruncationHeightRow className="trunc-height-50" label="height 50 · custom tail" />
      <view className="trunc-basic-row">
        <text className="trunc-basic-label">{"maxline 2 · 50% inline view"}</text>
        <text className="trunc-basic-text trunc-maxline-two" text-maxline="2">
          {longEnglish}
          <BasicTail percentage />
        </text>
      </view>
      <FixtureGroup label="flex siblings · heights 30 / 40 / 50">
        <view className="trunc-basic-flex-row">
          <text className="trunc-basic-text trunc-height-30">
            {longEnglish}
            <BasicTail />
          </text>
          <text className="trunc-basic-text trunc-height-40">
            {longEnglish}
            <BasicTail />
          </text>
          <text className="trunc-basic-text trunc-height-50">
            {longEnglish}
            <BasicTail />
          </text>
        </view>
      </FixtureGroup>
    </view>
  );
}

function EventColor({ active }: { active: boolean }) {
  return <ValueBadge>{active ? "red / tapped" : "black / idle"}</ValueBadge>;
}

export function InlineTruncationEventCase() {
  const [ltrTruncation, setLtrTruncation] = useState(false);
  const [ltrImage, setLtrImage] = useState(false);
  const [ltrView, setLtrView] = useState(false);
  const [ltrText, setLtrText] = useState(false);
  const [rtlTruncation, setRtlTruncation] = useState(false);
  const [rtlImage, setRtlImage] = useState(false);
  const [rtlView, setRtlView] = useState(false);
  const [rtlText, setRtlText] = useState(false);

  return (
    <view className="fixture-column">
      <FixtureGroup label="LTR · event on inline-truncation">
        <EventColor active={ltrTruncation} />
        <text
          className={ltrTruncation ? "trunc-event-text trunc-event-text--active" : "trunc-event-text"}
          text-maxline="1"
        >
          {"this is this is "}
          <view>
            <text className="trunc-event-nested">{"this is"}</text>
          </view>
          {" 这个文本 "}
          <text className="trunc-event-nested">
            {"this is "}
            <image className="trunc-event-image" src={inlineImage} />
          </text>
          {" this is a test text."}
          <InteractiveInlineTruncation bindtap={() => setLtrTruncation(true)}>
            <view className="trunc-event-view" />
            <text>{"inline truncation"}</text>
          </InteractiveInlineTruncation>
        </text>
      </FixtureGroup>

      <FixtureGroup label="LTR · child view / image / text events">
        <text className={ltrView ? "trunc-event-text trunc-event-text--active" : "trunc-event-text"} text-maxline="1">
          {longEnglish}
          <inline-truncation>
            <view className="trunc-event-view trunc-event-view--large" bindtap={() => setLtrView(true)} />
          </inline-truncation>
        </text>
        <EventColor active={ltrView} />
        <text className={ltrImage ? "trunc-event-text trunc-event-text--active" : "trunc-event-text"} text-maxline="1">
          {longEnglish}
          <inline-truncation>
            <image className="trunc-event-tail-image" src={inlineImage} bindtap={() => setLtrImage(true)} />
          </inline-truncation>
        </text>
        <EventColor active={ltrImage} />
        <text className={ltrText ? "trunc-event-text trunc-event-text--active" : "trunc-event-text"} text-maxline="1">
          {longEnglish}
          <inline-truncation>
            <text bindtap={() => setLtrText(true)}>{"inline truncation"}</text>
          </inline-truncation>
        </text>
        <EventColor active={ltrText} />
      </FixtureGroup>

      <FixtureGroup label="RTL · event on inline-truncation">
        <EventColor active={rtlTruncation} />
        <text
          className={rtlTruncation
            ? "trunc-event-text trunc-event-text--rtl trunc-event-text--active"
            : "trunc-event-text trunc-event-text--rtl"}
          text-maxline="1"
        >
          {longArabic}
          <InteractiveInlineTruncation bindtap={() => setRtlTruncation(true)}>
            <text>{"اقتطاع مخصص"}</text>
            <view className="trunc-event-view" />
            <image className="trunc-event-image-small" src={inlineImage} />
          </InteractiveInlineTruncation>
        </text>
      </FixtureGroup>

      <FixtureGroup label="RTL · child view / image / text events">
        <text
          className={rtlView
            ? "trunc-event-text trunc-event-text--rtl trunc-event-text--active"
            : "trunc-event-text trunc-event-text--rtl"}
          text-maxline="1"
        >
          {longArabic}
          <inline-truncation>
            <view className="trunc-event-view" bindtap={() => setRtlView(true)} />
          </inline-truncation>
        </text>
        <EventColor active={rtlView} />
        <text
          className={rtlImage
            ? "trunc-event-text trunc-event-text--rtl trunc-event-text--active"
            : "trunc-event-text trunc-event-text--rtl"}
          text-maxline="1"
        >
          {longArabic}
          <inline-truncation>
            <image className="trunc-event-image-small" src={inlineImage} bindtap={() => setRtlImage(true)} />
          </inline-truncation>
        </text>
        <EventColor active={rtlImage} />
        <text
          className={rtlText
            ? "trunc-event-text trunc-event-text--rtl trunc-event-text--active"
            : "trunc-event-text trunc-event-text--rtl"}
          text-maxline="1"
        >
          {longArabic}
          <inline-truncation>
            <text bindtap={() => setRtlText(true)}>{"اقتطاع مخصص"}</text>
          </inline-truncation>
        </text>
        <EventColor active={rtlText} />
      </FixtureGroup>
    </view>
  );
}

type RtlTailKind = "text" | "view" | "image" | "composite" | "latin" | "vertical" | "view-image";

function RtlTail({ kind }: { kind: RtlTailKind }) {
  if (kind === "view") {
    return (
      <inline-truncation>
        <view className="rtl-source-tail-view" />
      </inline-truncation>
    );
  }
  if (kind === "image") {
    return (
      <inline-truncation>
        <image className="rtl-source-tail-image" src={inlineImage} />
      </inline-truncation>
    );
  }
  if (kind === "composite") {
    return (
      <inline-truncation>
        <text>{"اقتطاع مخصص"}</text>
        <view className="rtl-source-tail-view" />
        <image className="rtl-source-tail-image" src={inlineImage} />
      </inline-truncation>
    );
  }
  if (kind === "latin") {
    return (
      <inline-truncation>
        <text>{"...truncation"}</text>
      </inline-truncation>
    );
  }
  if (kind === "vertical") {
    return (
      <inline-truncation>
        <view className="rtl-source-tail-view rtl-source-tail-view--raised" />
        <image className="rtl-source-tail-image rtl-source-tail-image--lowered" src={inlineImage} />
      </inline-truncation>
    );
  }
  if (kind === "view-image") {
    return (
      <inline-truncation>
        <view className="rtl-source-tail-view" />
        <image className="rtl-source-tail-image" src={inlineImage} />
      </inline-truncation>
    );
  }
  return (
    <inline-truncation>
      <text>{"اقتطاع مخصص"}</text>
    </inline-truncation>
  );
}

function RtlSourceRow(
  { children, className = "", kind = "text", label, maxline = "1" }: {
    children: ReactNode;
    className?: string;
    kind?: RtlTailKind;
    label: string;
    maxline?: string;
  },
) {
  return (
    <view className="rtl-source-row">
      <text className="rtl-source-label">{label}</text>
      <text className={`rtl-source-text ${className}`} text-maxline={maxline}>
        {children}
        <RtlTail kind={kind} />
      </text>
    </view>
  );
}

export function InlineTruncationRtlCase() {
  return (
    <view className="fixture-column">
      <RtlSourceRow className="rtl-source-direction" label="rtl · maxline 1">{longArabic}</RtlSourceRow>
      <RtlSourceRow label="auto direction · maxline 1">{longArabic}</RtlSourceRow>
      <RtlSourceRow className="rtl-source-direction rtl-source-ellipsis" label="rtl · ellipsis · maxline 1">
        {longArabic}
      </RtlSourceRow>
      <RtlSourceRow className="rtl-source-ellipsis" label="auto · ellipsis · maxline 1">{longArabic}</RtlSourceRow>
      <RtlSourceRow className="rtl-source-ellipsis" label="text tail · maxline 2" maxline="2">
        {longArabic}
      </RtlSourceRow>
      <RtlSourceRow className="rtl-source-ellipsis" kind="view" label="view tail · maxline 2" maxline="2">
        {longArabic}
      </RtlSourceRow>
      <RtlSourceRow className="rtl-source-ellipsis" kind="image" label="image tail · maxline 2" maxline="2">
        {longArabic}
      </RtlSourceRow>
      <RtlSourceRow className="rtl-source-ltr rtl-source-ellipsis" label="mixed copy · ltr · Arabic tail" maxline="2">
        {"this is a للاختبا long test text this is a long test text this is a long test text"}
      </RtlSourceRow>
      <RtlSourceRow
        className="rtl-source-direction rtl-source-ellipsis"
        label="Latin copy · rtl · Arabic tail"
        maxline="2"
      >
        {longEnglish}
      </RtlSourceRow>
      <RtlSourceRow className="rtl-source-ltr rtl-source-ellipsis" label="Latin copy · ltr · Arabic tail" maxline="2">
        {longEnglish}
      </RtlSourceRow>
      <RtlSourceRow
        className="rtl-source-direction rtl-source-ellipsis"
        kind="latin"
        label="Arabic copy · rtl · Latin tail"
        maxline="2"
      >
        {longArabic}
      </RtlSourceRow>
      <RtlSourceRow
        className="rtl-source-direction rtl-source-ellipsis"
        kind="latin"
        label="Latin copy · rtl · Latin tail"
        maxline="2"
      >
        {longEnglish}
      </RtlSourceRow>
      <RtlSourceRow className="rtl-source-ellipsis" kind="composite" label="composite text/view/image tail">
        {longArabic}
      </RtlSourceRow>
      <RtlSourceRow className="rtl-source-ellipsis" kind="latin" label="emoji copy · Latin tail">
        {"😄😅😄😅😄😅😄😅😄😅😄😅😄😅😄😅😄😅😄😅😄😅😄😅"}
      </RtlSourceRow>
      <RtlSourceRow
        className="rtl-source-ellipsis"
        kind="vertical"
        label="positive / negative vertical-align"
        maxline="2"
      >
        {longArabic}
      </RtlSourceRow>
      <RtlSourceRow
        className="rtl-source-ellipsis"
        kind="view-image"
        label="inline body view/image and tail view/image"
        maxline="2"
      >
        {"هذا نص "}
        <view className="rtl-source-tail-view" />
        {" للاختبار هذا نص "}
        <view className="rtl-source-tail-view" />
        {longArabic}
        <image className="rtl-source-tail-image" src={inlineImage} />
      </RtlSourceRow>
    </view>
  );
}

export function InlineTruncationUpdateCase() {
  const [control, setControl] = useState(true);
  const [line, setLine] = useState("1");

  const onTap = () => {
    setControl(!control);
    setLine("-1");
  };

  return (
    <view className="fixture-column trunc-update-root" bindtap={onTap}>
      <text className="trunc-update-status">
        <ValueBadge>{`control ${control}`}</ValueBadge> <ValueBadge>{`line ${line}`}</ValueBadge>
      </text>
      <text className="trunc-update-primary" text-maxline="1">
        {"这段文本内容过长，会发生截断"}
        {control && (
          <inline-truncation>
            <text className="trunc-update-tail-text">{"truncation"}</text>
            <view>
              <text>{"haha"}</text>
            </view>
          </inline-truncation>
        )}
      </text>
      <text className="trunc-update-secondary" text-maxline={line}>
        {[0, 1, 2, 3, 4].map((item) => (
          <view className="trunc-update-item" key={`${item}`}>
            <text className="trunc-update-item-text">{"hello"}</text>
          </view>
        ))}
        <inline-truncation>
          <view className="trunc-update-green-tail" />
        </inline-truncation>
      </text>
      <text className="trunc-update-hint">{"Tap the content: invert control and set line to -1"}</text>
    </view>
  );
}
