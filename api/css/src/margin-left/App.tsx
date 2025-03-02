import { root } from "@lynx-js/react";
import "./index.scss";

const MarginLeft = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view className="con">
        <text
          className="intro"
          style={{
            marginLeft: "10px",
            marginRight: "30px",
          }}
        >
          1
        </text>
        <text className="intro2">
          2
        </text>
      </view>
    </scroll-view>
  );
};

root.render(<MarginLeft />);
