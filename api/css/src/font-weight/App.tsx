import { root } from "@lynx-js/react";
import "./index.scss";

const FontWeight = () => {
  return (
    <scroll-view className="root" scroll-orientation="vertical">
      <text style={{ fontWeight: "100", fontSize: "30px" }}>font-weight: 100</text>
      <text style={{ fontWeight: "200", fontSize: "30px" }}>font-weight: 200</text>
      <text style={{ fontWeight: "300", fontSize: "30px" }}>font-weight: 300</text>
      <text style={{ fontWeight: "400", fontSize: "30px" }}>font-weight: 400</text>
      <text style={{ fontWeight: "500", fontSize: "30px" }}>font-weight: 500</text>
      <text style={{ fontWeight: "600", fontSize: "30px" }}>font-weight: 600</text>
      <text style={{ fontWeight: "700", fontSize: "30px" }}>font-weight: 700</text>
      <text style={{ fontWeight: "800", fontSize: "30px" }}>font-weight: 800</text>
    </scroll-view>
  );
};

root.render(<FontWeight />);
