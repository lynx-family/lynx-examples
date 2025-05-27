import { root } from "@lynx-js/react";
import "./index.scss";
import { useState } from "react";

const RelativeLayoutOnce = () => {
  const [relativeLayoutOnce, setRelativeLayoutOnce] = useState(false);

  const containerStyle = {
    display: "linear" as const,
  };

  const buttonStyle = {
    borderWidth: "1px",
    width: "300px",
    height: "50px",
    margin: "10px",
  };

  const textStyle = {
    color: "red",
    fontSize: "30px",
  };

  const introStyle = {
    relativeLayoutOnce: relativeLayoutOnce,
  } as const;

  return (
    <view style={containerStyle}>
      <view bindtap={() => setRelativeLayoutOnce(!relativeLayoutOnce)} style={buttonStyle}>
        <text>Click to change relative-layout-once</text>
      </view>
      <text style={textStyle}>relative-layout-once:{relativeLayoutOnce ? "true" : "false"}</text>
      {/* @ts-expect-error TODO(types): Support relativeLayoutOnce in `@lynx-js/types` */}
      <view className="intro" style={introStyle}>
        <text className="t1">
          hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world
        </text>
        <text className="t2">hello worldhello worldhello world</text>
      </view>
    </view>
  );
};

root.render(<RelativeLayoutOnce />);
