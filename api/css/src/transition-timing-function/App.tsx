import { root, useState } from "@lynx-js/react";
import "./index.scss";

const Transition = () => {
  const [flag, setFlag] = useState(false);

  const baseStyle = {
    opacity: flag ? "1" : "0.1" as const,
    width: flag ? "100px" : "200px",
    height: flag ? "100px" : "200px",
    backgroundColor: flag ? "blue" : "red",
    visibility: (flag ? "visible" : "hidden") as "visible" | "hidden",
    top: flag ? "0px" : "50px",
    right: flag ? "0px" : "50px",
    bottom: flag ? "0px" : "50px",
    left: flag ? "0px" : "50px",
    transform: flag ? "translateX(0px)" : "translateX(50px)" as const,
  };

  return (
    <scroll-view scroll-orientation="vertical" className="scroll">
      <view className="base" bindtap={() => setFlag(!flag)}>
        <text>Click to transition</text>
      </view>
      <view
        className="base allTransition"
        style={{
          opacity: baseStyle.opacity,
          width: baseStyle.width,
          height: baseStyle.height,
          backgroundColor: baseStyle.backgroundColor,
          transitionTimingFunction: "linear",
        }}
      >
        <text>linear transition</text>
      </view>
      <view
        className="base allTransition"
        style={{
          opacity: baseStyle.opacity,
          width: baseStyle.width,
          height: baseStyle.height,
          backgroundColor: baseStyle.backgroundColor,
          transitionTimingFunction: "ease",
        }}
      >
        <text>ease transition</text>
      </view>
      <view
        className="base allTransition"
        style={{
          opacity: baseStyle.opacity,
          width: baseStyle.width,
          height: baseStyle.height,
          backgroundColor: baseStyle.backgroundColor,
          transitionTimingFunction: "ease-in",
        }}
      >
        <text>ease-in transition</text>
      </view>
      <view
        className="base allTransition"
        style={{
          opacity: baseStyle.opacity,
          width: baseStyle.width,
          height: baseStyle.height,
          backgroundColor: baseStyle.backgroundColor,
          transitionTimingFunction: "ease-out",
        }}
      >
        <text>ease-out transition</text>
      </view>
      <view
        className="base allTransition"
        style={{
          opacity: baseStyle.opacity,
          width: baseStyle.width,
          height: baseStyle.height,
          backgroundColor: baseStyle.backgroundColor,
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <text>ease-in-out transition</text>
      </view>
    </scroll-view>
  );
};

root.render(<Transition />);
