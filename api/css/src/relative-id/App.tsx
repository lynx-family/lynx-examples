import { root } from "@lynx-js/react";
import "./index.scss";

const RelativeId = () => {
  const containerStyle = {
    display: "relative" as const,
  };

  const view1Style = {
    relativeId: "1",
    backgroundColor: "lightgreen",
  };

  const view2Style = {
    relativeRightOf: "1",
    relativeId: "2",
    backgroundColor: "lightblue",
  };

  const view3Style = {
    relativeId: "3",
    relativeCenter: "vertical" as const,
    backgroundColor: "yellow",
  };

  const view4Style = {
    relativeRightOf: "3",
    relativeId: "4",
    relativeCenter: "vertical" as const,
    backgroundColor: "pink",
  };

  const textStyle = {
    fontSize: "50rpx" as const,
    fontWeight: "600" as const,
    textAlign: "center" as const,
  };

  return (
    <view className="container" style={containerStyle}>
      <view style={view1Style}>
        <text style={textStyle}>relative-id: 1</text>
      </view>
      <view style={view2Style}>
        <text style={textStyle}>relative-id: 2</text>
      </view>
      <view style={view3Style}>
        <text style={textStyle}>relative-id: 3</text>
      </view>
      <view style={view4Style}>
        <text style={textStyle}>relative-id: 4</text>
      </view>
    </view>
  );
};

root.render(<RelativeId />);
