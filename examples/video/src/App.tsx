// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { useState } from "@lynx-js/react";
import type { BaseEvent } from "@lynx-js/types";

import "./App.css";

const VIDEO_ID = "video-player";
const VIDEO_SOURCES = [
  {
    name: "Big Buck Bunny",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Flower",
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
] as const;

type VideoObjectFit = "contain" | "cover" | "fill";
type VideoTimeUpdateEvent = BaseEvent<
  "bindtimeupdate",
  { current: number; duration: number }
>;
type VideoFirstFrameEvent = BaseEvent<"bindfirstframe", { duration: number }>;
type VideoBufferingEvent = BaseEvent<"bindbuffering", { buffering: number }>;
type VideoErrorEvent = BaseEvent<
  "binderror",
  { errorCode: number; errorMsg: string }
>;

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "00:00";
  }

  const total = Math.floor(seconds);
  const minutes = Math.floor(total / 60).toString().padStart(2, "0");
  const remainingSeconds = (total % 60).toString().padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
};

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export const App = () => {
  const [status, setStatus] = useState("idle");
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffering, setBuffering] = useState(0);
  const [objectFit, setObjectFit] = useState<VideoObjectFit>("contain");
  const [muted, setMuted] = useState(false);
  const [loop, setLoop] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [speed, setSpeed] = useState(1);
  const [sourceIndex, setSourceIndex] = useState(0);
  const videoSource = VIDEO_SOURCES[sourceIndex];

  const invokeVideo = (
    method: "play" | "pause" | "stop" | "seek",
    params?: Record<string, number>,
  ) => {
    lynx
      .createSelectorQuery()
      .select(`#${VIDEO_ID}`)
      .invoke({
        method,
        params,
        success: (res) => {
          console.log(`[video] ${method} success`, JSON.stringify(res));
        },
        fail: (res) => {
          console.log(`[video] ${method} fail`, JSON.stringify(res));
          setStatus(`${method} failed`);
        },
      })
      .exec();
  };

  const handleFirstFrame = (e: VideoFirstFrameEvent) => {
    setDuration(e.detail.duration);
    setStatus("first frame");
  };

  const handleTimeUpdate = (e: VideoTimeUpdateEvent) => {
    setCurrent(e.detail.current);
    setDuration(e.detail.duration);
    setStatus("playing");
  };

  const handleBuffering = (e: VideoBufferingEvent) => {
    setBuffering(e.detail.buffering);
  };

  const handleError = (e: VideoErrorEvent) => {
    setStatus(`error ${e.detail.errorCode}`);
    console.log("[video] error", e.detail.errorMsg);
  };

  const seekForward = () => {
    const next = duration > 0
      ? clamp(current + 5, 0, duration)
      : current + 5;
    invokeVideo("seek", { position: next });
    setCurrent(next);
  };

  const cycleObjectFit = () => {
    setObjectFit(
      objectFit === "contain" ? "cover" : objectFit === "cover" ? "fill" : "contain",
    );
  };

  const cycleSource = () => {
    setSourceIndex((value) => (value + 1) % VIDEO_SOURCES.length);
    setCurrent(0);
    setDuration(0);
    setBuffering(0);
    setStatus("source changed");
  };

  const changeVolume = (delta: number) => {
    setVolume((value) => clamp(Number((value + delta).toFixed(1)), 0, 1));
  };

  const changeSpeed = (delta: number) => {
    setSpeed((value) => clamp(Number((value + delta).toFixed(1)), 0.5, 2));
  };

  return (
    <scroll-view scroll-orientation="vertical" className="page">
      <view className="hero">
        <text className="eyebrow">Experimental Element</text>
        <text className="title">Video</text>
      </view>

      <view className="player-card">
        <video
          id={VIDEO_ID}
          className="video"
          src={videoSource.url}
          loop={loop}
          muted={muted}
          volume={volume}
          speed={speed}
          object-fit={objectFit}
          mode="latest"
          timeupdate-interval={0.25}
          bindfirstframe={handleFirstFrame}
          bindplaying={() => setStatus("playing")}
          bindpaused={() => setStatus("paused")}
          bindstopped={() => {
            setCurrent(0);
            setStatus("stopped");
          }}
          bindtimeupdate={handleTimeUpdate}
          bindended={() => setStatus("ended")}
          bindlooped={() => setStatus("looped")}
          bindbuffering={handleBuffering}
          binderror={handleError}
        />

        <view className="time-row">
          <text className="time">{formatTime(current)}</text>
          <text className="status">{status}</text>
          <text className="time">{formatTime(duration)}</text>
        </view>
      </view>

      <view className="control-grid">
        <view className="primary-button" bindtap={() => invokeVideo("play")}>
          <text className="primary-button-text">Play</text>
        </view>
        <view className="secondary-button" bindtap={() => invokeVideo("pause")}>
          <text className="secondary-button-text">Pause</text>
        </view>
        <view className="secondary-button" bindtap={() => invokeVideo("stop")}>
          <text className="secondary-button-text">Stop</text>
        </view>
        <view className="secondary-button" bindtap={seekForward}>
          <text className="secondary-button-text">Seek +5s</text>
        </view>
      </view>

      <view className="settings">
        <view className="setting-row">
          <text className="setting-label">Source</text>
          <view className="source-button" bindtap={cycleSource}>
            <text className="source-button-text">{videoSource.name}</text>
          </view>
        </view>

        <view className="setting-row">
          <text className="setting-label">Object Fit</text>
          <view className="pill-button" bindtap={cycleObjectFit}>
            <text className="pill-button-text">{objectFit}</text>
          </view>
        </view>

        <view className="setting-row">
          <text className="setting-label">Muted</text>
          <view className={muted ? "pill-button active" : "pill-button"} bindtap={() => setMuted((value) => !value)}>
            <text className="pill-button-text">{muted ? "On" : "Off"}</text>
          </view>
        </view>

        <view className="setting-row">
          <text className="setting-label">Loop</text>
          <view className={loop ? "pill-button active" : "pill-button"} bindtap={() => setLoop((value) => !value)}>
            <text className="pill-button-text">{loop ? "On" : "Off"}</text>
          </view>
        </view>

        <view className="stepper-row">
          <text className="setting-label">Volume</text>
          <view className="stepper">
            <view className="step-button" bindtap={() => changeVolume(-0.1)}>
              <text className="step-button-text">-</text>
            </view>
            <text className="step-value">{volume.toFixed(1)}</text>
            <view className="step-button" bindtap={() => changeVolume(0.1)}>
              <text className="step-button-text">+</text>
            </view>
          </view>
        </view>

        <view className="stepper-row">
          <text className="setting-label">Speed</text>
          <view className="stepper">
            <view className="step-button" bindtap={() => changeSpeed(-0.1)}>
              <text className="step-button-text">-</text>
            </view>
            <text className="step-value">{speed.toFixed(1)}x</text>
            <view className="step-button" bindtap={() => changeSpeed(0.1)}>
              <text className="step-button-text">+</text>
            </view>
          </view>
        </view>
      </view>

      <view className="metrics">
        <text className="metric-label">Buffered</text>
        <text className="metric-value">{formatTime(buffering)}</text>
      </view>
    </scroll-view>
  );
};
