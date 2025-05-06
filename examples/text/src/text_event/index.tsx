import { root, useState } from "@lynx-js/react";

import "./index.scss";

const AlignContent = () => {
  const [inlineViewTextTimes, setInlineViewTextTimes] = useState(0);
  const [inlineImageTimes, setInlineImageTimes] = useState(0);
  const [eventDetail, setEventDetail] = useState("");

  const clickInlineViewText = () => {
    setInlineViewTextTimes(inlineViewTextTimes + 1);
  };

  const clickInlineImage = () => {
    setInlineImageTimes(inlineImageTimes + 1);
  };

  const onLayout1 = (e: any) => {
    setEventDetail(JSON.stringify(e.detail));
  };

  return (
    <view
      className="intro"
      style={{
        display: "linear" as const,
        linearOrientation: "vertical" as const,
      }}
      lynx-test-tag="container"
    >
      <view
        style={{
          display: "linear" as const,
          linearOrientation: "vertical" as const,
        }}
      >
        <text lynx-test-tag="inline-view-text-count">
          inlineViewCount: {inlineViewTextTimes}
        </text>
        <text lynx-test-tag="inline-image-count">
          inlineImageCount: {inlineImageTimes}
        </text>
      </view>
      <text
        lynx-test-tag="flatten-text"
        style={{
          direction: "rtl" as const,
        }}
      >
        لإعادة الشحن على
        <image
          bindtap={clickInlineImage}
          src="https://picsum.photos/id/237/22/22"
          style={{
            width: "22px",
            height: "22px",
          }}
        />
        داخل
        <view
          style={{
            padding: "3px",
            border: "1px solid red",
            borderRadius: "10px",
          }}
        >
          <text
            bindtap={clickInlineViewText}
            style={{
              fontSize: "20px",
              color: "linear-gradient(green, yellow)",
            }}
          >
            sub text
          </text>
        </view>
        الشحن على
      </text>
      <text
        lynx-test-tag="non-flatten-text"
        style={{
          direction: "rtl" as const,
        }}
        flatten={false}
      >
        لإعادة الشحن على
        <image
          bindtap={clickInlineImage}
          src="https://picsum.photos/id/237/22/22"
          style={{
            width: "22px",
            height: "22px",
          }}
        />
        داخل
        <view
          style={{
            padding: "3px",
            border: "1px solid red",
            borderRadius: "10px",
          }}
        >
          <text
            bindtap={clickInlineViewText}
            style={{
              fontSize: "20px",
              color: "linear-gradient(green, yellow)",
            }}
          >
            sub text
          </text>
        </view>
        الشحن على
      </text>

      <view
        style={{
          display: "linear" as const,
          linearOrientation: "vertical" as const,
          marginTop: "50px",
        }}
      >
        <text style={{ fontSize: "20px", color: "red" }}>
          Test text bindlayout event....
        </text>
        <text style={{ fontSize: "14px", color: "blue", marginTop: "10px" }}>
          bindlayout event: {eventDetail}
        </text>
      </view>
      <text bindlayout={onLayout1} text-maxline="1">
        <text style="font-size: 16px;color:red">
          这段文本内容过长会发生截断
        </text>
        <image
          style="width:10px;height:10px"
          src="https://picsum.photos/30/10"
        >
        </image>
        <text style="font-size: 16px;">
          这段文本内容过长会发生截断这段文本内容过长会发生截断
        </text>
      </text>
    </view>
  );
};

export default AlignContent;

root.render(<AlignContent />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
