// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useInitData } from "@lynx-js/react";

export function App() {
  const initData = useInitData();
  const globalProps = lynx.__globalProps;

  return (
    <view>
      <text style={{ fontSize: "30px", color: "orange" }}>I'm in frame!</text>
      <view style={{ border: "3px solid blue" }}>
        <text>{initData.id}</text>
        <text>{initData.name}</text>
        <text>{initData.showDetail ? "true" : "false"}</text>
        <text>{globalProps.message}</text>
        <text>{globalProps.status}</text>
        <text>{globalProps.loaded ? "true" : "false"}</text>
      </view>
    </view>
  );
}

root.render(<App />);
