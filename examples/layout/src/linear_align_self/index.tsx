import { root } from "@lynx-js/react";

const LinearAlignSelfExample = () => {
  return (
    <scroll-view>
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
            alignSelf: "end",
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

root.render(<LinearAlignSelfExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
