// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";

import { ItemView } from "./baseView.jsx";

import "./index.scss";

function App() {
  return (
    <view class="container">
      <list
        className="list-wrapper"
        list-type="single"
        span-count={1}
        scroll-orientation="vertical"
        item-snap={{ factor: 0, offset: 0 }}
      >
        {Array.from({ length: 40 }).map((item, index) => (
          <list-item
            item-key={`list-item-${index}`}
            key={`list-item-${index}`}
          >
            <ItemView index={index} />
          </list-item>
        ))}
      </list>
    </view>
  );
}

root.render(<App />);

export default App;
