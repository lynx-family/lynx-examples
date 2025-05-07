import { root } from "@lynx-js/react";

import "./index.scss";

const GridExample = () => {
  return (
    <scroll-view>
      <text className="title">
        grid-template-columns: 1fr 100px 2fr;
      </text>
      <text className="title">
        grid-template-rows: 1fr 1fr;
      </text>
      <view
        className="container"
        style={{ height: "120px", gridTemplateColumns: "1fr 100px 2fr", gridTemplateRows: "1fr 1fr" }}
      >
        <text className="item" style={{ gridRowStart: "span 2" }}>span 2</text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
        <text className="item" style={{ gridColumnStart: "span 2" }}>span 2</text>
      </view>

      <text className="title">
        grid-template-columns: 20% max-content minmax(50px, max-content);
      </text>
      <view
        className="container"
        style={{
          gridTemplateColumns: "20% max-content minmax(50px, max-content)",
          height: "max-content",
        }}
      >
        <text className="item">20%</text>
        <text className="item" style={{ fontSize: "27px" }}>NO WRAP!</text>
        <text className="item">min-width:50px, will fit the container</text>
      </view>

      <text className="title">
        grid-template-columns: 1fr 1fr;
      </text>
      <text className="title">grid-template-rows: 1fr max-content 1fr;</text>
      <view
        className="container"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr max-content 1fr",
          height: "220px",
        }}
      >
        <text className="item" style={{ gridColumnStart: "span 2" }}>span 2</text>
        <text className="item">max-content: will take the maximum size of the items as the row size</text>
        <text className="item">THREE</text>
        <text className="item" style={{ gridColumnStart: "-2" }}>columnStart: -2</text>
      </view>
    </scroll-view>
  );
};

root.render(<GridExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
