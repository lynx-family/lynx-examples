import { createElement } from "react";
import "./App.css";
import "@lynx-js/web-elements/index.css";
import "@lynx-js/web-core/client";

const App = () => {
  return createElement("lynx-view", {
    style: { height: "100vh", width: "100vw" },
    url: "/main.web.bundle",
  });
};

export default App;
