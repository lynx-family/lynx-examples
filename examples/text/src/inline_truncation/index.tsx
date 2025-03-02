import ExclamationCircle from "@assets/image/exclamationcircle.png?inline";
import RightArrow from "@assets/image/rightarrow.png?inline";
import { root } from "@lynx-js/react";

const InlineTruncation = () => {
  return (
    <view style={{ width: "200px" }}>
      <text style={{ height: "30px", lineHeight: "20px" }} text-maxline="1">
        this is a test text. this is a test text. this is a test text.this is a test text. this is a test text. this is
        a test text.
        <inline-truncation>
          <text>...See More</text>
          <image src={RightArrow} style={{ width: "10px", height: "10px" }} />
        </inline-truncation>
      </text>

      <text
        style={{ lineHeight: "20px", marginTop: "30px" }}
        text-maxline={"2"}
      >
        this is a test text. this is a test text. this is a test text.this is a test text. this is a test text. this is
        a test text.
        <inline-truncation>
          <text style={{ color: "grey" }}>...See More</text>
          <view style={{ verticalAlign: "center" }} flatten={false}>
            <image
              src={ExclamationCircle}
              style={{ width: "15px", height: "15px" }}
            />
          </view>
        </inline-truncation>
      </text>
    </view>
  );
};

export default InlineTruncation;
root.render(<InlineTruncation />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
