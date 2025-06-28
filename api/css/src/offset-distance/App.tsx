import { root, useEffect, useRef, useState } from "@lynx-js/react";
import "./index.scss";

const OffsetDistance = () => {
  const containerStyle = {
    display: "linear" as const,
  };

  const [flag, setFlag] = useState(true);

  return (
    <view className="intro" style={containerStyle}>
      <text class="title">offset-distance</text>

      <view class="container1">
        <text style={{ fontSize: "25px" }}>offset-distance: 0.1</text>
        <view class="box offset-0">
          <text>offset: 0.1</text>
        </view>
      </view>

      <view class="container2">
        <text style={{ fontSize: "25px" }}>offset-distance: 0.5</text>
        <view class="box offset-1">
          <text>offset: 0.5</text>
        </view>
      </view>

      <view class="container3">
        <text style={{ fontSize: "25px" }}>offset-distance: 0.8</text>
        <view class="box offset-2">
          <text>offset: 0.8</text>
        </view>
      </view>
    </view>
  );
};

root.render(<OffsetDistance />);
