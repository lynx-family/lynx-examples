import { root, useState } from "@lynx-js/react";
import "./index.scss";

const RelativeInlineStartOf = () => {
  const containerStyle = {
    display: "relative" as const,
    relativeLayoutOnce: true,
    marginBottom: "20px" as const,
    direction: "ltr" as const,
  };

  const container2Style = {
    display: "relative" as const,
    relativeLayoutOnce: true,
    direction: "rtl" as const,
  };

  const titleStyle = {
    fontSize: "50rpx" as const,
    alignSelf: "center" as const,
    fontWeight: "900" as const,
    color: "linear-gradient(120deg ,#0095ff 30% ,#42d392 100%)" as const,
  };

  const view1Style = {
    relativeId: "1",
    relativeCenter: "horizontal" as const,
    display: "linear" as const,
    backgroundColor: "lightgreen",
    alignItems: "center" as const,
    textAlign: "center" as const,
  };

  const view2Style = {
    display: "linear" as const,
    relativeInlineStartOf: "1",
    alignItems: "center" as const,
    relativeAlignBottom: "parent" as const,
    backgroundColor: "lightblue",
  };

  const view3Style = {
    display: "linear" as const,
    relativeInlineStartOf: "1" as const,
    relativeCenter: "vertical" as const,
    alignItems: "center" as const,
    backgroundColor: "pink",
  };
  const textStyle = {
    fontSize: "23rpx" as const,
    fontWeight: "500" as const,
    textAlign: "center" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <text style={titleStyle}>direction: ltr</text>
      <view className="container" style={containerStyle}>
        <view style={view1Style}>
          <text style={textStyle}>relative-id: 1</text>
          <text style={textStyle}>relative-center: horizontal</text>
        </view>
        <view style={view2Style}>
          <text style={textStyle}>relative-inline-start-of: 1</text>
          <text style={textStyle}>relative-align-bottom: parent</text>
        </view>
        <view style={view3Style}>
          <text style={textStyle}>relative-inline-start-of: 1</text>
          <text style={textStyle}>relative-center: vertical</text>
        </view>
      </view>
      <text style={titleStyle}>direction: rtl</text>
      <view className="container" style={container2Style}>
        <view style={view1Style}>
          <text style={textStyle}>relative-id: 1</text>
          <text style={textStyle}>relative-center: horizontal</text>
        </view>
        <view style={view2Style}>
          <text style={textStyle}>relative-inline-start-of: 1</text>
          <text style={textStyle}>relative-align-bottom: parent</text>
        </view>
        <view style={view3Style}>
          <text style={textStyle}>relative-inline-start-of: 1</text>
          <text style={textStyle}>relative-center: vertical</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<RelativeInlineStartOf />);
