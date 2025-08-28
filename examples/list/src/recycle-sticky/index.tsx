// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";
import "./index.scss";

const ListContainer = () => {
  return (
    <list
      className="list-container"
      scroll-orientation="vertical"
      list-type="flow"
      span-count={2}
      sticky={true}
      experimental-recycle-sticky-item={true}
    >
      {Array.from({ length: 200 }).map((item, index) => {
        if (index % 4 === 0) {
          return (
            <list-item
              item-key={`list-item-${index}`}
              key={`list-item-${index}`}
              style={{
                height: "40px",
              }}
              full-span={true}
              sticky-top={true}
            >
              <view
                style={{
                  height: "100%",
                  border: "1px solid black",
                  backgroundColor: "antiquewhite",
                }}
              >
                <text style={{ height: "100%", fontSize: "20px" }}>{`sticky-top-list-item-${index}`}</text>
              </view>
            </list-item>
          );
        } else {
          return (
            <list-item
              item-key={`list-item-${index}`}
              key={`list-item-${index}`}
              style={{
                height: "120px",
              }}
            >
              <view
                style={{
                  border: "1px solid black",
                  height: "100%",
                }}
              >
                <text style={{ height: "100%", fontSize: "20px" }}>{`list-item-${index}`}</text>
              </view>
            </list-item>
          );
        }
      })}
    </list>
  );
};

root.render(<ListContainer />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
