import { root } from "@lynx-js/react";
import "./index.scss";

const MarginTop = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view className="con">
        <text
          className="intro"
          style={{
            marginTop: "10px",
            marginBottom: "30px",
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

root.render(<MarginTop />);
