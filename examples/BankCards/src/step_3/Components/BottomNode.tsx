// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import "./BottomNode.scss";

interface BottomNodeProps {
  onPayNow?: () => void;
}

export default function BottomNode({ onPayNow }: BottomNodeProps) {
  return (
    <view className="bottom-node">
      <view className="bottom-continue-button" bindtap={onPayNow}>
        <text className="bottom-continue-text">Pay Now</text>
      </view>
    </view>
  );
}
