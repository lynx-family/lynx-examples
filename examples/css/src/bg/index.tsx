import { root } from "@lynx-js/react";

import "./index.scss";

const GradientText = ({ text, className }: { text: string; className: string }) => {
  return (
    <view style={{ display: "linear" }}>
      <text>{text}</text>
      <view className={className}></view>
    </view>
  );
};
const ScrollViewComponent = () => {
  const gradientData = [
    {
      text: "background: linear-gradient(to top right, red, blue) with alpha",
      className: "background-gradient-to-top-right",
    },
    {
      text: "background: linear-gradient(to top left, red, blue) with alpha",
      className: "background-gradient-to-top-left",
    },
    {
      text: "background: linear-gradient(to bottom right, red, blue) with alpha",
      className: "background-gradient-to-bottom-right",
    },
    {
      text: "background: linear-gradient(to bottom left, red, blue) with alpha",
      className: "background-gradient-to-bottom-left",
    },
    {
      text: "background: linear-gradient(#ff0000, #0000ff) with alpha",
      className: "background-gradient-hex",
    },
    {
      text: "background: linear-gradient(red, blue)",
      className: "background-gradient",
    },
    {
      text: "background: linear-gradient(to top, red, blue)",
      className: "background-gradient-to-top",
    },
    {
      text: "background: linear-gradient(to bottom, red, blue)",
      className: "background-gradient-to-bottom",
    },
    {
      text: "background: linear-gradient(to left, red, blue)",
      className: "background-gradient-to-left",
    },
    {
      text: "background: linear-gradient(to right, red, blue)",
      className: "background-gradient-to-right",
    },
    {
      text: "background: linear-gradient mix 1",
      className: "background-gradient-grad1 background-gradient-mix",
    },
    {
      text: "background: linear-gradient mix 2",
      className: "background-gradient-grad2 background-gradient-mix",
    },
    {
      text: "background: linear-gradient mix 3",
      className: "background-gradient-grad3 background-gradient-mix",
    },
    {
      text: "background: linear-gradient mix 4",
      className: "background-gradient-grad4 background-gradient-mix",
    },
    {
      text: "background: linear-gradient mix 5",
      className: "background-gradient-grad5 background-gradient-mix",
    },
    {
      text: "background: linear-gradient mix 6",
      className: "background-gradient-grad6 background-gradient-mix",
    },
    {
      text: "background: linear-gradient mix 7",
      className: "background-gradient-grad7 background-gradient-mix",
    },
    {
      text: "background: linear-gradient mix 8",
      className: "background-gradient-grad8 background-gradient-mix",
    },
  ];
  return (
    <view style={{ width: "100%", height: "100%", flexDirection: "column" }}>
      <scroll-view
        scroll-orientation="vertical"
        style={{ flexDirection: "column", width: "100%", height: "100%" }}
      >
        {gradientData.map((item, index) => (
          <GradientText
            key={index}
            text={item.text}
            className={item.className}
          />
        ))}
      </scroll-view>
    </view>
  );
};
root.render(<ScrollViewComponent />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
