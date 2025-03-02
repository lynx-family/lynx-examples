import { root } from "@lynx-js/react";
import "./index.scss";

const AnimationFillMode = () => {
  const noneProperties = ["none"];
  const forwardsProperties = ["forwards"];
  const backwardsProperties = ["backwards"];
  const bothProperties = ["both"];

  const containerStyle = {
    height: "150rpx",
  };

  const columnStyle = {
    width: "350px",
  };

  const getAnimationStyle = (fillMode: string) => ({
    animation: `ani 3s ease 2s 1 normal ${fillMode} running` as const,
  });

  return (
    <scroll-view scroll-orientation="vertical" className="fd-col container">
      <text className="h1">keyframes animation demo: fillmode</text>
      <text className="h4">From--&gt; transform: translateX(50px);background-color: blue;</text>
      <text className="h4">To--&gt; transform: translateX(200px);background-color: red;</text>
      <view className="sep"></view>

      <view className="fd-col group pd5">
        <text className="button h2">none</text>
        <view className="fd-row" style={containerStyle}>
          {noneProperties.map(item => (
            <view style={columnStyle} className="fd-col mg5" key={item}>
              <text className="h4 mgl15">{item}</text>
              <view flatten={false} style={getAnimationStyle(item)} className="ani-size mg5" />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>

      <view className="fd-col group pd5">
        <text className="button h2">forwards</text>
        <view className="fd-row" style={containerStyle}>
          {forwardsProperties.map(item => (
            <view style={columnStyle} className="fd-col mg5" key={item}>
              <text className="h4 mgl15">{item}</text>
              <view flatten={false} style={getAnimationStyle(item)} className="ani-size mg5" />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>

      <view className="fd-col group pd5">
        <text className="button h2">backwards</text>
        <view className="fd-row" style={containerStyle}>
          {backwardsProperties.map(item => (
            <view style={columnStyle} className="fd-col mg5" key={item}>
              <text className="h4 mgl15">{item}</text>
              <view flatten={false} style={getAnimationStyle(item)} className="ani-size mg5" />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>

      <view className="fd-col group pd5">
        <text className="button h2">both</text>
        <view className="fd-row" style={containerStyle}>
          {bothProperties.map(item => (
            <view style={columnStyle} className="fd-col mg5" key={item}>
              <text className="h4 mgl15">{item}</text>
              <view flatten={false} style={getAnimationStyle(item)} className="ani-size mg5" />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>
    </scroll-view>
  );
};

root.render(<AnimationFillMode />);
