import { root } from "@lynx-js/react";
import "./index.scss";

const Left = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view
        style={{
          width: "210px",
          height: "210px",
          border: "5px",
          borderColor: "black",
        }}
      >
        <view
          style={{
            position: "absolute",
            left: "80px",
            width: "50px",
            height: "50px",
            backgroundColor: "red",
          }}
        >
        </view>
        <view
          style={{
            position: "fixed",
            left: "155px",
            width: "50px",
            height: "50px",
            backgroundColor: "green",
          }}
        >
        </view>
        <view
          style={{
            position: "relative",
            left: "155px",
            width: "50px",
            height: "50px",
            backgroundColor: "yellow",
          }}
        >
        </view>
        <view
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "blue",
          }}
        >
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<Left />);
