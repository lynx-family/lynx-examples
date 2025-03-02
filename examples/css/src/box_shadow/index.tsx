import { root } from "@lynx-js/react";
import "./index.scss";

const GradientScrollView = () => {
  return (
    <view style={{ width: "100%", height: "100%", flexDirection: "column" }}>
      <scroll-view
        scroll-orientation="vertical"
        style={{ flexDirection: "column", width: "100%", height: "100%" }}
      >
        <view className="example">
          <view className="box2">
            <text>shadow</text>
          </view>
          <view className="box3">
            <text></text>
          </view>
        </view>

        <view className="example">
          <view className="box shadow-ai">
            <text>ai</text>
          </view>
          <view className="box shadow-bi">
            <text>bi</text>
          </view>
          <view className="box shadow-ci">
            <text>ci</text>
          </view>
        </view>

        <view className="example">
          <view className="box radius shadow-di">
            <text>di</text>
          </view>
          <view className="box radius shadow-ei">
            <text>ei</text>
          </view>
          <view className="box radius shadow-fi">
            <text>fi</text>
          </view>
        </view>

        <view className="example">
          <view className="box radius2 shadow-ai">
            <text>ai</text>
          </view>
          <view className="box radius2 shadow-bi">
            <text>bi</text>
          </view>
          <view className="box radius2 shadow-ci">
            <text>ci</text>
          </view>
        </view>

        <view className="example">
          <view className="box shadow-a">
            <text>a</text>
          </view>
          <view className="box shadow-b">
            <text>b</text>
          </view>
          <view className="box shadow-c">
            <text>c</text>
          </view>
        </view>

        <view className="example">
          <view className="box radius shadow-d">
            <text>d</text>
          </view>
          <view className="box radius shadow-e">
            <text>e</text>
          </view>
          <view className="box radius shadow-f">
            <text>f</text>
          </view>
        </view>

        <view className="example">
          <view className="box radius2 shadow-a">
            <text>a</text>
          </view>
          <view className="box radius2 shadow-b">
            <text>b</text>
          </view>
          <view className="box radius2 shadow-c">
            <text>c</text>
          </view>
        </view>
      </scroll-view>
    </view>
  );
};

root.render(<GradientScrollView />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
