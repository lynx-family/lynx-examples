import { root } from "@lynx-js/react";
import { Component } from "@lynx-js/react";

export default class TextLayoutExample extends Component {
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
        <text
          style={{
            fontSize: "30px",
            color: "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)",
          }}
        >
          Text Gradient Title
        </text>
        <text
          style={{ fontSize: "20px", textIndent: "20px", lineHeight: "30px" }}
        >
          You can
          <text style={{ fontWeight: "bold", fontSize: "20px" }}>
            {" "}
            bold
          </text>{" "}
          the text that needs to be emphasized.
          <text
            style={{
              backgroundImage: "linear-gradient(360deg, rgba(74, 170, 159, 0.2) 0%, rgba(74, 170, 159, 0) 100%)",
              backgroundSize: "100% 8px",
              backgroundPosition: "0 100%",
              backgroundRepeat: "no-repeat",
              fontSize: "20px",
            }}
          >
            You can add a gradual change to the background color of the text.
          </text>
          <text style={{ textDecoration: "underline", fontSize: "20px" }}>
            You can underline the sentence.
          </text>
        </text>
      </view>
    );
  }
}
root.render(<TextLayoutExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
