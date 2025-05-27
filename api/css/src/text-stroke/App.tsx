import { root } from "@lynx-js/react";
import "./index.scss";

const TextStroke = () => {
  const textStyle = {
    textStroke: "1px red",
  } as const;

  return (
    // @ts-expect-error TODO(types): Support textStroke in `@lynx-js/types`
    <text style={textStyle}>
      The stroke of this text is red
    </text>
  );
};

root.render(<TextStroke />);
