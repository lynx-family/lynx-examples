import { root } from "@lynx-js/react";
import "./index.scss";

import image from "../../resource/lynx.png";

const Opacity = () => {
  const heightStyle = {
    height: "10px",
  };

  const opacity1Style = {
    opacity: 1,
  };

  const opacity05Style = {
    opacity: 0.5,
  };

  const opacity0Style = {
    opacity: 0,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <image className="relative_image" src={image}></image>
        <view style={heightStyle}></view>
        <image className="relative_image" style={opacity1Style} src={image}></image>
        <view style={heightStyle}></view>
        <image className="relative_image" style={opacity05Style} src={image}></image>
        <view style={heightStyle}></view>
        <image className="relative_image" style={opacity0Style} src={image}></image>
      </view>
    </scroll-view>
  );
};

root.render(<Opacity />);
