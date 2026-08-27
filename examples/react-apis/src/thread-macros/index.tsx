import { root } from "@lynx-js/react";
import { ThreadMacrosDemo } from "./ThreadMacrosDemo.jsx";
import "./index.css";

root.render(<ThreadMacrosDemo />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
