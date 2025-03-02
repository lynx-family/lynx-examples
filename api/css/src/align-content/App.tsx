import { root } from "@lynx-js/react";
import "./index.scss";

const AlignContent = () => {
  const colorBlockStyle = (color: string) => ({
    width: "100px",
    height: "50px",
    backgroundColor: color,
  });

  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area" style={fixedAreaStyle}>
        <text>align-content:stretch;</text>
        <view className="container1">
          <view style={colorBlockStyle("red")} />
          <view style={colorBlockStyle("yellow")} />
          <view style={colorBlockStyle("green")} />
          <view style={colorBlockStyle("blue")} />
        </view>
        <text>align-content:center;</text>
        <view className="container2">
          <view style={colorBlockStyle("red")} />
          <view style={colorBlockStyle("yellow")} />
          <view style={colorBlockStyle("green")} />
          <view style={colorBlockStyle("blue")} />
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<AlignContent />);
