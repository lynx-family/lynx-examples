import { root } from "@lynx-js/react";
import "./index.scss";

const Margin = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view className="con">
        <text className="intro" style={{ margin: "20px" }}>
          margin: 20px; All sides
        </text>
      </view>

      <view className="con">
        <text className="intro" style={{ margin: "20px 5px" }}>
          margin: 20px 5px; Top/Bottom | Left/Right
        </text>
      </view>

      <view className="con">
        <text className="intro" style={{ margin: "20px 15px 10px" }}>
          margin: 20px 15px 10px; Top | Left/Right | Bottom
        </text>
      </view>

      <view className="con">
        <text className="intro" style={{ margin: "20px 15px 10px 5px" }}>
          margin: 20px 15px 10px 5px; Top | Right | Bottom | Left
        </text>
      </view>
    </scroll-view>
  );
};

root.render(<Margin />);
