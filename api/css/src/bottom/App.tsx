import { root } from "@lynx-js/react";
import "./index.scss";

const Bottom = () => {
  const containerStyle = {
    width: "210px",
    height: "210px",
    border: "5px",
    borderColor: "black",
  };

  const firstBoxStyle = {
    position: "absolute" as const,
    bottom: "80px",
    width: "50px",
    height: "50px",
    backgroundColor: "red",
  };

  const secondBoxStyle = {
    position: "fixed" as const,
    bottom: "155px",
    width: "50px",
    height: "50px",
    backgroundColor: "green",
  };

  const thirdBoxStyle = {
    position: "relative" as const,
    bottom: "10px",
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
    <view style={containerStyle}>
      <view style={firstBoxStyle}></view>
      <view style={secondBoxStyle}></view>
      <view style={thirdBoxStyle}></view>
      <view style={fourthBoxStyle}></view>
    </view>
  );
};

root.render(<Bottom />);
