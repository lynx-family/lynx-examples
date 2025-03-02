import { root } from "@lynx-js/react";
import "./index.scss";

const AlignSelf = () => {
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
        <view style={{ width: "100%", height: "100%", flexDirection: "column" }}>
          <text className="title">align-self: stretch;</text>
          <view style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <text style={itemStyle}>X</text>
            <text style={{ ...itemStyle, alignSelf: "stretch" }}>X</text>
            <text style={itemStyle}>X</text>
          </view>

          <text className="title">align-self: center;</text>
          <view style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <text style={itemStyle}>X</text>
            <text style={{ ...itemStyle, alignSelf: "center" }}>X</text>
            <text style={itemStyle}>X</text>
          </view>

          <text className="title">align-self: flex-start;</text>
          <view style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <text style={itemStyle}>X</text>
            <text style={{ ...itemStyle, alignSelf: "flex-start" }}>X</text>
            <text style={itemStyle}>X</text>
          </view>

          <text className="title">align-self: flex-end;</text>
          <view style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <text style={itemStyle}>X</text>
            <text style={{ ...itemStyle, alignSelf: "flex-end" }}>X</text>
            <text style={itemStyle}>X</text>
          </view>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<AlignSelf />);
