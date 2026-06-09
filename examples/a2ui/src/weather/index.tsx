import { root } from "@lynx-js/react";

import { Weather } from "./Weather.jsx";

root.render(<Weather />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
