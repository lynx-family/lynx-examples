// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import { type Poster, posterImgs } from "./posterImgs.jsx";

import add from "@assets/add.jpg?inline";
import left from "@assets/left_arrow.jpg?inline";

import "./index.scss";

function App() {
  const generatePosterData = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      ...posterImgs[i % posterImgs.length],
      name: `${posterImgs[i % posterImgs.length].name} (${Math.floor(i / posterImgs.length) + 1})`,
    }));
  };
  const [contentArray, setContentArray] = useState(generatePosterData(15));
  const [hasMoreData, setHadMoreData] = useState(true);

  const addDataToLower = () => {
    console.log("addDataToLower");
    setTimeout(() => {
      setHadMoreData(false);
      setContentArray(generatePosterData(30));
    }, 1500);
  };

  return (
    <view class="container">
      <view className="header">
        <image src={left} className="nav-icon left" />
        <text className="title">Load More Data</text>
        <image src={add} className="nav-icon right" />
      </view>
      <list
        className="list-wrapper"
        list-type="single"
        span-count={1}
        scroll-orientation="vertical"
        bounces={false}
        lower-threshold-item-count={2}
        bindscrolltolower={(e) => {
          addDataToLower();
        }}
      >
        {contentArray.map((movie: Poster, index) => (
          <list-item
            item-key={movie.name + index}
            key={movie.name + index}
          >
            <view className="movie-card">
              <image className="poster-image" src={movie.poster} />
              <view className="score-container">
                <view className="score-badge">
                  <view className="score-spacer" />
                  <text className="score-value">{`list-item-${index}`}</text>
                </view>
              </view>
            </view>
          </list-item>
        ))}
        {hasMoreData
          ? (
            <list-item item-key="loading" key="loading">
              <text className="title-align">{`Load More Data...`}</text>
            </list-item>
          )
          : (
            <list-item item-key="no-more" key="no-more">
              <text className="title-align">{`No More Data`}</text>
            </list-item>
          )}
      </list>
    </view>
  );
}

root.render(<App />);

export default App;
