import { root } from "@lynx-js/react";
import { Component } from "@lynx-js/react";

import "./index.scss";

export default class FontFaceExample extends Component {
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
        <text style={{ fontFamily: "Icon" }}>&#xEA01;</text>
      </view>
    );
  }
}
root.render(<FontFaceExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
