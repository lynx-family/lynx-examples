import { root } from "@lynx-js/react";
import "./index.scss";

const Background = () => {
  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const container1Style = {
    backgroundOrigin: "content-box" as const,
    backgroundPosition: "left top" as const,
    backgroundRepeat: "no-repeat" as const,
  };

  const container2Style = {
    backgroundOrigin: "padding-box" as const,
    backgroundPosition: "50% 50%",
    backgroundRepeat: "repeat-x" as const,
  };

  const container3Style = {
    backgroundOrigin: "border-box" as const,
    backgroundPosition: "30px 40px",
    backgroundRepeat: "repeat" as const,
  };

  const container4Style = {
    backgroundOrigin: "content-box,border-box" as const,
    backgroundPosition: "50% 40px, right bottom",
    backgroundRepeat: "repeat-y,repeat-x" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area" style={fixedAreaStyle}>
        <view className="container image1" style={container1Style}></view>
        <view className="container image1" style={container2Style}></view>
        <view className="container image1" style={container3Style}></view>
        <view className="container image2" style={container4Style}></view>
      </view>
    </scroll-view>
  );
};

root.render(<Background />);
