import { root } from "@lynx-js/react";
import "./index.scss";

const BackgroundSize = () => {
  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const containerStyles = {
    style1: {
      backgroundOrigin: "content-box" as const,
      backgroundPosition: "left top" as const,
      backgroundRepeat: "no-repeat" as const,
      backgroundSize: "50%",
    },
    style2: {
      backgroundOrigin: "padding-box" as const,
      backgroundPosition: "50% 50%",
      backgroundRepeat: "repeat-x" as const,
      backgroundSize: "40px, 30px",
    },
    style3: {
      backgroundOrigin: "border-box" as const,
      backgroundPosition: "50% 50%",
      backgroundRepeat: "repeat" as const,
      backgroundSize: "cover" as const,
    },
    style4: {
      backgroundOrigin: "content-box,border-box" as const,
      backgroundPosition: "top left, right bottom",
      backgroundRepeat: "repeat-y,repeat-x" as const,
      backgroundSize: "50% 50%, contain",
    },
    style5: {
      backgroundOrigin: "content-box" as const,
      backgroundPosition: "left top" as const,
      backgroundRepeat: "no-repeat" as const,
      backgroundSize: "auto 200%",
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

root.render(<BackgroundSize />);
