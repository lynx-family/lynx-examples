import { root } from "@lynx-js/react";
import "./index.scss";

const FlexBasis = () => {
  const itemStyle = {
    marginLeft: "5px",
    backgroundColor: "rgba(0,0,255,0.2)" as const,
    flexGrow: 1,
  };

  const autoStyle = {
    flexBasis: "auto" as const,
    backgroundColor: "rgba(255,0,200,0.2)" as const,
    flexGrow: 1,
  };

  const zeroPxStyle = {
    flexBasis: "0px",
    backgroundColor: "rgba(255,0,200,0.2)" as const,
    flexGrow: 1,
  };

  const px300Style = {
    flexBasis: "300px",
    backgroundColor: "rgba(255,0,200,0.2)" as const,
    flexGrow: 1,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view className="container">
          <view style={autoStyle}>
            <text>flex-basis:auto</text>
          </view>
          <view style={itemStyle}>
            <text>Item Two</text>
          </view>
          <view style={itemStyle}>
            <text>Item Three</text>
          </view>
        </view>

        <view className="container">
          <view style={zeroPxStyle}>
            <text>flex-basis:0px</text>
          </view>
          <view style={itemStyle}>
            <text>Item Two</text>
          </view>
          <view style={itemStyle}>
            <text>Item Three</text>
          </view>
        </view>

        <view className="container">
          <view style={px300Style}>
            <text>flex-basis:300px</text>
          </view>
          <view style={itemStyle}>
            <text>Item Two</text>
          </view>
          <view style={itemStyle}>
            <text>Item Three</text>
          </view>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<FlexBasis />);
