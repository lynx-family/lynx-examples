import { root } from "@lynx-js/react";
import "./index.scss";

const MyComponent = () => {
  return (
    <view className="fixed_area" data-test-tag="container">
      <view className="test-item">
        <text className="text">Case 1：inline-text Concatenate:</text>
        <text className="expection">
          <text>simple text scenario:</text>
          <text>[inline-text 1]</text>
          <text>[inline-text 2]</text>
        </text>
      </view>

      <view className="test-item" style={{ marginTop: "40px" }}>
        <text className="text">Case 2：inline-text: different color</text>
        <text className="expection">
          <text>simple text scenario:</text>
          <text style={{ color: "blue" }}>[inline-text 1]</text>
          <text style={{ color: "#62efff" }}>[inline-text 2]</text>
        </text>
        <text className="expection">
          <text>inline-text gradient-color:</text>
          <text style={{ color: "blue" }}>[inline-text 1]</text>
          <text
            style={{
              color: "linear-gradient(to right, red, #65499c, #62efff)",
            }}
          >
            [inline-text 2]
          </text>
        </text>
      </view>

      <view className="test-item" style={{ marginTop: "40px" }}>
        <text className="text">Case 3：inline-text: different style</text>
        <text className="expection">
          <text>simple text scenario:</text>
          <text style={{ fontStyle: "italic" }}>[inline-text 1]</text>
          <text style={{ textDecoration: "line-through" }}>
            [inline-text 2]
          </text>
        </text>
        <text className="expection">simple text scenario</text>
      </view>
    </view>
  );
};
export default MyComponent;
root.render(<MyComponent />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
