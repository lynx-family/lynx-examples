// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";
import { HorizontalView } from "./horizontalView.jsx";
import { VerticalView } from "./verticalView.jsx";

const ListContainer = () => {
  return (
    <view
      style={{
        width: "100%",
        height: "100vh",
        display: "linear",
      }}
    >
      <list
        scroll-orientation="horizontal"
        list-type="single"
        span-count={1}
        style={{
          width: "100%",
          height: "20vh",
        }}
        item-snap={{ factor: 0, offset: -20 }}
      >
        {Array.from({ length: 50 }).map((item, index) => {
          return (
            <list-item
              item-key={`list-item-${index}`}
              key={`list-item-${index}`}
            >
              <HorizontalView index={index} />
            </list-item>
          );
        })}
      </list>
      <list
        scroll-orientation="vertical"
        list-type="single"
        span-count={1}
        style={{
          width: "100%",
          height: "80vh",
        }}
        item-snap={{ factor: 0, offset: 0 }}
      >
        {Array.from({ length: 50 }).map((item, index) => {
          return (
            <list-item
              item-key={`list-item-${index}`}
              key={`list-item-${index}`}
            >
              <VerticalView index={index} />
            </list-item>
          );
        })}
      </list>
    </view>
  );
};

root.render(<ListContainer />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
