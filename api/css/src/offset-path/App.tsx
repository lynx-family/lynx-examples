import { root } from "@lynx-js/react";
import "./index.scss";

const OffsetPath = () => {
  const containerStyle = {
    display: "linear" as const,
  };

  return (
    <view className="intro" style={containerStyle}>
      <text class="title">offset-path</text>

      <view class="container1">
        <text style={{ fontSize: "25px" }}>Bezier Curve</text>
        <view class="box1">
          <text>bezier</text>
        </view>
      </view>

      <view class="container2">
        <text style={{ fontSize: "25px" }}>triangle Curve</text>
        <view class="box2">
          <text>triangle</text>
        </view>
      </view>

      <view class="container3">
        <text style={{ fontSize: "25px" }}>pentagon Curve</text>
        <view class="box3">
          <text>pentagon</text>
        </view>
      </view>
    </view>
  );
};

root.render(<OffsetPath />);
