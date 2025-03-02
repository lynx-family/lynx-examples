import { root } from "@lynx-js/react";
import "./index.scss";

const FlexFlow = () => {
  const flowStyle = {
    flexFlow: "row wrap" as const,
  };

  const flow2Style = {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
  };

  const item1Style = {
    backgroundColor: "rgba(0,255,0,0.2)" as const,
    flexShrink: 0,
    width: "50%",
  };

  const item2Style = {
    backgroundColor: "rgba(0,0,255,0.2)" as const,
    flexShrink: 0,
    marginLeft: "10px",
  };

  const item3Style = {
    backgroundColor: "rgba(255,0,0,0.2)" as const,
    flexShrink: 0,
    marginLeft: "10px",
  };

  const item4Style = {
    backgroundColor: "rgba(255,0,0,0.2)" as const,
    flexShrink: 0,
    marginLeft: "10px",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <text>flex-flow: row wrap</text>
      <view className="container" style={flowStyle}>
        <view className="height" style={item1Style}>
          <text>Item One</text>
        </view>
        <view className="height" style={item2Style}>
          <text>Item Two</text>
        </view>
        <view className="height" style={item3Style}>
          <text>Item Three</text>
        </view>
        <view className="height" style={item4Style}>
          <text>Item Four</text>
        </view>
      </view>
      <text>flex-direction: row; flex-wrap: wrap</text>
      <view className="container" style={flow2Style}>
        <view className="height" style={item1Style}>
          <text>Item One</text>
        </view>
        <view className="height" style={item2Style}>
          <text>Item Two</text>
        </view>
        <view className="height" style={item3Style}>
          <text>Item Three</text>
        </view>
        <view className="height" style={item4Style}>
          <text>Item Four</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<FlexFlow />);
