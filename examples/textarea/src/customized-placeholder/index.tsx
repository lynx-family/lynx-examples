// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import "./index.scss";

const App = () => {
  const [inputContent, setInputContent] = useState("");

  return (
    <view style={{ linearOrientation: "vertical", width: "100%", height: "100%", padding: "20px" }}>
      <text style={{ fontSize: "15px" }}>Customized Placeholder And Caret Color</text>
      <view
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#87654321",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <textarea
          style={{ width: "100%" }}
          placeholder=".textarea::placeholder {
                              color: oragne
                            }"
          class="textarea"
          bindinput={(res: any) => {
            console.log(res.detail.value);
            setInputContent(res.detail.value);
          }}
        />
      </view>
    </view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
