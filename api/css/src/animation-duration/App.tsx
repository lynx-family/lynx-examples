import { root } from "@lynx-js/react";
import "./index.scss";

const AnimationDuration = () => {
  const durationSecondsProps = ["0s", "1s", "2s", "3s", "4s"];
  const durationMilliSecondsProps = ["0ms", "1000ms", "2000ms", "3000ms", "4000ms"];

  const containerStyle = {
    height: "200rpx",
  };

  const columnStyle = {
    width: "250rpx",
  };

  const getAnimationStyle = (duration: string) => ({
    animation: `rotateZ-ani ${duration} ease 0s infinite alternate both running`,
  });

  return (
    <scroll-view scroll-orientation="vertical" className="fd-col container">
      <text className="h1">Animation Duration Demo (seconds)</text>
      <view className="sep"></view>
      <view className="fd-col group pd5">
        <text className="button h2">Duration</text>
        <view className="fd-row" style={containerStyle}>
          {durationSecondsProps.map((item) => (
            <view style={columnStyle} className="fd-col mg5" key={item}>
              <text className="h3 mgl15">{item}</text>
              <view flatten={false} style={getAnimationStyle(item)} className="ani-size mg5 mgl15 mgt15" />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>

      <text className="h1">Animation Duration Demo (milliseconds)</text>
      <view className="sep"></view>
      <view className="fd-col group pd5">
        <text className="button h2">Duration</text>
        <view className="fd-row" style={containerStyle}>
          {durationMilliSecondsProps.map((item) => (
            <view style={columnStyle} className="fd-col mg5" key={item}>
              <text className="h3 mgl15">{item}</text>
              <view flatten={false} style={getAnimationStyle(item)} className="ani-size mg5 mgl15 mgt15" />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>
    </scroll-view>
  );
};

root.render(<AnimationDuration />);
