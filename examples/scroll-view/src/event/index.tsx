// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
import { root } from "@lynx-js/react";
import "./index.css";
import { VerticalScrollItem } from "../component/scrollItem.jsx";
const VerticalScrollContainer = () => {
  return (
    <view
      style={{ width: "100%", height: "100%" }}
    >
      <text className="title">ScrollView Example</text>
      <scroll-view
        scroll-orientation="vertical"
        style="width:100%; height: 100%; padding-left: 5px;margin-left:5px"
        bindscroll={(e) => {
          console.log(e.detail);
        }}
        bindscrolltoupper={(e) => {
          console.log(e.detail);
        }}
        bindscrolltolower={(e) => {
          console.log(e.detail);
        }}
      >
        {Array.from({ length: 20 }).map((item, index) => <VerticalScrollItem index={index} />)}
      </scroll-view>
    </view>
  );
};
export default VerticalScrollContainer;
root.render(<VerticalScrollContainer />);
