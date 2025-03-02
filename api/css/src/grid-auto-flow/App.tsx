import { root } from "@lynx-js/react";
import "./index.scss";

const GridAutoFlow = () => {
  const titleStyle = {
    fontSize: "45rpx" as const,
    fontWeight: "900" as const,
    alignSelf: "center" as const,
    color: "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))" as const,
  };

  return (
    <>
      <text style={titleStyle}>grid-auto-flow: row</text>
      <view className="container" style={{ gridAutoFlow: "row" }}>
        <text className="item" style={{ gridColumnStart: "span 2" }}>ONE</text>
        <text className="item" style={{ gridColumnStart: "span 2" }}>TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
        <text className="item">FIVE</text>
      </view>

      <text style={titleStyle}>grid-auto-flow: column</text>
      <view className="container" style={{ gridAutoFlow: "column" }}>
        <text className="item" style={{ gridColumnStart: "span 2" }}>ONE</text>
        <text className="item" style={{ gridColumnStart: "span 2" }}>TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
        <text className="item">FIVE</text>
      </view>
    </>
  );
};

root.render(<GridAutoFlow />);
