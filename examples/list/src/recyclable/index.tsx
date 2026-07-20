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
    >
      <list-item
        item-key="list-item-over-flow"
        key="list-item-over-flow"
        style={{
          overflow: "visible",
          height: "40px",
          width: "100%",
        }}
        full-span={true}
        recyclable={false}
      >
        <view
          style={{
            height: "600px",
            backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 0, 0.5), rgb(255, 255, 255, 0))",
          }}
        >
          <text style={{ fontSize: "15px" }}>
            {`The list item with overflow background color and recyclable: false`}
          </text>
        </view>
      </list-item>
      {Array.from({ length: 50 }).map((item, index) => {
        return (
          <list-item
            item-key={`list-item-${index + 1}`}
            key={`list-item-${index + 1}`}
            style={{
              height: "160px",
            }}
          >
            <view
              style={{
                border: "1px solid black",
                height: "100%",
              }}
            >
              <text style={{ height: "100%", fontSize: "20px" }}>{`list-item-${index + 1}`}</text>
            </view>
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
