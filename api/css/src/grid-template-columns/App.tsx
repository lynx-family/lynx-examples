import { root } from "@lynx-js/react";
import "./index.scss";

const GridTemplateColumn = () => {
  const titleStyle = {
    fontSize: "17px" as const,
    fontWeight: "600" as const,
    alignSelf: "center" as const,
    color: "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))" as const,
  };

  return (
    <>
      <text style={titleStyle}>grid-template-columns: 100px 200px</text>
      <view className="container" style={{ gridTemplateColumns: "100px 200px" }}>
        <text className="item">ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
      </view>

      <text style={titleStyle}>grid-template-columns: 1fr 100px</text>
      <view className="container" style={{ gridTemplateColumns: "1fr 100px" }}>
        <text className="item">ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
      </view>

      <text style={titleStyle}>grid-template-columns: 1fr 2fr</text>
      <view className="container" style={{ gridTemplateColumns: "1fr 2fr" }}>
        <text className="item">ONE</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
        <text className="item">FOUR</text>
      </view>

      <text style={titleStyle}>grid-template-columns:</text>
      <text style={titleStyle}>20% max-content minmax(50px, max-content)</text>
      <view
        className="container"
        style={{
          gridTemplateColumns: "20% max-content minmax(50px, max-content)",
          gridTemplateRows: "auto",
          height: "max-content",
        }}
      >
        <text className="item">20%</text>
        <text className="item" style={{ fontSize: "35px" }}>No Wrap</text>
        <text className="item">min-width:50px, will fit the container</text>
      </view>
    </>
  );
};

root.render(<GridTemplateColumn />);
