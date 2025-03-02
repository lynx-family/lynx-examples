import { root } from "@lynx-js/react";
import "./index.scss";

const Width = () => {
  const containerStyle = {
    display: "linear" as const,
    linearOrientation: "vertical" as const,
  };

  const borderBoxStyle = {
    width: "100px",
    border: "20px solid orange",
  };

  const contentBoxStyle = {
    width: "100px",
    border: "20px solid orange",
    boxSizing: "content-box" as const,
  };

  return (
    <view style={containerStyle}>
      <text style={borderBoxStyle}>
        border-box
      </text>
      <text style={contentBoxStyle}>
        content-box
      </text>
    </view>
  );
};

root.render(<Width />);
