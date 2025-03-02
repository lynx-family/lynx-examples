import { root } from "@lynx-js/react";
import "./index.scss";

const GridTemplateColumn = () => {
  const titleStyle = {
    fontSize: "40rpx" as const,
    fontWeight: "700" as const,
    alignSelf: "center" as const,
    color: "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))" as const,
  };

  return (
    <>
      <text style={titleStyle}>grid-template-columns: 100px 100px;</text>
      <view className="container" style={{ gridTemplateColumns: "100px 100px" }}>
        <text className="item">ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
        <text className="item">FIVE</text>
      </view>

      <text style={titleStyle}>grid-template-columns: 1fr 100px;</text>
      <view className="container" style={{ gridTemplateColumns: "1fr 100px" }}>
        <text className="item">ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
        <text className="item">FIVE</text>
      </view>

      <text style={titleStyle}>grid-template-columns: 1fr 2fr;</text>
      <view className="container" style={{ gridTemplateColumns: "1fr 2fr" }}>
        <text className="item">ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
        <text className="item">FIVE</text>
      </view>
    </>
  );
};

root.render(<GridTemplateColumn />);
