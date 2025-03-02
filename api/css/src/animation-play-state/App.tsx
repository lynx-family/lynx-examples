import { root, useState } from "@lynx-js/react";
import "./index.scss";

const AnimationPlayState = () => {
  const [playState, setPlayState] = useState(true);

  const degProperties = ["90deg", "180deg", "270deg"];
  const radProperties = ["1rad", "2rad", "3rad"];
  const turnProperties = ["0.25turn", "0.5turn", "0.75turn"];

  const containerStyle = {
    height: "150rpx",
  };

  const columnStyle = {
    width: "250rpx",
  };

  const getAnimationStyle = (index: number, playState: boolean) => ({
    animation: `deg-${index} 2s ease 0s infinite alternate both ${playState ? "running" : "paused"}` as const,
  });

  return (
    <view>
      <scroll-view scroll-orientation="vertical" className="fd-col container">
        <text className="h1" bindtap={() => setPlayState(!playState)}>Click to start animation</text>
        <text className="h1">Animation Play State Demo: Deg, Rad, Turn</text>
        <view className="sep"></view>

        <view className="fd-col group pd5">
          <text className="button h2">deg</text>
          <view className="fd-row" style={containerStyle}>
            {degProperties.map((item, index) => (
              <view style={columnStyle} className="fd-col mg5" key={item}>
                <text className="h4 mgl15">{item}</text>
                <view flatten={false} style={getAnimationStyle(index, playState)} className="ani-size mg5" />
              </view>
            ))}
          </view>
        </view>
        <view className="sep"></view>

        <view className="fd-col group pd5">
          <text className="button h2">rad</text>
          <view className="fd-row" style={containerStyle}>
            {radProperties.map((item, index) => (
              <view style={columnStyle} className="fd-col mg5" key={item}>
                <text className="h4 mgl15">{item}</text>
                <view flatten={false} style={getAnimationStyle(index, playState)} className="ani-size mg5" />
              </view>
            ))}
          </view>
        </view>
        <view className="sep"></view>

        <view className="fd-col group pd5">
          <text className="button h2">turn</text>
          <view className="fd-row" style={containerStyle}>
            {turnProperties.map((item, index) => (
              <view style={columnStyle} className="fd-col mg5" key={item}>
                <text className="h4 mgl15">{item}</text>
                <view flatten={false} style={getAnimationStyle(index, playState)} className="ani-size mg5" />
              </view>
            ))}
          </view>
        </view>
        <view className="sep"></view>
      </scroll-view>
    </view>
  );
};

root.render(<AnimationPlayState />);
