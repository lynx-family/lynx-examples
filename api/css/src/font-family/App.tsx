import { root } from "@lynx-js/react";
import "./index.scss";

const FontFamily = () => {
  const fontStyle = {
    fontFamily: "icon-font",
    fontSize: "20px",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view style={{ flexDirection: "column" }} className="container">
        <text style={fontStyle}>
          {"base64编码的字体\n&#xe61c;&#xe61d;&#xe61e;&#xe61f;&#xe620;&#xe621;&#xe622;&#xe623;&#xe624;"}
        </text>
      </view>
    </scroll-view>
  );
};

root.render(<FontFamily />);
