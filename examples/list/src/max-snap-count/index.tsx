// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";

import "./index.scss";

const items = Array.from({ length: 18 }, (_, index) => index);
const colors = ["#c7bcf7", "#aedfd4", "#ffd29b", "#f2b8cc"];

function SnapComparison({ maxSnapCount }: { maxSnapCount: number }) {
  const [position, setPosition] = useState(0);

  return (
    <view className="comparison">
      <view className="comparison-heading">
        <text className="property">{`maxSnapCount: ${maxSnapCount}`}</text>
        <text className="position">{`Item ${position}`}</text>
      </view>
      <text className="caption">
        {maxSnapCount === 1 ? "One item per fling" : "Up to three items per fling"}
      </text>
      <list
        className="snap-list"
        list-type="single"
        span-count={1}
        scroll-orientation="horizontal"
        item-snap={{ factor: 0, offset: 0, maxSnapCount }}
        bindsnap={(event) => setPosition(event.detail.position)}
      >
        {items.map((index) => (
          <list-item
            className="snap-item"
            item-key={`item-${index}`}
            key={index}
          >
            <view
              className="number-card"
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <text className="card-kicker">ITEM</text>
              <text className="card-number">{String(index).padStart(2, "0")}</text>
              <text className="card-footer">FLING TO EXPLORE</text>
            </view>
          </list-item>
        ))}
      </list>
    </view>
  );
}

function App() {
  return (
    <view className="snap-page">
      <text className="eyebrow">LYNX 4.2 / ITEM SNAP</text>
      <text className="title">Same fling. More reach.</text>
      <text className="subtitle">
        Swipe each row quickly to the left. The lists differ only in maxSnapCount.
      </text>
      <SnapComparison maxSnapCount={1} />
      <SnapComparison maxSnapCount={3} />
      <text className="footnote">
        Item labels report the native snap event. No scripted scrolling.
      </text>
    </view>
  );
}

root.render(<App />);
