import { root } from "@lynx-js/react";
import "./index.scss";

const BoxShadow = () => {
  const containerStyle = {
    height: "100%",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={containerStyle}>
      <view className="fixed_area">
        <view className="example">
          <view className="box shadowAI"></view>
          <view className="box shadowBI"></view>
          <view className="box shadowCI"></view>
        </view>

        <view className="example">
          <view className="box radius shadowDI"></view>
          <view className="box radius shadowEI"></view>
          <view className="box radius shadowFI"></view>
        </view>

        <view className="example">
          <view className="box radius2 shadowAI"></view>
          <view className="box radius2 shadowBI"></view>
          <view className="box radius2 shadowCI"></view>
        </view>

        <view className="example">
          <view className="box shadowA"></view>
          <view className="box shadowB"></view>
          <view className="box shadowC"></view>
        </view>

        <view className="example">
          <view className="box radius shadowD"></view>
          <view className="box radius shadowE"></view>
          <view className="box radius shadowF"></view>
        </view>

        <view className="example">
          <view className="box radius2 shadowA"></view>
          <view className="box radius2 shadowB"></view>
          <view className="box radius2 shadowC"></view>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<BoxShadow />);
