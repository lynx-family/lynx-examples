// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
import { root } from "@lynx-js/react";
import { VerticalScrollItem } from "../component/scrollItem.jsx";
import { StickyItem } from "./stickyItem.jsx";

const VerticalScrollContainer = () => {
  return (
    <view style={{ width: "100%", height: "100%" }}>
      <text className="title">ScrollView Example</text>
      <scroll-view
        scroll-orientation="vertical"
        style={{ width: "100%", height: "100%", paddingLeft: "5px", marginTop: "5px", marginLeft: "5px" }}
      >
        {Array.from({ length: 20 }).map((item, index) => {
          if (index == 2) {
            return <StickyItem index={index} height={100} sticky={true} />;
          }
          return <VerticalScrollItem index={index} />;
        })}
      </scroll-view>
    </view>
  );
};
export default VerticalScrollContainer;
root.render(<VerticalScrollContainer />);
