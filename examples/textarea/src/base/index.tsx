// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";

const App = () => {
  const [inputContent, setInputContent] = useState("");

  return (
    <view style={{ linearOrientation: "vertical", width: "100%", height: "100%", padding: "20px" }}>
      <view style={{ width: "100%", padding: "10px", backgroundColor: "#87654321", borderRadius: "10px" }}>
        <textarea
          style={{ width: "100%", color: "blue", fontSize: "50px" }}
          placeholder="Title"
          maxlines={2}
          bindinput={(res: any) => {
            console.log(res.detail.value);
            setInputContent(res.detail.value);
          }}
        />
      </view>

      <view
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "20px",
          backgroundColor: "#12345678",
          borderRadius: "10px",
        }}
      >
        {
          <textarea
            style={{ width: "100%", height: "300px", fontSize: "30px" }}
            placeholder="Content"
            bindinput={(res: any) => {
              console.log(res.detail.value);
              setInputContent(res.detail.value);
            }}
          />
        }
      </view>
    </view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
