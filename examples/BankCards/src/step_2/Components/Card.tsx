// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import "./Card.scss";
import type { BankCard } from "./BankCardScrollView";

interface CardProps {
  isFront: boolean;
  isFirstRender: boolean;
}

export default function Card({
  isFront,
  isFirstRender,
}: CardProps) {
  return (
    <view className="card-content">
      <view
        className={`card-back ${!isFirstRender ? (isFront ? "back" : "front") : ""}`}
      >
        <view className="card-back">
          <view className="card-inputs">
            <view className="input-group">
              <text className="input-label">Card Holder</text>
              <view className="input-field">
                <text>Alex Quentin</text>
              </view>
            </view>
            <view className="input-group input-ccv">
              <view className="input-label-wrapper">
                <text className="input-label">CCV2</text>
              </view>
              <view className="input-field-small" />
            </view>
          </view>
        </view>
      </view>

      <view
        className={`card-front ${!isFirstRender ? (isFront ? "front" : "back") : ""}`}
      >
        <view className="card-number">
          <text className="first-digits">4558</text>
          <text className="middle-digits">**** ****</text>
          <text className="last-digits">6767</text>
        </view>
        <view className="card-info">
          <text>Alex Quentin</text>
        </view>
      </view>
    </view>
  );
}
