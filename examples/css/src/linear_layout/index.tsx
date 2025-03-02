import { root } from "@lynx-js/react";

import "./index.scss";
const LinearComponent = () => {
  return (
    <view style={{ width: "100%", height: "100%", flexDirection: "column" }}>
      <text className="header__title colorWidth">Linear layout</text>
      <text className="title1">linear-direction: column</text>
      <view className="wrapper">
        <text>Item 1</text>
        <text>Item 2</text>
        <text>Item 3</text>
        <text>Item 4</text>
      </view>
      <text className="title1">linear-direction: row</text>
      <view className="wrapper1">
        <text>Item 1</text>
        <text>Item 2</text>
        <text>Item 3</text>
      </view>
    </view>
  );
};
root.render(<LinearComponent />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
