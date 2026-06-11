import { root } from "@lynx-js/react";

import { Gallery } from "./Gallery.jsx";

root.render(<Gallery />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
