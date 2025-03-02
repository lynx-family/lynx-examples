import { root } from "@lynx-js/react";
import "./index.scss";

const MaxHeight = () => {
  const containerStyle = {
    display: "linear" as const,
    linearDirection: "row" as const,
  };

  const firstBoxStyle = {
    height: "300px",
    backgroundColor: "green",
    width: "100px",
  };

  const secondBoxStyle = {
    height: "400px",
    backgroundColor: "yellow",
    width: "100px",
    maxHeight: "300px",
  };

  const thirdBoxStyle = {
    height: "300px",
    backgroundColor: "blue",
    width: "100px",
    minHeight: "400px",
    maxHeight: "200px",
  };

  return (
    <view className="intro" style={containerStyle}>
      <view style={firstBoxStyle}>
        <text>height: 300px</text>
      </view>
      <view style={secondBoxStyle}>
        <text>height: 400px; max-height: 300px</text>
      </view>
      <view style={thirdBoxStyle}>
        <text>height: 300px; min-height: 400px; max-height: 200px</text>
      </view>
    </view>
  );
};

root.render(<MaxHeight />);
