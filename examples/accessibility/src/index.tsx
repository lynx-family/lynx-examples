import { root } from "@lynx-js/react";

import { App } from "./App.jsx";

import LynxIcon from "@assets/image/lynxicon.png?inline";

root.render(<App src={LynxIcon} />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
