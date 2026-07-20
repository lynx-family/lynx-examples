import { root } from "@lynx-js/react";
import "./index.scss";

import Flower from "../../resource/bg_flower.gif?inline";
import LynxIcon from "../../resource/lynx.png?inline";

const BackgroundImage = () => {
  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const containerStyles = {
    image1: {
      backgroundImage: `url(${Flower})`,
    },
    image2: {
      backgroundImage: `url(${LynxIcon}), url(${Flower})`,
    },
    gradient1: {
      width: "50%",
      backgroundImage: "linear-gradient(black, green)",
    },
    gradient2: {
      width: "50%",
      backgroundImage: "linear-gradient(green 40%, yellow 30%, blue 70%)",
    },
    gradient3: {
      width: "50%",
      backgroundImage: "linear-gradient(green 40%, yellow 40%, blue 70%)",
    },
    conic: {
      width: "50%",
      height: "100%",
      backgroundImage: "conic-gradient(from 180deg at 50% 50%, red, blue, red)",
    },
    radial1: {
      width: "50%",
      backgroundImage: "radial-gradient(red, green)",
    },
    radial2: {
      width: "50%",
      backgroundImage: "radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%)",
    },
    radial3: {
      width: "100%",
      height: "100%",
      backgroundImage: "radial-gradient(ellipse closest-side at 0% 0%, #eabf8a 0%, #c5a35f 100%)",
    },
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area" style={fixedAreaStyle}>
        <view className="container" style={containerStyles.image1}></view>
        <view className="container" style={containerStyles.image2}></view>
        <view className="container">
          <view style={containerStyles.gradient1}></view>
          <view style={containerStyles.conic}></view>
        </view>
        <view className="container">
          <view style={containerStyles.gradient2} />
          <view style={containerStyles.gradient3} />
        </view>
        <view className="container">
          <view style={containerStyles.radial1} />
          <view style={containerStyles.radial2} />
        </view>
        <view className="container">
          <view style={containerStyles.radial3} />
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<BackgroundImage />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
