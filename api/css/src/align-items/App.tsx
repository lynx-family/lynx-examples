import { root } from "@lynx-js/react";
import "./index.scss";

const AlignItems = () => {
  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const itemStyle = {
    width: "50px",
    height: "50px",
    margin: "5px",
    backgroundColor: "#4e98f4",
    color: "#ffffff",
    textAlign: "center" as const,
    lineHeight: "50px",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area" style={fixedAreaStyle}>
        <text className="title">align-items: stretch;</text>
        <view style={{ display: "flex", flexDirection: "column", alignItems: "stretch" }}>
          <text style={itemStyle}>X</text>
          <text style={itemStyle}>X</text>
          <text style={itemStyle}>X</text>
        </view>

        <text className="title">align-items: center;</text>
        <view style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <text style={itemStyle}>X</text>
          <text style={itemStyle}>X</text>
          <text style={itemStyle}>X</text>
        </view>

        <text className="title">align-items: flex-start;</text>
        <view style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <text style={itemStyle}>X</text>
          <text style={itemStyle}>X</text>
          <text style={itemStyle}>X</text>
        </view>

        <text className="title">align-items: flex-end;</text>
        <view style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <text style={itemStyle}>X</text>
          <text style={itemStyle}>X</text>
          <text style={itemStyle}>XS</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<AlignItems />);
