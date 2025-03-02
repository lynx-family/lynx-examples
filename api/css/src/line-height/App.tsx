import { root } from "@lynx-js/react";
import "./index.scss";

const LineHeight = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const text1Style = {
    lineHeight: "30px",
  };

  const text2Style = {
    fontSize: "16px",
    lineHeight: "3",
  };

  const text3Style = {
    fontSize: "16px",
    lineHeight: "50px",
  };

  const inlineText1Style = {
    fontSize: "30px",
  };

  const inlineText2Style = {
    fontSize: "40px",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view style={containerStyle}>
          <text className="item" style={text1Style}>XX{"\n"}XX{"\n"}XX</text>
          <text className="item" style={text2Style}>XX{"\n"}XX{"\n"}XX</text>
          <text className="item" style={text3Style}>
            XX
            <text style={inlineText1Style}>XX</text>
            <text style={inlineText2Style}>XX</text>
          </text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<LineHeight />);
