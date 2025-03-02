import { root } from "@lynx-js/react";
import "./index.scss";

const MarginRight = () => {
  const scrollViewStyle = {
    height: "100%",
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

root.render(<MarginRight />);
