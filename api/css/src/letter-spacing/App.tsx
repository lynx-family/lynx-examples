import { root } from "@lynx-js/react";
import "./index.scss";

const LetterSpacing = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const headerStyle = {
    backgroundColor: "#ccc",
    marginTop: "10px",
  };

  const text1Style = {
    fontSize: "16px",
    letterSpacing: "0px",
  };

  const text2Style = {
    fontSize: "16px",
    letterSpacing: "1px",
  };

  const text3Style = {
    fontSize: "16px",
    letterSpacing: "3rpx",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view style={containerStyle}>
          <text style={headerStyle}>Letter Spacing Test</text>
          <text style={text1Style}>letter-spacing:0px</text>
          <text style={text2Style}>letter-spacing:1px</text>
          <text style={text3Style}>letter-spacing:3rpx</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<LetterSpacing />);
