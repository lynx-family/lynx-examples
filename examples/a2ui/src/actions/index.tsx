import { root } from "@lynx-js/react";

import { Actions } from "./Actions.jsx";

root.render(<Actions />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
