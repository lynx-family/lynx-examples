import { root } from "@lynx-js/react";

import { App } from "./App.jsx";

import LynxIcon from "@assets/image/lynxicon.png?inline";

root.render(
  <view style={{ margin: "100px" }}>
    <App src={LynxIcon} />
  </view>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
