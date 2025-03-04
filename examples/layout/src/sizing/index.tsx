import { root } from "@lynx-js/react";

import "./index.scss";

const SizingExample = () => {
  return (
    <scroll-view>
      <text className="box">Auto Sized Element</text>
      <text className="box" style={{ width: "fit-content" }}>
        Size Decided by Content
      </text>
      <text className="box" style={{ width: "150px", height: "150px" }}>
        Size as Specified
      </text>
      <text className="box" style={{ width: "50%" }}>
        Specify Size with Percentage
      </text>
      <text className="box" style={{ maxWidth: "100px" }}>
        Limited By Max Size
      </text>
      <text className="box" style={{ minHeight: "100px" }}>
        Expanded By Min Size
      </text>
    </scroll-view>
  );
};

root.render(<SizingExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
