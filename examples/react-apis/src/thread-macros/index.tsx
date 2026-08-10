import { root } from "@lynx-js/react";
import { App } from "./App.jsx";
import "./index.css";

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
