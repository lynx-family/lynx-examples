// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";
import { ItemView } from "./baseView.jsx";

const ListContainer = () => {
  return (
    <list
      scroll-orientation="vertical"
      list-type="single"
      span-count={1}
      preload-buffer-count={1} // add buffer
      style={{
        width: "100%",
        height: "100vh",
        listMainAxisGap: "5px",
        padding: "10px",
        zIndex: "0",
      }}
    >
      <list-item item-key={`list-item-over-flow`} key={`list-item-list-item-over-flow`} style={{ zIndex: "1" }}>
        <view style={{ width: "100%", height: "20px", backgroundColor: "red" }}>
          <text
            style={{
              fontSize: "16px",
              paddingLeft: "6px",
              paddingTop: "6px",
              height: "40px",
              overflow: "visible",
              background: "blue",
            }}
          >
            {`overflowView:z-index:1`}
          </text>
        </view>
      </list-item>

      {Array.from({ length: 50 }).map((item, index) => {
        return (
          <list-item
            item-key={`list-item-${index}`}
            key={`list-item-${index}`}
          >
            <ItemView index={index} />
          </list-item>
        );
      })}
    </list>
  );
};

root.render(<ListContainer />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
