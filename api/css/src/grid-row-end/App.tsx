import { root } from "@lynx-js/react";
import "./index.scss";

const GridRowEnd = () => {
  const titleStyle = {
    fontSize: "45rpx" as const,
    fontWeight: "900" as const,
    alignSelf: "center" as const,
    color: "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))" as const,
  };

  return (
    <>
      <text style={titleStyle}>grid-row-end: auto</text>
      <view className="container">
        <text className="item" style={{ backgroundColor: "rgb(255,53,26)", gridRowEnd: "auto" }}>ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
      </view>

      <text style={titleStyle}>grid-row-end: span 2</text>
      <view className="container">
        <text className="item" style={{ backgroundColor: "rgb(255,53,26)", gridRowEnd: "span 2" }}>ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
      </view>

      <text style={titleStyle}>grid-row-end: -1</text>
      <view className="container">
        <text className="item" style={{ backgroundColor: "rgb(255,53,26)", gridRowEnd: "-1" }}>ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
      </view>
    </>
  );
};

root.render(<GridRowEnd />);
