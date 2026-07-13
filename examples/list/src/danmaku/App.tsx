// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { useState } from "@lynx-js/react";

import { Danmaku } from "./components/Danmaku.jsx";
import { DEMO_MESSAGES, type DemoMessage } from "./mockData.js";
import "./App.scss";

const getMessageKey = (message: DemoMessage) => message.id;

export function App() {
  const [messages, setMessages] = useState(DEMO_MESSAGES);
  const [autoScroll, setAutoScroll] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<DemoMessage | null>(null);
  const isRunning = autoScroll && messages.length > 0;

  const clearMessages = () => {
    setMessages([]);
    setAutoScroll(false);
    setSelectedMessage(null);
  };

  const restoreMessages = () => {
    setMessages(DEMO_MESSAGES);
    setAutoScroll(true);
    setSelectedMessage(null);
  };

  return (
    <view className="app">
      <view className="intro">
        <text className="eyebrow">CONTINUOUS LIST</text>
        <text className="title">Live danmaku</text>
        <text className="description">
          Four staggered lanes keep comments moving across the stage and loop without a visible jump.
        </text>
      </view>

      <view className="demo-card">
        <view className="demo-card-header">
          <view>
            <text className="demo-card-title">NOW PLAYING</text>
            <text className="demo-card-status">
              {messages.length} comments · tap any message
            </text>
          </view>
          <view className={`status-pill ${isRunning ? "status-pill--active" : ""}`}>
            <view className="status-dot" />
            <text className="status-text">{isRunning ? "AUTO" : "PAUSED"}</text>
          </view>
        </view>

        <view className="stream-frame">
          <Danmaku
            items={messages}
            rows={4}
            autoScroll={autoScroll}
            getItemKey={getMessageKey}
            onItemTap={(message) => setSelectedMessage(message)}
            renderItem={(message) => (
              <view className={`message-card message-card--${message.tone}`}>
                <view className="message-dot" />
                <text className="message-label">{message.label}</text>
              </view>
            )}
          />
        </view>

        <view className="selection">
          <text className="selection-label">LAST TAP</text>
          <text className="selection-value" text-maxline="1">
            {selectedMessage?.label ?? "No message selected"}
          </text>
        </view>

        <view className="controls">
          <view
            className={`control control--primary ${messages.length === 0 ? "control--disabled" : ""}`}
            bindtap={() => messages.length > 0 && setAutoScroll((enabled) => !enabled)}
          >
            <text className="control-text control-text--primary">
              {autoScroll ? "Pause" : "Resume"}
            </text>
          </view>
          <view
            className="control control--secondary"
            bindtap={messages.length === 0 ? restoreMessages : clearMessages}
          >
            <text className="control-text">
              {messages.length === 0 ? "Restore" : "Clear lanes"}
            </text>
          </view>
        </view>
      </view>

      <text className="hint">
        Drag or fling any lane to move all four together. Auto-scroll resumes after momentum ends.
      </text>
    </view>
  );
}
