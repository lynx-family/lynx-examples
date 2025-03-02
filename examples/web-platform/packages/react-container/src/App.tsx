import "./App.css";
import "@lynx-js/web-core/index.css";
import "@lynx-js/web-elements/index.css";
import "@lynx-js/web-core";

const App = () => {
  return (
    <lynx-view style={{ height: "100vh", width: "100vw" }} url="/main.web.bundle">
    </lynx-view>
  );
};

export default App;
