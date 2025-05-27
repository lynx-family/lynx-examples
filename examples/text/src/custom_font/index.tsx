import { root } from "@lynx-js/react";
import { Component } from "@lynx-js/react";
import fontFile from "../../assets/font/Doto-Regular.ttf";

import "./index.scss";

export default class CustomFontExample extends Component<{}, { fontName: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { fontName: "PingFang" };
  }
  componentDidMount() {
    // @ts-expect-error TODO(types): should not error on `lynx.addFont`
    lynx.addFont(
      {
        "font-family": "Doto",
        "src": `url(${fontFile})`,
      },
      () => {
        console.log("load Doto font");
        this.setState({ fontName: "Doto" });
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
        <text>Whereas recognition of the inherent dignity</text>
        <text style={{ fontFamily: "Inter" }}>Whereas recognition of the inherent dignity</text>
        <text style={{ fontFamily: this.state.fontName }}>Whereas recognition of the inherent dignity</text>
        <text style={{ fontFamily: "Icon" }}>&#xEA01;</text>
      </view>
    );
  }
}
root.render(<CustomFontExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
