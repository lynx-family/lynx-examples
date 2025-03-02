import { root } from "@lynx-js/react";
import "./index.scss";

const TextIndent = () => {
  const textStyle = {
    textIndent: "10px",
  };

  return (
    <text style={textStyle}>
      hello world, Now we can use text-indent in the text node
    </text>
  );
};

root.render(<TextIndent />);
