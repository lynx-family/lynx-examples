import { root } from "@lynx-js/react";
import "./index.scss";

const GridColumnEnd = () => {
  const titleStyle = {
    fontSize: "45rpx" as const,
    fontWeight: "900" as const,
    alignSelf: "center" as const,
    color: "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))" as const,
  };

  return (
    <>
      <text style={titleStyle}>grid-column-end: auto</text>
      <view className="container">
        <text className="item" style={{ backgroundColor: "rgb(255,53,26)", gridColumnEnd: "auto" }}>ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
      </view>

      <text style={titleStyle}>grid-column-end: 3</text>
      <view className="container">
        <text className="item" style={{ backgroundColor: "rgb(255,53,26)", gridColumnEnd: "3" }}>ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
      </view>

      <text style={titleStyle}>grid-column-end: -1</text>
      <view className="container">
        <text className="item" style={{ backgroundColor: "rgb(255,53,26)", gridColumnEnd: "-1" }}>ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
      </view>
    </>
  );
};

root.render(<GridColumnEnd />);
