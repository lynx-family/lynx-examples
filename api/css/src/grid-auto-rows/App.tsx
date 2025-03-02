import { root } from "@lynx-js/react";
import "./index.scss";

const GridAutoRows = () => {
  const Container1Style = {
    display: "grid" as const,
    gap: "10px",
    gridAutoRows: "50px",
    gridTemplateColumns: "1fr 1fr",
    margin: "10px",
    padding: "5px",
    border: "1px solid #000",
    borderRadius: "4px",
    height: "300px",
  };

  const Container2Style = {
    display: "grid" as const,
    gap: "10px",
    gridAutoRows: "1fr",
    gridTemplateColumns: "1fr 1fr",
    margin: "10px",
    padding: "5px",
    border: "1px solid #000",
    borderRadius: "4px",
    height: "300px",
  };

  const titleStyle = {
    fontSize: "45rpx" as const,
    fontWeight: "900" as const,
    alignSelf: "center" as const,
    color: "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))" as const,
  };

  return (
    <>
      <text style={titleStyle}>grid-auto-rows: 50px</text>
      <view style={Container1Style}>
        <text className="item">ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
        <text className="item">FIVE</text>
      </view>

      <text style={titleStyle}>grid-auto-rows: 1fr</text>
      <view style={Container2Style}>
        <text className="item">ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
        <text className="item">FIVE</text>
      </view>
    </>
  );
};

root.render(<GridAutoRows />);
