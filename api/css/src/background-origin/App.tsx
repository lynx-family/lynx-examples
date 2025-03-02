import { root } from "@lynx-js/react";
import "./index.scss";

const BackgroundOrigin = () => {
  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const containerStyles = {
    style1: {
      backgroundOrigin: "content-box" as const,
    },
    style2: {
      backgroundOrigin: "padding-box" as const,
    },
    style3: {
      backgroundOrigin: "border-box" as const,
    },
    style4: {
      backgroundOrigin: "content-box,border-box" as const,
    },
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area" style={fixedAreaStyle}>
        <view className="container image1" style={containerStyles.style1}></view>
        <view className="container image1" style={containerStyles.style2}></view>
        <view className="container image1" style={containerStyles.style3}></view>
        <view className="container image2" style={containerStyles.style4}></view>
      </view>
    </scroll-view>
  );
};

root.render(<BackgroundOrigin />);
