import { root } from "@lynx-js/react";
import "./index.scss";

const TextStokeColor = () => {
  const textStyleRed = {
    textStrokeWidth: "1px",
    textStrokeColor: "#ff0000",
  };
  const textStyleGreen = {
    textStrokeWidth: "1px",
    textStrokeColor: "green",
  };

  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <text style={textStyleRed}>The stroke of this text is red</text>
      <text style={textStyleGreen}>The stroke of this text is green</text>
    </scroll-view>
  );
};

root.render(<TextStokeColor />);
