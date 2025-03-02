import { root } from "@lynx-js/react";
import "./index.scss";

const FlexGrow = () => {
  const grow1Style = {
    backgroundColor: "rgba(0,255,0,0.2)" as const,
    flexGrow: 1,
  };

  const item2Style = {
    backgroundColor: "rgba(0,0,255,0.2)" as const,
    flexGrow: 0,
    marginLeft: "10px",
  };

  const item3Style = {
    backgroundColor: "rgba(255,0,0,0.2)" as const,
    flexGrow: 0,
    marginLeft: "10px",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view className="container">
          <view className="height" style={grow1Style}>
            <text>flex-grow:1</text>
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

root.render(<FlexGrow />);
