import { root } from "@lynx-js/react";
import "./index.scss";

import image from "../../resource/lynx.png";

const Visibility = () => {
  const heightStyle = {
    height: "10px",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <image className="relative_image" src={image}></image>
        <view style={heightStyle}></view>
        <image className="relative_image visible" src={image}></image>
        <view style={heightStyle}></view>
        <image className="relative_image hidden" src={image}></image>
      </view>
    </scroll-view>
  );
};

root.render(<Visibility />);
