import { root } from "@lynx-js/react";
import "./index.scss";

const MaxWidth = () => {
  const containerStyle = {
    display: "linear" as const,
  };

  const firstBoxStyle = {
    width: "300px",
    backgroundColor: "green",
  };

  const secondBoxStyle = {
    width: "300px",
    backgroundColor: "yellow",
    maxWidth: "300px",
  };

  const thirdBoxStyle = {
    width: "300px",
    backgroundColor: "blue",
    minWidth: "400px",
    maxWidth: "200px",
  };

  return (
    <view className="intro" style={containerStyle}>
      <view style={firstBoxStyle}>
        <text>width: 300px</text>
      </view>
      <view style={secondBoxStyle}>
        <text>width: 400px; max-width: 300px</text>
      </view>
      <view style={thirdBoxStyle}>
        <text>width: 300px; min-width: 400px; max-width: 200px</text>
      </view>
    </view>
  );
};

root.render(<MaxWidth />);
