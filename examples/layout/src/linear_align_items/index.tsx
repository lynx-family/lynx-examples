import { root } from "@lynx-js/react";

const LinearAlignItemsExample = () => {
  return (
    <scroll-view>
      <text
        style={{
          fontSize: "45rpx",
          fontWeight: "bold",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          color: "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))",
        }}
      >
        align-items: center
      </text>
      <view
        className="container"
        style={{
          display: "linear",
          linearDirection: "row",
          height: "300px",
          width: "90%",
          padding: "5px",
          margin: "10px",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          border: "1px solid #000",
          borderRadius: "6px",
        }}
      >
        <view
          style={{
            margin: "2px",
            height: "100px",
            width: "30%",
            backgroundColor: "rgb(255,53,26)",
            borderRadius: "6px",
          }}
        >
        </view>
        <view
          style={{
            margin: "2px",
            height: "100px",
            width: "30%",
            backgroundColor: "rgb(0,235,235)",
            borderRadius: "6px",
          }}
        >
        </view>
        <view
          style={{
            margin: "2px",
            height: "100px",
            width: "30%",
            backgroundColor: "rgb(255,53,26)",
            borderRadius: "6px",
          }}
        >
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<LinearAlignItemsExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
