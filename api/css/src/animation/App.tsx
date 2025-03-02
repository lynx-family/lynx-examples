import { root, useState } from "@lynx-js/react";
import "./index.scss";
import lynxImage from "../../resource/lynxicon.png";

const Keyframes = () => {
  const [flag, setFlag] = useState(true);

  const transProperties = ["translateX", "translateY", "translateXY"];
  const rotateProperties = ["rotateZ", "rotateX", "rotateY"];
  const scaleProperties = ["scaleX", "scaleY", "scaleXY"];
  const flipProperties = ["flipX", "flipY", "flipXY"];
  const otherProperties = ["background-color", "opacity"];

  const containerHeightStyle = {
    height: "200rpx",
  };

  const columnWidthStyle = {
    width: "250rpx",
  };

  const rotateHeightStyle = {
    height: "150rpx",
  };

  const scaleImageStyle = {
    marginLeft: "15px",
    marginTop: "30px",
  };

  const otherStyle = {
    marginLeft: "15px",
    marginTop: "15px",
  };

  const getAnimationStyle = (name: string) => ({
    animation: `${name}-ani 2s ease 0s infinite alternate both running` as const,
  });

  return (
    <scroll-view scroll-orientation="vertical" className="fd-col container">
      <text className="h1">keyframes animation</text>
      <view className="sep"></view>
      <view className="fd-col group pd5">
        <text className="button h2">translate animation</text>
        <view className="fd-row" style={containerHeightStyle}>
          {transProperties.map((item, index) => (
            <view style={columnWidthStyle} key={`trans-${index}`} className="fd-col mg5">
              <text className="h3 mgl15">{item}</text>
              <image style={getAnimationStyle(item)} className="ani-size mg5 mgl15 mgt15" src={lynxImage} />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>

      <view className="fd-col group pd5">
        <text className="button h2">rotate animation</text>
        <view className="fd-row" style={rotateHeightStyle}>
          {rotateProperties.map((item, index) => (
            <view style={columnWidthStyle} key={`rotate-${index}`} className="fd-col mg5">
              <text className="h3 mgl15">{item}</text>
              <image style={getAnimationStyle(item)} className="ani-size mg5 mgl15 mgt15" src={lynxImage} />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>

      <view className="fd-col group pd5">
        <text className="button h2">scale animation</text>
        <view className="fd-row" style={containerHeightStyle}>
          {scaleProperties.map((item, index) => (
            <view style={columnWidthStyle} key={`scale-${index}`} className="fd-col mg5">
              <text className="h3 mgl15">{item}</text>
              <image style={{ ...getAnimationStyle(item), ...scaleImageStyle }} className="ani-size" src={lynxImage} />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>

      <view className="fd-col group pd5">
        <text className="button h2">flip animation</text>
        <view className="fd-row" style={containerHeightStyle}>
          {flipProperties.map((item, index) => (
            <view style={columnWidthStyle} key={`flip-${index}`} className="fd-col mg5">
              <text className="h3 mgl15">{item}</text>
              <image style={getAnimationStyle(item)} className="ani-size mg5 mgl15 mgt15" src={lynxImage} />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>

      <view className="fd-col group pd5">
        <text className="button h2">bg-color opacity animation</text>
        <view className="fd-row" style={containerHeightStyle}>
          {otherProperties.map((item, index) => (
            <view style={columnWidthStyle} key={`other-${index}`} className="fd-col mg5">
              <text className="h4 mgl15">{item}</text>
              <view className="base"></view>
              <view
                style={{
                  animation: `${item}-ani 2s ease 0s infinite alternate both ${flag ? "running" : "paused"}`,
                  ...otherStyle,
                }}
                className="ani-size"
              />
            </view>
          ))}
        </view>
      </view>
      <view className="sep"></view>
    </scroll-view>
  );
};

root.render(<Keyframes />);
