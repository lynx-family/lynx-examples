import { root } from "@lynx-js/react";
import { Component } from "@lynx-js/react";

export default class TextShadowAndStrokeExample extends Component {
  render() {
    return (
      <view
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <text style={{ textShadow: "2px 2px 4px green", fontSize: "30px" }}>
          Text Shadow
        </text>
        {/* @ts-expect-error TODO(types): Support textStroke in `@lynx-js/types` */}
        <text style={{ textStroke: "1px red", fontSize: "30px" }}>
          Text Stroke
        </text>
      </view>
    );
  }
}
root.render(<TextShadowAndStrokeExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
