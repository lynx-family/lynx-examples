import { root } from "@lynx-js/react";
import "./index.scss";

const BackgroundPosition = () => {
  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const containerStyles = {
    style1: {
      backgroundOrigin: "content-box" as const,
      backgroundPosition: "left top" as const,
    },
    style2: {
      backgroundOrigin: "padding-box" as const,
      backgroundPosition: "50% 50%",
    },
    style3: {
      backgroundOrigin: "border-box" as const,
      backgroundPosition: "30px 40px",
    },
    style4: {
      backgroundOrigin: "content-box,border-box" as const,
      backgroundPosition: "50% 40px, right bottom",
    },
    style5: {
      backgroundOrigin: "padding-box" as const,
      backgroundSize: "auto 100%",
      backgroundRepeat: "no-repeat" as const,
      backgroundPosition: "-13px -20px",
    },
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area" style={fixedAreaStyle}>
        <view className="container image1" style={containerStyles.style1}></view>
        <view className="container image1" style={containerStyles.style2}></view>
        <view className="container image1" style={containerStyles.style3}></view>
        <view className="container image2" style={containerStyles.style4}></view>
        <view className="container image1" style={containerStyles.style5}></view>
      </view>
    </scroll-view>
  );
};

root.render(<BackgroundPosition />);
