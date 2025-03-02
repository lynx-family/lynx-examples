import { root } from "@lynx-js/react";
import "./index.scss";

const Position = () => {
  const boxStyles = {
    fixed1: {
      position: "fixed" as const,
      top: "5px",
      left: "5px",
      width: "50px",
      height: "50px",
      backgroundColor: "red",
    },
    absolute1: {
      position: "absolute" as const,
      top: "0px",
      left: "50px",
      width: "50px",
      height: "50px",
      backgroundColor: "brown",
    },
    fixed2: {
      position: "fixed" as const,
      top: "5px",
      left: "105px",
      width: "50px",
      height: "50px",
      backgroundColor: "pink",
    },
    absolute2: {
      position: "absolute" as const,
      right: "0px",
      width: "50px",
      height: "50px",
      backgroundColor: "coral",
    },
    fixed3: {
      position: "fixed" as const,
      left: "5px",
      top: "55px",
      width: "50px",
      height: "50px",
      backgroundColor: "Chocolate",
    },
    absolute3: {
      position: "absolute" as const,
      left: "100px",
      top: "50px",
      width: "50px",
      height: "50px",
      backgroundColor: "DarkOrange",
    },
    absolute4: {
      position: "absolute" as const,
      top: "50px",
      left: "50px",
      width: "50px",
      height: "50px",
      backgroundColor: "yellow",
    },
    absolute5: {
      position: "absolute" as const,
      left: "150px",
      top: "50px",
      width: "50px",
      height: "50px",
      backgroundColor: "GoldenRod",
    },
    absolute6: {
      position: "absolute" as const,
      left: "0px",
      top: "100px",
      width: "50px",
      height: "50px",
      backgroundColor: "GreenYellow",
    },
    absolute7: {
      position: "absolute" as const,
      left: "50px",
      top: "100px",
      width: "50px",
      height: "50px",
      backgroundColor: "LightBlue",
    },
    absolute8: {
      position: "absolute" as const,
      left: "150px",
      top: "100px",
      width: "50px",
      height: "50px",
      backgroundColor: "DodgerBlue",
    },
    absolute9: {
      position: "absolute" as const,
      left: "0px",
      top: "150px",
      width: "50px",
      height: "50px",
      backgroundColor: "DarkTurquoise",
    },
    fixed4: {
      position: "fixed" as const,
      left: "55px",
      top: "155px",
      width: "50px",
      height: "50px",
      backgroundColor: "DarkSlateBlue",
    },
    fixed5: {
      position: "fixed" as const,
      left: "105px",
      top: "155px",
      width: "50px",
      height: "50px",
      backgroundColor: "DarkSlateGrey",
    },
    absolute10: {
      position: "absolute" as const,
      bottom: "50px",
      right: "50px",
      width: "50px",
      height: "50px",
      backgroundColor: "green",
    },
    fixed6: {
      position: "fixed" as const,
      top: "155px",
      left: "155px",
      width: "50px",
      height: "50px",
      backgroundColor: "blue",
    },
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <view className="fixed_area">
        <view className="container">
          <view style={boxStyles.fixed1}></view>
          <view style={boxStyles.absolute1}></view>
          <view style={boxStyles.fixed2}></view>
          <view style={boxStyles.absolute2}></view>
          <view style={boxStyles.fixed3}></view>
          <view style={boxStyles.absolute3}></view>
          <view style={boxStyles.absolute4}></view>
          <view style={boxStyles.absolute5}></view>
          <view style={boxStyles.absolute6}></view>
          <view style={boxStyles.absolute7}></view>
          <view style={boxStyles.absolute8}></view>
          <view style={boxStyles.absolute9}></view>
          <view style={boxStyles.fixed4}></view>
          <view style={boxStyles.fixed5}></view>
          <view style={boxStyles.absolute10}></view>
          <view style={boxStyles.fixed6}></view>
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<Position />);
