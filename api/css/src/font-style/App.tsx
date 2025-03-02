import { root } from "@lynx-js/react";
import "./index.scss";

const FontStyle = () => {
  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <text>
          font-style: 无
        </text>

        <text style={{ fontStyle: "normal" }}>
          font-style: normal 普通
        </text>

        <text style={{ fontStyle: "italic" }}>
          font-style: italic 斜体
        </text>

        <text style={{ fontStyle: "oblique" }}>
          font-style: oblique 倾斜
        </text>
      </view>
    </scroll-view>
  );
};

root.render(<FontStyle />);
