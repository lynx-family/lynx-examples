import { root } from "@lynx-js/react";
import { useState } from "react";
import "./index.scss";

const SpringAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <view className="container">
      <view
        className={`spring-box ${isAnimating ? "animate" : ""}`}
        bindtap={triggerAnimation}
      >
        <text className="box-text">Click Me!</text>
      </view>
    </view>
  );
};

root.render(<SpringAnimation />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
