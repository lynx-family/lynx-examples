import { root } from "@lynx-js/react";
import "./index.scss";

const AnimationDelay = () => {
  const delaySecondsProps = ["0s", "1s", "2s", "3s", "4s"];
  const delayMilliSecondsProps = ["0ms", "1000ms", "2000ms", "3000ms", "4000ms"];

  const containerStyle = {
    height: "200rpx",
  };

  const columnStyle = {
    width: "250rpx",
  };

  const getAnimationStyle = (delay: string, unit: string = "s") => ({
    animation: `rotateZ-ani 2s ease ${delay}${unit} infinite alternate both running`,
  });

  return (
    <scroll-view scroll-orientation="vertical" className="fd-col container">
      <text className="h1">keyframes animation demo : delay s</text>
      <view className="sep"></view>
      <view className="fd-col group pd5">
        <text className="button h2">delay</text>
        <view className="fd-row" style={containerStyle}>
          {delaySecondsProps.map((item, index) => (
            <view style={columnStyle} className="fd-col mg5" key={item}>
              <text className="h3 mgl15">{item}</text>
              <view flatten={false} style={getAnimationStyle(index.toString())} className="ani-size mg5 mgl15 mgt15" />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>

      <text className="h1">keyframes animation demo : delay ms</text>
      <view className="sep"></view>
      <view className="fd-col group pd5">
        <text className="button h2">delay</text>
        <view className="fd-row" style={containerStyle}>
          {delayMilliSecondsProps.map((item, index) => (
            <view style={columnStyle} className="fd-col mg5" key={item}>
              <text className="h3 mgl15">{item}</text>
              <view
                flatten={false}
                style={getAnimationStyle(index.toString(), "ms")}
                className="ani-size mg5 mgl15 mgt15"
              />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>
    </scroll-view>
  );
};

root.render(<AnimationDelay />);
