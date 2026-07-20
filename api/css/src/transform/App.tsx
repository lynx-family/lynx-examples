import { root } from "@lynx-js/react";
import "./index.scss";

const Transform = () => {
  const containerStyle = {
    flexDirection: "column" as const,
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  } as const;

  const boxBaseStyle = {
    width: "120px",
    height: "120px",
    backgroundColor: "#2196F3",
    margin: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as const;

  const textStyle = {
    color: "white",
    fontSize: "16px",
    textAlign: "center" as const,
  } as const;

  const rotateStyle = {
    ...boxBaseStyle,
    transform: "rotate(45deg)",
    backgroundColor: "#4CAF50",
  } as const;

  const scaleStyle = {
    ...boxBaseStyle,
    transform: "scale(1.2)",
    backgroundColor: "#FF9800",
  } as const;

  const translateStyle = {
    ...boxBaseStyle,
    transform: "translate(50px, 0)",
    backgroundColor: "#9C27B0",
  } as const;

  const multipleStyle = {
    ...boxBaseStyle,
    transform: "rotate(45deg) scale(0.8) translate(50px, 0)",
    backgroundColor: "#E91E63",
  } as const;

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view style={containerStyle}>
        <view style={rotateStyle}>
          <text style={textStyle}>Rotate 45°</text>
        </view>

        <view style={scaleStyle}>
          <text style={textStyle}>Scale 1.2x</text>
        </view>

        <view style={translateStyle}>
          <text style={textStyle}>Move Right 50px</text>
        </view>

        <view style={multipleStyle}>
          <text style={textStyle}>Combined Effects</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<Transform />);
