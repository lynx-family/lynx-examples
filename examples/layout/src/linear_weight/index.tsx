import { root } from "@lynx-js/react";

const LinearAlginItemsExample = () => {
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
        linear-weight: 0.5 : 2 : 0.5
      </text>
      <view
        style={{
          display: "linear",
          linearOrientation: "vertical",
          height: "300px",
          width: "90%",
          padding: "5px",
          margin: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1px solid #000",
          borderRadius: "6px",
        }}
      >
        <view
          style={{
            margin: "5px",
            // @ts-expect-error no types supported yet
            linearWeight: "0.5",
            backgroundColor: "rgb(255,53,26)",
            borderRadius: "6px",
          }}
        >
        </view>
        <view
          style={{
            margin: "5px",
            // @ts-expect-error no types supported yet
            linearWeight: "2",
            backgroundColor: "rgb(0,235,235)",
            borderRadius: "6px",
          }}
        >
        </view>
        <view
          style={{
            margin: "5px",
            // @ts-expect-error no types supported yet
            linearWeight: "0.5",
            backgroundColor: "rgb(255,53,26)",
            borderRadius: "6px",
          }}
        >
        </view>
      </view>
    </scroll-view>
  );
};

root.render(<LinearAlginItemsExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
