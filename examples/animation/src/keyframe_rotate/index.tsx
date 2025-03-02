import { root } from "@lynx-js/react";
import "./index.scss";

const RotateAnimation = () => {
  return (
    <view
      style={{ flexDirection: "column" }}
      className="container"
      clip-radius="true"
    >
      <view className="title-name-wrapper-border">
        <view className="title-name-wrapper-border-before"></view>
        <view className="title-name-wrapper-border-after"></view>
      </view>
    </view>
  );
};

root.render(<RotateAnimation />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
