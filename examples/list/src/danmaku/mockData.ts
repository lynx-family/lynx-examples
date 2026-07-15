// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

export type MessageTone = "blue" | "green" | "orange" | "purple";

export interface DemoMessage {
  id: string;
  label: string;
  tone: MessageTone;
}

export const DEMO_MESSAGES: DemoMessage[] = [
  { id: "message-01", label: "That entrance was perfect", tone: "blue" },
  { id: "message-02", label: "So smooth", tone: "green" },
  { id: "message-03", label: "Watch the background", tone: "purple" },
  { id: "message-04", label: "Great timing", tone: "orange" },
  { id: "message-05", label: "Replay that moment", tone: "blue" },
  { id: "message-06", label: "The colors look amazing", tone: "green" },
  { id: "message-07", label: "Did you catch that?", tone: "purple" },
  { id: "message-08", label: "Here it comes", tone: "orange" },
  { id: "message-09", label: "This part is my favorite", tone: "blue" },
  { id: "message-10", label: "Nice transition", tone: "green" },
  { id: "message-11", label: "One more time", tone: "purple" },
  { id: "message-12", label: "The details are so good", tone: "orange" },
  { id: "message-13", label: "Look to the left", tone: "blue" },
  { id: "message-14", label: "Love this scene", tone: "green" },
  { id: "message-15", label: "Wait for it", tone: "purple" },
  { id: "message-16", label: "Everything lines up", tone: "orange" },
  { id: "message-17", label: "Here we go", tone: "blue" },
  { id: "message-18", label: "That was worth the wait", tone: "green" },
  { id: "message-19", label: "Perfect loop", tone: "purple" },
  { id: "message-20", label: "Keep watching", tone: "orange" },
];
