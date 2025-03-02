import ExclamationCircle from "@assets/image/exclamationcircle.png?inline";
import { root } from "@lynx-js/react";
import { Component } from "@lynx-js/react";
export default class Index extends Component {
  render() {
    return (
      <view style={{ width: "200px" }}>
        <text style={{ fontSize: "20px", textAlign: "center" }}>
          <image
            style={{
              width: "20px",
              height: "20px",
              border: "1px solid red",
              borderRadius: "50%",
              verticalAlign: "middle",
            }}
            src={ExclamationCircle}
          />
          <text style={{}}>
            This is a warning message.This is a warning message.This is a warning message.
          </text>
        </text>
      </view>
    );
  }
}
root.render(<Index />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
