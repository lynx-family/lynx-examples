import { root } from "@lynx-js/react";
import { Component } from "@lynx-js/react";

export default class CustomFontExample extends Component {
  componentDidMount() {
    lynx.addFont(
      {
        "font-family": "CustomFont2",
        "src": "url(\"url | base64\")",
      },
      () => {
        console.log("load font");
      },
    );
  }
  render() {
    return (
      <view
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <text style={{ fontFamily: "CustomFont1" }}>Custom Font 1</text>
        <text style={{ fontFamily: "CustomFont2" }}>Custom Font 2</text>
      </view>
    );
  }
}
root.render(<CustomFontExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
