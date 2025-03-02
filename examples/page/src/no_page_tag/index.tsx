import { root } from "@lynx-js/react";
import "./index.scss";

const App = () => {
  return (
    <view
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <text className="title">Set Page Style Without Page Element</text>
    </view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
