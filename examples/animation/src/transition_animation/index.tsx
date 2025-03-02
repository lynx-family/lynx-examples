import { root } from "@lynx-js/react";
import { useState } from "react";
import "./index.scss";

const TransitionAnimationExample = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  return (
    <view style={{ width: "100%", height: "100%" }}>
      <text style={{ textAlign: "center", fontSize: "30px" }}>
        CSS Transition
      </text>

      <text style={{ fontSize: "20px" }}>transform(Click box!)</text>
      <view
        className={isActive1 ? "box active1" : "box"}
        bindtap={() => setIsActive1(!isActive1)}
        style={{ transition: "transform 3s ease" }}
      />

      <text
        className={isActive2 ? "active2" : ""}
        bindtap={setIsActive2}
        style={{ fontSize: "20px", transition: "color 3s ease" }}
      >
        color-opacity(Click me or click box!)
      </text>
      <view
        className={isActive3 ? "active3" : "box-color"}
        bindtap={() => setIsActive3(!isActive3)}
        style={{ transition: "opacity 3s ease, background-color 3s ease" }}
      />

      <text style={{ fontSize: "20px" }}>layout(Click box!)</text>
      <view
        className={isActive4 ? "layout-box active4" : "layout-box"}
        bindtap={() => setIsActive4(!isActive4)}
        style={{ transition: "width 3s ease, height 3s ease" }}
      />

      <text style={{ fontSize: "20px" }}>
        border-margin-padding(Click box!)
      </text>
      <view
        className={isActive5
          ? "border-margin-padding-box active5"
          : "border-margin-padding-box"}
        bindtap={() => setIsActive5(!isActive5)}
        style={{ transition: "border-color 3s ease, border-width 3s ease" }}
      />
    </view>
  );
};
root.render(<TransitionAnimationExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
