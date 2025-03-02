import { root } from "@lynx-js/react";
import "./index.scss";

const GridRowStart = () => {
  const titleStyle = {
    fontSize: "45rpx" as const,
    fontWeight: "900" as const,
    alignSelf: "center" as const,
    color: "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))" as const,
  };

  return (
    <>
      <text style={titleStyle}>grid-row-start: auto</text>
      <view className="container">
        <text className="item" style={{ backgroundColor: "rgb(255,53,26)", gridRowStart: "auto" }}>ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
      </view>

      <text style={titleStyle}>grid-row-start: 2</text>
      <view className="container">
        <text className="item" style={{ backgroundColor: "rgb(255,53,26)", gridRowStart: "2" }}>ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
      </view>

      <text style={titleStyle}>grid-row-start: -2</text>
      <view className="container">
        <text className="item" style={{ backgroundColor: "rgb(255,53,26)", gridRowStart: "-2" }}>ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
      </view>
    </>
  );
};

root.render(<GridRowStart />);
