import { root } from "@lynx-js/react";
import "./index.scss";

const JustifyContent = () => {
  const boxStyle = {
    width: "30px",
    height: "30px",
  };

  const redBoxStyle = {
    ...boxStyle,
    backgroundColor: "red",
  };

  const yellowBoxStyle = {
    ...boxStyle,
    backgroundColor: "yellow",
  };

  const greenBoxStyle = {
    ...boxStyle,
    backgroundColor: "green",
  };

  const blueBoxStyle = {
    ...boxStyle,
    backgroundColor: "blue",
  };

  const flexStartStyle = {
    justifyContent: "flex-start" as const,
  };

  const flexEndStyle = {
    justifyContent: "flex-end" as const,
  };

  const centerStyle = {
    justifyContent: "center" as const,
  };

  const spaceBetweenStyle = {
    justifyContent: "space-between" as const,
  };

  const spaceAroundStyle = {
    justifyContent: "space-around" as const,
  };

  const spaceEvenlyStyle = {
    justifyContent: "space-evenly" as const,
  };

  return (
    <>
      <text>justify-content:flex-start;</text>
      <view className="container" style={flexStartStyle}>
        <view style={redBoxStyle} />
        <view style={yellowBoxStyle} />
        <view style={greenBoxStyle} />
        <view style={blueBoxStyle} />
      </view>

      <text>justify-content:flex-end;</text>
      <view className="container" style={flexEndStyle}>
        <view style={redBoxStyle} />
        <view style={yellowBoxStyle} />
        <view style={greenBoxStyle} />
        <view style={blueBoxStyle} />
      </view>

      <text>justify-content:center;</text>
      <view className="container" style={centerStyle}>
        <view style={redBoxStyle} />
        <view style={yellowBoxStyle} />
        <view style={greenBoxStyle} />
        <view style={blueBoxStyle} />
      </view>

      <text>justify-content:space-between;</text>
      <view className="container" style={spaceBetweenStyle}>
        <view style={redBoxStyle} />
        <view style={yellowBoxStyle} />
        <view style={greenBoxStyle} />
        <view style={blueBoxStyle} />
      </view>

      <text>justify-content:space-around;</text>
      <view className="container" style={spaceAroundStyle}>
        <view style={redBoxStyle} />
        <view style={yellowBoxStyle} />
        <view style={greenBoxStyle} />
        <view style={blueBoxStyle} />
      </view>

      <text>justify-content:space-evenly;</text>
      <view className="container" style={spaceEvenlyStyle}>
        <view style={redBoxStyle} />
        <view style={yellowBoxStyle} />
        <view style={greenBoxStyle} />
        <view style={blueBoxStyle} />
      </view>
    </>
  );
};

root.render(<JustifyContent />);
