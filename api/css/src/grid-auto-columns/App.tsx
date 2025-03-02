import { root } from "@lynx-js/react";
import "./index.scss";

const GridAutoColumns = () => {
  const Container1Style = {
    display: "grid" as const,
    gap: "10px",
    gridAutoColumns: "100px",
    margin: "10px",
    padding: "5px",
    border: "1px solid #000",
    borderRadius: "4px",
  };

  const Container2Style = {
    display: "grid" as const,
    gap: "10px",
    gridAutoColumns: "1fr",
    margin: "10px",
    padding: "5px",
    border: "1px solid #000",
    borderRadius: "4px",
  };

  const item1Style = {
    gridColumnStart: "1",
    gridColumnEnd: "3",
  };

  const item2Style = {
    gridColumnStart: "2",
  };

  const titleStyle = {
    fontSize: "50rpx" as const,
    alignSelf: "center" as const,
    fontWeight: "900" as const,
    color: "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))" as const,
  };

  return (
    <>
      <text style={titleStyle}>grid-auto-columns: 100px</text>
      <view style={Container1Style}>
        <text className="item" style={item1Style}>ONE</text>
        <text className="item" style={item2Style}>TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
        <text className="item">FIVE</text>
      </view>

      <text style={titleStyle}>grid-auto-columns: 1fr</text>
      <view style={Container2Style}>
        <text className="item" style={item1Style}>ONE</text>
        <text className="item" style={item2Style}>TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
        <text className="item">FIVE</text>
      </view>
    </>
  );
};

root.render(<GridAutoColumns />);
