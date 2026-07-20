import "@lynx-js/preact-devtools";
import { root } from "@lynx-js/react";

import { App } from "@lynx-example/lynx-ui-gallery/src/App.jsx";

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
