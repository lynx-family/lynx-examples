import { root } from "@lynx-js/react";
import "./index.scss";

const FlexDirection = () => {
  const greenStyle = {
    backgroundColor: "rgba(0,255,0,0.2)" as const,
    flexGrow: 1,
  };

  const blueStyle = {
    backgroundColor: "rgba(0,0,255,0.2)" as const,
    flexGrow: 1,
  };

  const redStyle = {
    backgroundColor: "rgba(255,0,0,0.2)" as const,
    flexGrow: 1,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view className="row">
          <view style={greenStyle}></view>
          <view style={blueStyle}></view>
          <view style={redStyle}></view>
        </view>

        <view className="row-reverse">
          <view style={greenStyle}></view>
          <view style={blueStyle}></view>
          <view style={redStyle}></view>
        </view>

        <view className="container column">
          <view style={greenStyle}></view>
          <view style={blueStyle}></view>
          <view style={redStyle}></view>
        </view>

        <view className="container column-reverse">
          <view style={greenStyle}></view>
          <view style={blueStyle}></view>
          <view style={redStyle}></view>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<FlexDirection />);
