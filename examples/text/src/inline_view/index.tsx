import { root } from "@lynx-js/react";
import { Component } from "@lynx-js/react";
import "./index.scss";

const InlineView = () => {
  return (
    <view
      style="flex-direction:column;align-items:center;border:1px red solid;"
      lynx-test-tag="container"
    >
      <text
        style="text-align:center;font-size:25px;text-overflow:ellipsis;"
        text-maxline="2"
      >
        <view
          style={{ flexDirection: "column", verticalAlign: "center" }}
          className="container"
          clip-radius="true"
        >
          <view className="title-name-wrapper-border">
            <view className="title-name-wrapper-border-before"></view>
            <view className="title-name-wrapper-border-after"></view>
          </view>
        </view>
        This is a paragraph containing animation.This is a paragraph containing animation.
      </text>
    </view>
  );
};

export default InlineView;
root.render(<InlineView />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
