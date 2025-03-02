import { root, useState } from "@lynx-js/react";
import "./index.scss";

const RelativeAlignInlineStart = () => {
  const container1Style = {
    display: "relative" as const,
    relativeLayoutOnce: true,
    direction: "ltr" as const,
    marginBottom: "20px" as const,
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
    display: "linear" as const,
    relativeCenter: "horizontal" as const,
    backgroundColor: "lightgreen",
    alignItems: "center" as const,
    textAlign: "center" as const,
  };

  const view2Style = {
    display: "linear" as const,
    relativeAlignInlineStart: "1",
    alignItems: "center" as const,
    relativeAlignBottom: "parent" as const,
    backgroundColor: "lightblue",
  };

  const view3Style = {
    display: "linear" as const,
    relativeAlignInlineStart: "parent" as const,
    relativeCenter: "vertical" as const,
    alignItems: "center" as const,
    backgroundColor: "pink",
  };
  const textStyle = {
    fontSize: "35rpx" as const,
    fontWeight: "600" as const,
    textAlign: "center" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <text style={titleStyle}>direction: ltr</text>
      <view className="container" style={container1Style}>
        <view style={view1Style}>
          <text style={textStyle}>relative-id: 1</text>
          <text style={textStyle}>relative-center: horizontal</text>
        </view>
        <view style={view2Style}>
          <text style={textStyle}>relative-align-inline-start: 1</text>
          <text style={textStyle}>relative-align-bottom: parent</text>
        </view>
        <view style={view3Style}>
          <text style={textStyle}>relative-align-inline-start: parent</text>
          <text style={textStyle}>relative-center: horizontal</text>
        </view>
      </view>
      <text style={titleStyle}>direction: rtl</text>
      <view className="container" style={container2Style}>
        <view style={view1Style}>
          <text style={textStyle}>relative-id: 1</text>
          <text style={textStyle}>relative-center: horizontal</text>
        </view>
        <view style={view2Style}>
          <text style={textStyle}>relative-align-inline-start: 1</text>
          <text style={textStyle}>relative-align-bottom: parent</text>
        </view>
        <view style={view3Style}>
          <text style={textStyle}>relative-align-inline-start: parent</text>
          <text style={textStyle}>relative-center: horizontal</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<RelativeAlignInlineStart />);
