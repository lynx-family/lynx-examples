import { root } from "@lynx-js/react";
import "./index.scss";

const FontOpticalSizing = () => {
  return (
    <view style={{ display: "linear", width: "300px" }}>
      <text>normal</text>
      <text className="variable-font-normal">
        On this particular Thursday, something was moving quietly through the ionosphere many miles above the surface of
        the planet; several somethings in fact, several dozen huge yellow chunky slablike somethings, huge as office
        blocks, silent as birds.
      </text>
      <view style={{ height: "10px" }}></view>
      <text>font-optical-sizing: auto</text>
      <text className="variable-font-normal font-optical-sizing">
        On this particular Thursday, something was moving quietly through the ionosphere many miles above the surface of
        the planet; several somethings in fact, several dozen huge yellow chunky slablike somethings, huge as office
        blocks, silent as birds.
      </text>
    </view>
  );
};

root.render(<FontOpticalSizing />);
