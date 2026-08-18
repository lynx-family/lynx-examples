// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import type { PropsWithChildren } from "@lynx-js/react";

export function FixtureGroup(
  { children, label }: PropsWithChildren<{ label: string }>,
) {
  return (
    <view className="fixture-group">
      <text className="fixture-label">{label}</text>
      <view className="fixture-group-content">{children}</view>
    </view>
  );
}

export function CompatibilityNote({ children }: PropsWithChildren) {
  return (
    <view className="compatibility-note">
      <text className="compatibility-note-title">{"PUBLIC COMPATIBILITY"}</text>
      <text className="compatibility-note-copy">{children}</text>
    </view>
  );
}

export function ValueBadge({ children }: PropsWithChildren) {
  return <text className="value-badge">{children}</text>;
}
