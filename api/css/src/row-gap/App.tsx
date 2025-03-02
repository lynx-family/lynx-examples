import { root } from "@lynx-js/react";
import "./index.scss";

const RowGap = () => {
  const flexContainerStyle = {
    display: "flex" as const,
    flexWrap: "wrap" as const,
    rowGap: "15px",
    margin: "10px",
    border: "1px solid #000",
    borderRadius: "4px",
    marginBottom: "100rpx" as const,
  };

  const gridContainerStyle = {
    display: "grid" as const,
    rowGap: "10px",
    gridTemplateColumns: "1fr 1fr 1fr",
    margin: "10px",
    padding: "5px",
    border: "1px solid #000",
    borderRadius: "4px",
  };

  const titleStyle = {
    fontSize: "50rpx" as const,
    alignSelf: "center" as const,
    fontWeight: "900" as const,
    color: "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))" as const,
  };

  return (
    <>
      <text style={titleStyle}>using row-gap in flex layout</text>
      <view style={flexContainerStyle}>
        <text className="item">ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
        <text className="item">FIVE</text>
        <text className="item">SIX</text>
        <text className="item">SEVEN</text>
        <text className="item">EIGHT</text>
        <text className="item">NINE</text>
        <text className="item">TEN</text>
      </view>

      <text style={titleStyle}>using row-gap in grid layout</text>
      <view style={gridContainerStyle}>
        <text className="item2">ONE</text>
        <text className="item2">TWO</text>
        <text className="item2">THREE</text>
        <text className="item2">FOUR</text>
        <text className="item2">FIVE</text>
        <text className="item2">SIX</text>
        <text className="item2">SEVEN</text>
        <text className="item2">EIGHT</text>
        <text className="item2">NINE</text>
        <text className="item2">TEN</text>
      </view>
    </>
  );
};

root.render(<RowGap />);
