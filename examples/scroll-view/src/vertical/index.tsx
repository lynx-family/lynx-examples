import { root } from "@lynx-js/react";
import { VerticalScrollItem } from "../component/scrollItem.jsx";

const VerticalScrollContainer = () => {
  return (
    <view style={{ width: "100%", height: "100%" }}>
      <text className="title">ScrollView Example</text>
      <scroll-view
        scroll-orientation="vertical"
        style={{ width: "100%", height: "100%", paddingLeft: "10px", marginLeft: "5px" }}
      >
        {Array.from({ length: 20 }).map((item, index) => <VerticalScrollItem index={index} />)}
      </scroll-view>
    </view>
  );
};

root.render(<VerticalScrollContainer />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
