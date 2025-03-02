import { root } from "@lynx-js/react";
import "./index.scss";

const AspectRatio = () => {
  const textStyle = {
    width: "50px",
    aspectRatio: "1/4",
    backgroundColor: "red",
  };

  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area" style={fixedAreaStyle}>
        <text style={textStyle}>test</text>
      </view>
    </scroll-view>
  );
};

root.render(<AspectRatio />);
