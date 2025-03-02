import { root } from "@lynx-js/react";

import "./index.scss";
const FlexComponent = () => {
  return (
    <view style={{ width: "100%", height: "100%", flexDirection: "column" }}>
      <view className="wrapper">
        <text className="header__title colorWidth">Flex layout</text>
        <text className="main">
          The flexible box layout module (usually referred to as flexbox) is a one-dimensional layout model for
          distributing space between items and includes numerous alignment capabilities. This article gives an outline
          of the main features of flexbox, which we will explore in more detail in the rest of these guides.
        </text>
        <text className="aside aside-1">flex: 1 0 0</text>
        <text className="aside aside-2">flex: 2 0 0</text>
        <text className="footer">Footer -- flex: 1 100%</text>
      </view>
    </view>
  );
};
root.render(<FlexComponent />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
