// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import type * as Lynx from "@lynx-js/types";

import "../App.css";

import type { AnimaXReadyParam } from "../intrinsic-element.js";
import { ANIMAX_VIEW_ID, ceilFrame, METHODS_QUERY_LOTTIE_SRC } from "../shared/animation.js";

type AnimaXReadyEvent = Lynx.BaseEvent<"bindready", AnimaXReadyParam>;
type QueryMethod = "getDuration" | "getCurrentFrame" | "isAnimating";

function readPayload(res: unknown) {
  if (res && typeof res === "object" && "data" in res) {
    return (res as { data?: unknown }).data;
  }

  return res;
}

function readNumber(value: unknown) {
  if (typeof value === "number") {
    return value;
  }

  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    const candidates = [
      record.current,
      record.frame,
      record.duration,
      record.value,
    ];
    return candidates.find((candidate): candidate is number => typeof candidate === "number");
  }

  return undefined;
}

function formatQueryResult(method: QueryMethod, res: unknown) {
  const payload = readPayload(res);

  if (typeof payload === "boolean") {
    return payload ? "true" : "false";
  }

  const numeric = readNumber(payload);

  if (typeof numeric === "number") {
    return `${ceilFrame(numeric)}`;
  }

  if (payload == null) {
    return `${method} ok`;
  }

  return JSON.stringify(payload);
}

function invokeQuery(method: QueryMethod, onResult: (value: string) => void) {
  lynx
    .createSelectorQuery()
    .select(`#${ANIMAX_VIEW_ID}`)
    .invoke({
      method,
      success(res) {
        onResult(formatQueryResult(method, res));
      },
      fail(res) {
        console.log(`[animax] ${method} fail`, JSON.stringify(res));
        onResult(`${method} failed`);
      },
    })
    .exec();
}

function App() {
  const [status, setStatus] = useState("loading");
  const [duration, setDuration] = useState("-");
  const [frame, setFrame] = useState("-");
  const [animating, setAnimating] = useState("-");

  const handleReady = (e: AnimaXReadyEvent) => {
    setStatus(`ready: ${ceilFrame(e.detail.total)} frames`);
    invokeQuery("getDuration", setDuration);
  };

  const queryDuration = () => {
    invokeQuery("getDuration", setDuration);
  };

  const queryCurrentFrame = () => {
    invokeQuery("getCurrentFrame", setFrame);
  };

  const queryAnimating = () => {
    invokeQuery("isAnimating", setAnimating);
  };

  return (
    <view className="example">
      <view className="dock action-dock">
        <view className="status-panel">
          <view className="status-row">
            <text className="status-label">Status</text>
            <text className="status-value">{status}</text>
          </view>
          <view className="status-row">
            <text className="status-label">Duration</text>
            <text className="status-value">{duration}</text>
          </view>
          <view className="status-row">
            <text className="status-label">Frame</text>
            <text className="status-value">{frame}</text>
          </view>
          <view className="status-row">
            <text className="status-label">Animating</text>
            <text className="status-value">{animating}</text>
          </view>
        </view>
        <view className="control-grid">
          <view className="button" bindtap={queryDuration}>
            <text className="button-text">Duration</text>
          </view>
          <view className="button secondary" bindtap={queryCurrentFrame}>
            <text className="button-text">Frame</text>
          </view>
          <view className="button secondary" bindtap={queryAnimating}>
            <text className="button-text">Animating</text>
          </view>
        </view>
      </view>
      <view className="surface">
        <animax-view
          id={ANIMAX_VIEW_ID}
          className="animax"
          src={METHODS_QUERY_LOTTIE_SRC}
          autoplay={true}
          loop={true}
          objectfit="contain"
          bindready={handleReady}
        />
      </view>
    </view>
  );
}

root.render(
  <view className="page">
    <App />
  </view>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
