import { root } from "@lynx-js/react";
import "./index.scss";

const TextStokeColor = () => {
  const textStyle1 = {
    textStrokeWidth: "1px",
    textStrokeColor: "red",
  } as const;
  const textStyle2 = {
    textStrokeWidth: "0.5px",
    textStrokeColor: "red",
  } as const;

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      {/* @ts-expect-error TODO(types): Support textStroke in `@lynx-js/types` */}
      <text style={textStyle1}>The stroke width of this text is 1px</text>
      {/* @ts-expect-error TODO(types): Support textStroke in `@lynx-js/types` */}
      <text style={textStyle2}>The stroke width of this text is 0.5px</text>
    </scroll-view>
  );
};

root.render(<TextStokeColor />);
