import { root } from "@lynx-js/react";
import "./index.scss";

const TextStokeColor = () => {
  const textStyle1 = {
    textStrokeWidth: "1px",
    textStrokeColor: "red",
  };
  const textStyle2 = {
    textStrokeWidth: "0.5px",
    textStrokeColor: "red",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <text style={textStyle1}>The stroke width of this text is 1px</text>
      <text style={textStyle2}>The stroke width of this text is 0.5px</text>
    </scroll-view>
  );
};

root.render(<TextStokeColor />);
