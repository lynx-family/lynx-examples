import { root } from "@lynx-js/react";
import "./index.scss";

const AnimationIterationCount = () => {
  const iteration1Properties = ["1"];
  const iteration3Properties = ["3"];
  const iterationInfiniteProperties = ["infinite"];

  const containerStyle = {
    height: "150rpx",
  };

  const columnStyle = {
    width: "250rpx",
  };

  const getAnimationStyle = (count: string) => ({
    animation: `ani 1.5s ease 0s ${count} normal forwards running` as const,
  });

  return (
    <scroll-view scroll-orientation="vertical" className="fd-col container">
      <text className="h1">keyframes animation demo: iteration-count</text>
      <view className="sep"></view>

      <view className="fd-col group pd5">
        <text className="button h2">iteration-count: 1</text>
        <view className="fd-row" style={containerStyle}>
          {iteration1Properties.map(item => (
            <view style={columnStyle} className="fd-col mg5" key={item}>
              <text className="h4">iteration-count:{item}</text>
              <view flatten={false} style={getAnimationStyle(item)} className="ani-size mg5" />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>

      <view className="fd-col group pd5">
        <text className="button h2">iteration-count: 3</text>
        <view className="fd-row" style={containerStyle}>
          {iteration3Properties.map(item => (
            <view style={columnStyle} className="fd-col mg5" key={item}>
              <text className="h4">iteration-count:{item}</text>
              <view flatten={false} style={getAnimationStyle(item)} className="ani-size mg5" />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>

      <view className="fd-col group pd5">
        <text className="button h2">iteration-count: infinite</text>
        <view className="fd-row" style={containerStyle}>
          {iterationInfiniteProperties.map(item => (
            <view style={columnStyle} className="fd-col mg5" key={item}>
              <text className="h4">iteration-count:{item}</text>
              <view flatten={false} style={getAnimationStyle(item)} className="ani-size mg5" />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>
    </scroll-view>
  );
};

root.render(<AnimationIterationCount />);
