import { root, useState } from "@lynx-js/react";
import "./index.scss";

const RelativeAlignRight = () => {
  const containerStyle = {
    display: "relative" as const,
    relativeLayoutOnce: true,
    marginBottom: "20px" as const,
  };

  const view1Style = {
    relativeId: "1",
    display: "linear" as const,
    relativeCenter: "horizontal" as const,
    backgroundColor: "lightgreen",
    alignItems: "center" as const,
    textAlign: "center" as const,
  };

  const view2Style = {
    display: "linear" as const,
    relativeAlignRight: "1",
    alignItems: "center" as const,
    relativeAlignBottom: "parent" as const,
    backgroundColor: "lightblue",
  };

  const view3Style = {
    display: "linear" as const,
    relativeAlignRight: "parent" as const,
    relativeCenter: "vertical" as const,
    alignItems: "center" as const,
    backgroundColor: "pink",
  };
  const textStyle = {
    fontSize: "40rpx" as const,
    fontWeight: "600" as const,
    textAlign: "center" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="container" style={containerStyle}>
        <view style={view1Style}>
          <text style={textStyle}>relative-id: 1</text>
          <text style={textStyle}>relative-center: horizontal</text>
        </view>
        <view style={view2Style}>
          <text style={textStyle}>relative-align-right: 1</text>
          <text style={textStyle}>relative-align-bottom: parent</text>
        </view>
        <view style={view3Style}>
          <text style={textStyle}>relative-align-right: parent</text>
          <text style={textStyle}>relative-center: horizontal</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<RelativeAlignRight />);
