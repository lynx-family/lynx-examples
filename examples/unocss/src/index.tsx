import { root } from "@lynx-js/react";

import { App } from "./App.js";
import "uno.css";
import "./globals.css"; // 导入全局样式

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
