import { root, useEffect, useRef, useState } from "@lynx-js/react";
import "./index.scss";

const OffsetRotate = () => {
  const containerStyle = {
    display: "linear" as const,
  };

  return (
    <view className="intro" style={containerStyle}>
      <text class="title">offset-rotate</text>

      <view class="container1">
        <text style={{ fontSize: "25px" }}>offset-rotate: 0deg</text>
        <view class="box offset-0">
          <text>offset-rotate: 0deg</text>
        </view>
      </view>

      <view class="container2">
        <text style={{ fontSize: "25px" }}>offset-rotate: 45deg</text>
        <view class="box offset-1">
          <text>offset-rotate: 45deg</text>
        </view>
      </view>

      <view class="container3">
        <text style={{ fontSize: "25px" }}>offset-rotate: 120deg</text>
        <view class="box offset-2">
          <text>offset-rotate: 120deg</text>
        </view>
      </view>
    </view>
  );
};

root.render(<OffsetRotate />);
