import { root } from "@lynx-js/react";
import "./index.scss";

const RelativeRightOf = () => {
  const containerStyle = {
    display: "relative" as const,
    relativeLayoutOnce: true,
    marginTop: "20px" as const,
    marginBottom: "20px" as const,
  };

  const titleStyle = {
    fontSize: "50rpx" as const,
    alignSelf: "center" as const,
    fontWeight: "900" as const,
    color: "linear-gradient(120deg ,#0095ff 30% ,#42d392 100%)" as const,
  };

  const view1Style = {
    relativeId: "1",
    relativeAlignLeft: "parent" as const,
    display: "linear" as const,
    backgroundColor: "lightgreen",
    alignItems: "center" as const,
    textAlign: "center" as const,
  };

  const view2Style = {
    display: "linear" as const,
    relativeRightOf: "1",
    alignItems: "center" as const,
    relativeAlignBottom: "parent" as const,
    backgroundColor: "lightblue",
  };

  const view3Style = {
    display: "linear" as const,
    relativeRightOf: "1" as const,
    relativeCenter: "vertical" as const,
    alignItems: "center" as const,
    backgroundColor: "pink",
  };
  const textStyle = {
    fontSize: "25rpx" as const,
    fontWeight: "500" as const,
    textAlign: "center" as const,
  };

  return (
    <view className="container" style={containerStyle}>
      <view style={view1Style}>
        <text style={textStyle}>relative-id: 1</text>
        <text style={textStyle}>relative-align-left: parent</text>
      </view>
      <view style={view2Style}>
        <text style={textStyle}>relative-right-of: 1</text>
        <text style={textStyle}>relative-align-bottom: parent</text>
      </view>
      <view style={view3Style}>
        <text style={textStyle}>relative-right-of: 1</text>
        <text style={textStyle}>relative-center: vertical</text>
      </view>
    </view>
  );
};

root.render(<RelativeRightOf />);
