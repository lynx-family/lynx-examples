// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";
import { ItemView } from "./flowItemView.jsx";

import "./index.scss";

const ListContainer = () => {
  return (
    <list
      className="list-container"
      list-type="flow"
      span-count={3}
      scroll-orientation="vertical"
    >
      {Array.from({ length: 40 }).map((item, index) => {
        if (index % 4 == 3) {
          return (
            <list-item
              item-key={`list-item-${index}`}
              key={`list-item-${index}`}
              full-span={true}
              className="full-span-item"
            >
              <text className="full-span-text">{`full span item`}</text>
            </list-item>
          );
        } else {
          return (
            <list-item
              item-key={`list-item-${index}`}
              key={`list-item-${index}`}
            >
              <ItemView index={index} />
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
