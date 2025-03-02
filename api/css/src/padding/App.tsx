import { root } from "@lynx-js/react";
import "./index.scss";

const Padding = () => {
  const scrollViewStyle = {
    flexDirection: "column" as const,
    width: "100%",
    height: "100%",
  };

  const firstBoxStyle = {
    padding: "20px",
  };

  const secondBoxStyle = {
    padding: "20px 5px",
  };

  const thirdBoxStyle = {
    padding: "20px 15px 10px",
  };

  const fourthBoxStyle = {
    padding: "20px 15px 10px 5px",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view className="con">
        <view className="intro" style={firstBoxStyle}>
          <text className="intro2">padding: 20px; All sides</text>
        </view>
      </view>

      <view className="con">
        <view className="intro" style={secondBoxStyle}>
          <text className="intro2">padding: 20px 5px; Top/Bottom | Left/Right</text>
        </view>
      </view>

      <view className="con">
        <view className="intro" style={thirdBoxStyle}>
          <text className="intro2">padding: 20px 15px 10px; Top | Left/Right | Bottom</text>
        </view>
      </view>

      <view className="con">
        <view className="intro" style={fourthBoxStyle}>
          <text className="intro2">padding: 20px 15px 10px 5px; Top | Right | Bottom | Left</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<Padding />);
