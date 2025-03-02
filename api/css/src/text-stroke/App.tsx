import { root } from "@lynx-js/react";
import "./index.scss";

const TextStroke = () => {
  const textStyle = {
    textStroke: "1px red",
  };

  return (
    <text style={textStyle}>
      The stroke of this text is red
    </text>
  );
};

root.render(<TextStroke />);
