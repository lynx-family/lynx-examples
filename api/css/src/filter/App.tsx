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

  const imageStyle = {
    width: "200px",
    height: "350px",
  };

  return (
    <scroll-view className="w-100 h-100" scroll-orientation="vertical">
      <view style={blurStyle}>
        <image style={imageStyle} src={lynxImage} />
      </view>
      <view style={grayscaleStyle}>
        <image style={imageStyle} src={lynxImage} />
      </view>
    </scroll-view>
  );
};

root.render(<Filter />);
