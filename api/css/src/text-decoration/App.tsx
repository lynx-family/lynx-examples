import { root } from "@lynx-js/react";
import "./index.scss";

const TextDecoration = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const headerStyle = {
    backgroundColor: "#ccc",
    marginTop: "10px",
  };

  const noneStyle = {
    textDecoration: "none",
  };

  const underlineStyle = {
    textDecoration: "underline",
  };

  const lineThroughStyle = {
    textDecoration: "line-through",
  };

  const redSolidStyle = {
    textDecoration: "underline line-through red solid",
  };

  const greenDottedStyle = {
    textDecoration: "underline line-through green dotted",
  };

  const blueDashedStyle = {
    textDecoration: "underline line-through blue dashed",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view style={containerStyle}>
          <text style={headerStyle}>text-decoration</text>
          <text style={noneStyle}>None</text>
          <text style={underlineStyle}>Underline</text>
          <text style={lineThroughStyle}>Line Through</text>
          <text style={redSolidStyle}>Red Solid Line</text>
          <text style={greenDottedStyle}>Green Dotted Line</text>
          <text style={blueDashedStyle}>Blue Dashed Line</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<TextDecoration />);
