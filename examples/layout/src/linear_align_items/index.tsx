import { root } from "@lynx-js/react";

const LinearAlignItemsExample = () => {
  return (
    <>
      <text
        style={{
          fontSize: "45rpx",
          fontWeight: "bold",
          alignSelf: "center",
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
          width: "300px",
          padding: "5px",
          margin: "10px",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          border: "1px solid #000",
          borderRadius: "6px",
        }}
      >
        <view
          style={{
            margin: "2px",
            height: "100px",
            width: "80px",
            backgroundColor: "rgb(255,53,26)",
            borderRadius: "6px",
          }}
        >
        </view>
        <view
          style={{
            margin: "2px",
            height: "100px",
            width: "80px",
            backgroundColor: "rgb(0,235,235)",
            borderRadius: "6px",
          }}
        >
        </view>
        <view
          style={{
            margin: "2px",
            height: "100px",
            width: "80px",
            backgroundColor: "rgb(255,53,26)",
            borderRadius: "6px",
          }}
        >
        </view>
      </view>
    </>
  );
};

root.render(<LinearAlignItemsExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
