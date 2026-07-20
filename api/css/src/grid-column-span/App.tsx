import { root } from "@lynx-js/react";
import "./index.scss";

const GridColumnSpan = () => {
  const titleStyle = {
    fontSize: "45rpx" as const,
    fontWeight: "900" as const,
    alignSelf: "center" as const,
    color: "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))" as const,
  };

  return (
    <>
      <text style={titleStyle}>grid-column-span: 1</text>
      <view className="container">
        <text
          className="item"
          style={{
            backgroundColor: "rgb(255,53,26)",
            // @ts-expect-error TODO(types): Support gridColumnSpan in `@lynx-js/types`
            gridColumnSpan: "1",
          }}
        >
          ONE
        </text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
      </view>

      <text style={titleStyle}>grid-column-span: 2</text>
      <view className="container">
        <text
          className="item"
          style={{
            backgroundColor: "rgb(255,53,26)",
            // @ts-expect-error TODO(types): Support gridColumnSpan in `@lynx-js/types`
            gridColumnSpan: "2",
          }}
        >
          ONE
        </text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
      </view>

      <text style={titleStyle}>grid-column-span: 3</text>
      <view className="container">
        <text
          className="item"
          style={{
            backgroundColor: "rgb(255,53,26)",
            // @ts-expect-error TODO(types): Support gridColumnSpan in `@lynx-js/types`
            gridColumnSpan: "3",
          }}
        >
          ONE
        </text>
        <text className="item">TWO</text>
        <text className="item">THREE</text>
      </view>
    </>
  );
};

root.render(<GridColumnSpan />);
