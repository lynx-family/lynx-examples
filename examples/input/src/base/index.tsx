// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";

const App = () => {
  const [inputContent, setInputContent] = useState("");

  return (
    <view style={{ linearOrientation: "vertical", width: "100%", height: "100%", padding: "10px" }}>
      <view style={{ width: "100%", padding: "10px", backgroundColor: "#12345678", borderRadius: "10px" }}>
        {
          // @ts-ignore


            <input
              style={{ width: "100%", color: "blue", fontSize: "30px" }}
              placeholder="search"
              bindinput={(res: any) => {
                console.log(res.detail.value);
                setInputContent(res.detail.value);
              }}
            />

        }
      </view>
      <scroll-view
        scroll-orientation="vertical"
        list-type="single"
        span-count={1}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {Array.from({ length: 50 }).map((item, index) => {
          return (
            <text style={{ fontSize: "20px", color: "gray", padding: "10px" }}>
              {`item-${index}${inputContent ? `-${inputContent}` : ""}`}
            </text>
          );
        })}
      </scroll-view>
    </view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
