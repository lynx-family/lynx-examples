import { root } from "@lynx-js/react";
import "./index.scss";
import lynxImage from "../../resource/bg_flower.gif";

const Filter = () => {
  const blurStyle = {
    filter: "blur(10px)",
  };

  const grayscaleStyle = {
    filter: "grayscale(100%)",
  };

  const brightnessStyle = {
    filter: "brightness(0.3)",
  };

  const contrastStyle = {
    filter: "contrast(0.5)",
  };

  const saturateStyle = {
    filter: "saturate(0.7)",
  };

  const imageStyle = {
    width: "100px",
    height: "140px",
  };

  return (
    <scroll-view className="w-100 h-100" scroll-orientation="vertical">
      <view style={blurStyle}>
        <image style={imageStyle} src={lynxImage} />
      </view>
      <view style={grayscaleStyle}>
        <image style={imageStyle} src={lynxImage} />
      </view>
      <view style={brightnessStyle}>
        <image style={imageStyle} src={lynxImage} />
      </view>
      <view style={contrastStyle}>
        <image style={imageStyle} src={lynxImage} />
      </view>
      <view style={saturateStyle}>
        <image style={imageStyle} src={lynxImage} />
      </view>
    </scroll-view>
  );
};

root.render(<Filter />);
