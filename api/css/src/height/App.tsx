import { root } from "@lynx-js/react";
import "./index.scss";

const Height = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view style={{ display: "linear", linearOrientation: "horizontal" }}>
        <text
          style={{
            height: "100px",
            border: "20px solid orange",
          }}
        >
          border-box
        </text>

        <text
          style={{
            height: "100px",
            border: "20px solid orange",
            boxSizing: "content-box",
          }}
        >
          content-box
        </text>
      </view>
    </scroll-view>
  );
};

root.render(<Height />);
