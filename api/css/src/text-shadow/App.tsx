import { root } from "@lynx-js/react";
import "./index.scss";

const TextShadow = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const headerStyle = {
    backgroundColor: "#ccc",
    marginTop: "10px",
  };

  const noneStyle = {
    textShadow: "none" as const,
  };

  const singleStyle = {
    textShadow: "1px 1px 2px #558abb" as const,
  };

  const multiStyle = {
    textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue" as const,
  };

  const rgbaStyle = {
    textShadow: "0 .005px .01rem rgba(70, 70, 70, .3)" as const,
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view style={containerStyle}>
          <text style={headerStyle}>text-shadow</text>
          <text style={noneStyle}>text-shadow: none;</text>
          <text style={singleStyle}>text-shadow: 1px 1px 2px #558abb;</text>
          <text style={multiStyle}>text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;</text>
          <text style={rgbaStyle}>text-shadow: 0 .005px .01rem rgba(70, 70, 70, .3);</text>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<TextShadow />);
