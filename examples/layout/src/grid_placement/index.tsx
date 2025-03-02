import { root } from "@lynx-js/react";

import "./index.scss";

const GridAxisAlignment = () => {
  return (
    <>
      <view className="container" style={{ justifyContent: "center", alignContent: "start" }}>
        <view className="item" style={{ gridColumnStart: "span 2" }}>
          <text className="text">grid-column-start: span 2</text>
        </view>
        <view className="item" style={{ gridColumnStart: "2", gridRowStart: "2" }}>
          <text className="text">grid-column-start: 2;</text>
          <text className="text">grid-row-start: 2</text>
        </view>
        <view className="item" style={{ gridRowEnd: "-2", gridColumnStart: "span 2" }}>
          <text className="text">grid-column-start: span 2;</text>
          <text className="text">grid-row-end: -2</text>
        </view>
        <view className="item" style={{ gridColumnEnd: "-2", gridRowEnd: "-1" }}>
          <text className="text">grid-column-end: -2;</text>
          <text className="text">grid-row-end: -1</text>
        </view>
      </view>
    </>
  );
};

root.render(<GridAxisAlignment />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
