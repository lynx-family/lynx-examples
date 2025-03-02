import { root } from "@lynx-js/react";
import "./index.scss";

const FlexShrink = () => {
  const shrink1Style = {
    backgroundColor: "rgba(0,255,0,0.2)" as const,
    flexShrink: 1,
  };

  const shrink2Style = {
    backgroundColor: "rgba(0,255,0,0.2)" as const,
    flexShrink: 2,
    marginLeft: "10px",
  };

  const item2Style = {
    backgroundColor: "rgba(0,0,255,0.2)" as const,
    flexShrink: 0,
    marginLeft: "10px",
    width: "30%",
  };

  const item3Style = {
    backgroundColor: "rgba(255,0,0,0.2)" as const,
    flexShrink: 0,
    marginLeft: "10px",
    width: "40%",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view className="container">
          <view className="height" style={shrink1Style}>
            <text>flex-shrink:1</text>
          </view>
          <view className="height" style={shrink2Style}>
            <text>flex-shrink:2</text>
          </view>
          <view className="height" style={item2Style}>
            <text>Item Two</text>
          </view>
          <view className="height" style={item3Style}>
            <text>Item Three</text>
          </view>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<FlexShrink />);
