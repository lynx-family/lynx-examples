import { root } from "@lynx-js/react";
import "./index.scss";

const AnimationDirection = () => {
  const directionProperties = ["normal", "reverse", "alternate", "alternate-reverse"];

  const containerStyle = {
    height: "150rpx",
  };

  const columnStyle = {
    width: "750rpx",
  };

  const getAnimationStyle = (direction: string) => ({
    animation: `ani 1.5s ease 0s infinite ${direction} forwards running` as const,
  });

  return (
    <scroll-view scroll-orientation="vertical" className="fd-col container">
      <text className="h1">keyframes animation demo: direction</text>
      <view className="sep"></view>

      {directionProperties.map(item => (
        <>
          <view className="fd-col group pd5" key={item}>
            <text className="button h2">direction: {item}</text>
            <view className="fd-row" style={containerStyle}>
              <view style={columnStyle} className="fd-col mg5">
                <text className="h4">direction: {item}</text>
                <view flatten={false} style={getAnimationStyle(item)} className="ani-size mg5" />
              </view>
            </view>
          </view>
          <view className="sep"></view>
        </>
      ))}
    </scroll-view>
  );
};

root.render(<AnimationDirection />);
