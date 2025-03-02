import { root } from "@lynx-js/react";
import "./index.scss";

const AnimationTimingFunction = () => {
  const timingFunctions = ["linear", "ease", "ease-in", "ease-out", "ease-in-out"];

  const columnStyle = {
    width: "500rpx",
  };

  const getAnimationStyle = (timingFunction: string) => ({
    animation: `ani 3s ${timingFunction} 0s infinite normal forwards running` as const,
  });

  return (
    <scroll-view scroll-orientation="vertical" className="fd-col container">
      <text className="h1">keyframes animation demo: time functions</text>
      <view className="sep"></view>

      {timingFunctions.map(item => (
        <>
          <view className="fd-col group pd5" key={item}>
            <view style={columnStyle} className="fd-col mg5">
              <text className="h4">time functions:{item}</text>
              <view flatten={false} style={getAnimationStyle(item)} className="ani-size mg5" />
            </view>
          </view>
          <view className="sep"></view>
        </>
      ))}
    </scroll-view>
  );
};

root.render(<AnimationTimingFunction />);
