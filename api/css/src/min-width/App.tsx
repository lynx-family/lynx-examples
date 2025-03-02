import { root } from "@lynx-js/react";
import "./index.scss";

const MinWidth = () => {
  const containerStyle = {
    display: "linear" as const,
  };

  const firstBoxStyle = {
    width: "300px",
    backgroundColor: "green",
  };

  const secondBoxStyle = {
    width: "0px",
    backgroundColor: "yellow",
    minWidth: "300px",
  };

  const thirdBoxStyle = {
    width: "0px",
    backgroundColor: "blue",
    minWidth: "300px",
    maxWidth: "200px",
  };

  return (
    <view className="intro" style={containerStyle}>
      <view style={firstBoxStyle}>
        <text>width: 300px</text>
      </view>
      <view style={secondBoxStyle}>
        <text>width: 0px; min-width: 300px</text>
      </view>
      <view style={thirdBoxStyle}>
        <text>width: 0px; min-width: 300px; max-width: 200px</text>
      </view>
    </view>
  );
};

root.render(<MinWidth />);
