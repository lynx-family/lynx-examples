import { root } from "@lynx-js/react";
import "./index.scss";

const FontSize = () => {
  const fontStyle = {
    fontSize: "30px",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <text>hello lynx, default font size</text>
        <text style={fontStyle}>hello lynx, font size 30px</text>
      </view>
    </scroll-view>
  );
};

root.render(<FontSize />);
