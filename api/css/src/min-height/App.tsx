import { root } from "@lynx-js/react";
import "./index.scss";

const MinHeight = () => {
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
    height: "0px",
    backgroundColor: "yellow",
    width: "100px",
    minHeight: "300px",
  };

  const thirdBoxStyle = {
    height: "0px",
    backgroundColor: "blue",
    width: "100px",
    minHeight: "300px",
    maxHeight: "200px",
  };

  return (
    <view className="intro" style={containerStyle}>
      <view style={firstBoxStyle}>
        <text>height: 300px</text>
      </view>
      <view style={secondBoxStyle}>
        <text>height: 0px; min-height: 300px</text>
      </view>
      <view style={thirdBoxStyle}>
        <text>height: 0px; min-height: 300px; max-height: 200px</text>
      </view>
    </view>
  );
};

root.render(<MinHeight />);
