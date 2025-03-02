import { root } from "@lynx-js/react";

import "./index.scss";

const AnimateAnimationExample = () => {
  return (
    <view style={{ width: "100%", height: "100%" }}>
      <view
        id="view1"
        class="box"
        bindtap={() => {
          const ani = lynx.getElementById("view1").animate(
            [
              {
                transform: "translate(0%, 0%) rotate(0deg)",
                "animation-timing-function": "linear",
              },
              {
                transform: "translate(200px, 0%) rotate(90deg)",
                "animation-timing-function": "cubic-bezier(.91,.03,.94,.11)",
              },
              {
                transform: "translate(200px, 100%) rotate(180deg)",
                "animation-timing-function": "linear",
              },
              {
                transform: "translate(0%, 100%) rotate(270deg)",
                "animation-timing-function": "cubic-bezier(.91,.03,.94,.11)",
              },
              {
                transform: "translate(0%, 0%) rotate(360deg)",
              },
            ],
            {
              name: "js-animation-1",
              duration: 5000,
              iterations: Infinity,
              easing: "linear",
            },
          );
        }}
      >
      </view>
    </view>
  );
};
root.render(<AnimateAnimationExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
