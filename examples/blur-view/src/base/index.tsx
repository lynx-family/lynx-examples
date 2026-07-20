// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";

import lynxLogo from "../assets/lynx-logo.png";

const App = () => {
  return (
    <view style="height:100%;width:100%;background-color:#1d3458" id="blur-target-view" flatten={false}>
      <view
        flatten={false}
        style={`position:absolute;overflow:hidden; width:100%;height:450px;background-size:100% 100%;background-image:url(${lynxLogo})`}
      />
      <text style="position:absolute;top:150px;left:50px;color:black;font-weight:bold;font-size:40px;">Hello Lynx</text>
      <view
        flatten={false}
        style="overflow:hidden;width:100%;height:450px;"
      >
        <blur-view
          android-capture-target="blur-target-view"
          blur-radius="25"
          style="width:80%;height:220px;margin-top:80px;margin-left:10%;justify-content:center;align-items:center;border-radius:24px"
        >
          <text style="font-size:28px;color:black;">Blur</text>
        </blur-view>
      </view>
    </view>
  );
};

root.render(<App />);
