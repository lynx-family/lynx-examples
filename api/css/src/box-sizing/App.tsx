import { root } from "@lynx-js/react";
import "./index.scss";

const BoxSizing = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
    background: "white",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view className="fixed_area" style={fixedAreaStyle}>
        <view className="div1">
          <text>FL</text>
        </view>
        <view className="div2">
          <text>FR</text>
        </view>

        <view className="div3">
          <text>BL</text>
        </view>
        <view className="div4">
          <text>BR</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<BoxSizing />);
