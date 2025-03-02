import { root } from "@lynx-js/react";
import "./index.scss";

const Right = () => {
  const containerStyle = {
    width: "210px",
    height: "210px",
    border: "5px",
    borderColor: "black",
  };

  const firstBoxStyle = {
    position: "absolute" as const,
    right: "80px",
    width: "50px",
    height: "50px",
    backgroundColor: "red",
  };

  const secondBoxStyle = {
    position: "fixed" as const,
    right: "155px",
    width: "50px",
    height: "50px",
    backgroundColor: "green",
  };

  const thirdBoxStyle = {
    position: "relative" as const,
    right: "40px",
    width: "50px",
    height: "50px",
    backgroundColor: "yellow",
  };

  const fourthBoxStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: "blue",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view style={containerStyle}>
        <view style={firstBoxStyle}></view>
        <view style={secondBoxStyle}></view>
        <view style={thirdBoxStyle}></view>
        <view style={fourthBoxStyle}></view>
      </view>
    </scroll-view>
  );
};

root.render(<Right />);
