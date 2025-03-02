import { root } from "@lynx-js/react";
import "./index.scss";

const RelativeCenter = () => {
  const containerStyle = {
    display: "relative" as const,
  };

  const view1Style = {
    relativeCenter: "horizontal" as const,
    backgroundColor: "lightgreen" as const,
  };

  const view2Style = {
    relativeCenter: "vertical" as const,
    backgroundColor: "lightblue" as const,
  };

  const view3Style = {
    relativeCenter: "both" as const,
    backgroundColor: "yellow" as const,
  };

  const view4Style = {
    relativeCenter: "none" as const,
    backgroundColor: "pink" as const,
  };

  const textStyle = {
    fontSize: "70rpx" as const,
    fontWeight: "600" as const,
    textAlign: "center" as const,
  };

  return (
    <view className="container" style={containerStyle}>
      <view style={view1Style}>
        <text style={textStyle}>horizontal</text>
      </view>
      <view style={view2Style}>
        <text style={textStyle}>vertical</text>
      </view>
      <view style={view3Style}>
        <text style={textStyle}>both</text>
      </view>
      <view style={view4Style}>
        <text style={textStyle}>none</text>
      </view>
    </view>
  );
};

root.render(<RelativeCenter />);
