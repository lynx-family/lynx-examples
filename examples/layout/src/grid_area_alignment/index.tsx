import { root } from "@lynx-js/react";

import "./index.scss";

const GridAxisAlignment = () => {
  return (
    <>
      <text className="title">align-items: center;</text>
      <text className="title">justify-items: center;</text>
      <view className="container" style={{ alignItems: "center", justifyItems: "center" }}>
        <view className="item" style={{ gridColumnStart: "1", alignSelf: "end" }}>
          <text className="text">align-self: end;</text>
        </view>
        <view className="item_stretch">
          <text className="text">align-self: stretch;</text>
          <text className="text">justify-self: stretch;</text>
        </view>
        <view
          className="item"
          style={{ gridRowStart: "2", gridColumnStart: "1", justifySelf: "end", alignSelf: "start" }}
        >
          <text className="text">justify-self: end;</text>
          <text className="text">align-self: start;</text>
        </view>
        <view className="item_stretch">
          <text className="text">align-self: stretch;</text>
          <text className="text">justify-self: stretch;</text>
        </view>
        <view className="item" style={{ gridRowStart: "3", gridColumnStart: "1", justifySelf: "start" }}>
          <text className="text">justify-self: start;</text>
        </view>
        <view className="item_stretch">
          <text className="text">align-self: stretch;</text>
          <text className="text">justify-self: stretch;</text>
        </view>
      </view>
    </>
  );
};

root.render(<GridAxisAlignment />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
