// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { VerticalScrollItem } from "../component/scrollItem.jsx";
import { HorizontalScrollItem } from "../component/scrollItem.jsx";

export const App = () => {
  return (
    <view style={{ width: "100%", height: "100%", padding: 10, display: "linear", marginTop: 20 }}>
      <text style={{ fontSize: "20px", fontWeight: "bold", height: "40px", paddingLeft: "10px", marginTop: "10px" }}>
        Horizontal ScrollView Example
      </text>
      <scroll-view
        scroll-orientation="horizontal"
        style={{ width: "calc(100% - 10px)", height: "100px", paddingLeft: "5px", borderRadius: "10px" }}
      >
        {Array.from({ length: 20 }).map((item, index) => <HorizontalScrollItem index={index} />)}
      </scroll-view>
      <text style={{ fontSize: "20px", fontWeight: "bold", height: "40px", paddingLeft: "10px", marginTop: "10px" }}>
        Vertical ScrollView Example
      </text>
      <scroll-view
        scroll-orientation="vertical"
        style={{ width: "100%", height: "100%", paddingLeft: "5px", marginLeft: "5px" }}
      >
        {Array.from({ length: 20 }).map((item, index) => <VerticalScrollItem index={index} />)}
      </scroll-view>
    </view>
  );
};
