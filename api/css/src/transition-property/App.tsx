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
      <view className="base opacityTransition" style={{ opacity: baseStyle.opacity }}>
        <text>Opacity animation</text>
      </view>
      <view className="base widthTransition" style={{ width: baseStyle.width }}>
        <text>Width animation</text>
      </view>
      <view className="base heightTransition" style={{ height: baseStyle.height }}>
        <text>Height animation</text>
      </view>
      <view className="base bgColorTransition" style={{ backgroundColor: baseStyle.backgroundColor }}>
        <text>Background color animation</text>
      </view>
      <view className="base transformTransition" style={{ transform: baseStyle.transform }}>
        <text>Transform animation</text>
      </view>
    </scroll-view>
  );
};

root.render(<Transition />);
