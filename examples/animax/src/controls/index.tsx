// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import type * as Lynx from "@lynx-js/types";

import "../App.css";

import type { AnimaXParam, AnimaXReadyParam } from "../intrinsic-element.js";
import { ANIMAX_VIEW_ID, ceilFrame, CONTROLS_SHAPE_LOTTIE_SRC, formatFrame } from "../shared/animation.js";

type AnimaXReadyEvent = Lynx.BaseEvent<"bindready", AnimaXReadyParam>;
type AnimaXUpdateEvent = Lynx.BaseEvent<"bindupdate", AnimaXParam>;
type AnimaXPlaybackEvent = Lynx.BaseEvent<"bindcancel" | "bindcompletion" | "bindstart", AnimaXParam>;
type AnimaXMethod = "play" | "pause" | "resume" | "stop" | "seek" | "subscribeUpdateEvents";

const PROGRESS_ID = "animax-controls-progress";

function clampFrame(frame: number, total: number) {
  return Math.max(0, Math.min(frame, total));
}

function invokeControlMethod(
  method: AnimaXMethod,
  params?: Record<string, unknown>,
  success?: () => void,
) {
  lynx
    .createSelectorQuery()
    .select(`#${ANIMAX_VIEW_ID}`)
    .invoke({
      method,
      params,
      success() {
        success?.();
      },
      fail(res) {
        console.log(`[animax] ${method} fail`, JSON.stringify(res));
      },
    })
    .exec();
}

function readRect(value: unknown) {
  const payload = value && typeof value === "object" && "data" in value
    ? (value as { data?: unknown }).data
    : value;

  if (!payload || typeof payload !== "object") {
    return undefined;
  }

  const rect = payload as { left?: unknown; width?: unknown };
  if (typeof rect.left !== "number" || typeof rect.width !== "number") {
    return undefined;
  }

  return { left: rect.left, width: rect.width };
}

function App() {
  const [status, setStatus] = useState("loading");
  const [isReady, setIsReady] = useState(false);
  const [canPauseResume, setCanPauseResume] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [totalFrame, setTotalFrame] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);

  const progress = totalFrame > 0 ? (currentFrame / totalFrame) * 100 : 0;

  const handleReady = (e: AnimaXReadyEvent) => {
    const total = ceilFrame(e.detail.total);
    setTotalFrame(total);
    setCurrentFrame(clampFrame(ceilFrame(e.detail.current), total));

    invokeControlMethod(
      "subscribeUpdateEvents",
      { frames: Array.from({ length: total + 1 }, (_, index) => index) },
      () => {
        setIsReady(true);
        setStatus(`ready: ${formatFrame(total)} frames`);
      },
    );
  };

  const handleUpdate = (e: AnimaXUpdateEvent) => {
    setCurrentFrame(clampFrame(ceilFrame(e.detail.current), totalFrame));
  };

  const handleStart = (e: AnimaXPlaybackEvent) => {
    setStatus("playing");
    setIsPlaying(true);
    setCanPauseResume(true);
  };

  const handleCompletion = (e: AnimaXPlaybackEvent) => {
    setStatus("complete");
    setIsPlaying(false);
  };

  const handleCancel = () => {
    setStatus("stopped");
    setIsPlaying(false);
    setCanPauseResume(false);
    setCurrentFrame(0);
  };

  const seekToFrame = (frame: number) => {
    if (!isReady) {
      return;
    }

    const target = clampFrame(frame, totalFrame);
    invokeControlMethod("seek", { frame: target }, () => {
      setCurrentFrame(target);
      setStatus(`seek: ${formatFrame(target)}`);
    });
  };

  const handleTapPlay = () => {
    if (!isReady) {
      return;
    }

    if (!canPauseResume) {
      invokeControlMethod("play", undefined, () => {
        setIsPlaying(true);
        setCanPauseResume(true);
        setStatus("playing");
      });
      return;
    }

    if (isPlaying) {
      invokeControlMethod("pause", undefined, () => {
        setIsPlaying(false);
        setStatus(`paused: ${formatFrame(currentFrame)}`);
      });
      return;
    }

    invokeControlMethod("resume", undefined, () => {
      setIsPlaying(true);
      setStatus("playing");
    });
  };

  const handleTapStop = () => {
    if (!isReady) {
      return;
    }

    invokeControlMethod("stop", undefined, handleCancel);
  };

  const handleTapPrev = () => {
    seekToFrame(currentFrame > 0 ? currentFrame - 1 : totalFrame);
  };

  const handleTapNext = () => {
    seekToFrame(currentFrame < totalFrame ? currentFrame + 1 : 0);
  };

  const handleTapProgress = (e: Lynx.CommonEvent) => {
    if (!isReady || totalFrame <= 0) {
      return;
    }

    const tapX = typeof e.detail.x === "number" ? e.detail.x : 0;

    lynx
      .createSelectorQuery()
      .select(`#${PROGRESS_ID}`)
      .invoke({
        method: "boundingClientRect",
        success(res) {
          const rect = readRect(res);
          const width = rect?.width ?? SystemInfo.pixelWidth / SystemInfo.pixelRatio;
          const left = rect?.left ?? 0;
          const ratio = width > 0 ? Math.max(0, Math.min((tapX - left) / width, 1)) : 0;

          seekToFrame(Math.round(ratio * totalFrame));
        },
        fail(res) {
          console.log("[animax] progress rect fail", JSON.stringify(res));
        },
      })
      .exec();
  };

  return (
    <view className="example">
      <view className="dock action-dock player-dock">
        <view className="status-panel">
          <view className="status-row">
            <text className="status-label">Status</text>
            <text className="status-value">{status}</text>
          </view>
          <view className="status-row">
            <text className="status-label">Frame</text>
            <text className="status-value">
              {formatFrame(currentFrame)}/{formatFrame(totalFrame)}
            </text>
          </view>
        </view>
        <view
          id={PROGRESS_ID}
          className="player-progress"
          bindtap={handleTapProgress}
        >
          <view className="player-progress-track" />
          <view
            className="player-progress-fill"
            style={{ width: `${progress}%` }}
          />
          <text className="player-progress-text">{Math.round(progress)}%</text>
        </view>
        <view className="player-controls">
          <view />
          <view className="icon-button secondary" bindtap={handleTapPrev}>
            <view className="prev-frame-icon" />
          </view>
          <view className="icon-button" bindtap={handleTapPlay}>
            {isPlaying && canPauseResume ? <view className="pause-icon" /> : <view className="play-icon" />}
          </view>
          <view className="icon-button secondary" bindtap={handleTapNext}>
            <view className="next-frame-icon" />
          </view>
          <view className="icon-button secondary" bindtap={handleTapStop}>
            <view className="stop-icon" />
          </view>
          <view />
        </view>
      </view>
      <view className="surface">
        <animax-view
          id={ANIMAX_VIEW_ID}
          className="animax"
          src={CONTROLS_SHAPE_LOTTIE_SRC}
          autoplay={false}
          loop={true}
          objectfit="contain"
          bindready={handleReady}
          bindupdate={handleUpdate}
          bindstart={handleStart}
          bindcancel={handleCancel}
          bindcompletion={handleCompletion}
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
