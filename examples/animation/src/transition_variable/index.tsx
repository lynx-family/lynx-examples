import { root } from "@lynx-js/react";
import { useState } from "react";
import "./index.scss";

const TransitionAnimationExample = () => {
  const [isActive1, setIsActive1] = useState(false);
  return (
    <view class="container">
      <view
        bindtap={() => setIsActive1(!isActive1)}
        className={isActive1 ? "button button_scene_dark" : "button button_scene_bright"}
      >
        <text class="txt">Click It</text>
      </view>
    </view>
  );
};
root.render(<TransitionAnimationExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
