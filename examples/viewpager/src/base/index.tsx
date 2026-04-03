// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";

const pages = [
  { title: "Page 1", color: "#FBE2E1" },
  { title: "Page 2", color: "#DCEEFF" },
  { title: "Page 3", color: "#E5F7DF" },
];

const App = () => {
  const [current, setCurrent] = useState<number>(0);

  return (
    <view
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        padding: "24px",
        backgroundColor: "#FFFFFF",
        boxSizing: "border-box",
      }}
    >
      <text style={{ fontSize: "32px", fontWeight: "700", color: "#1F2329" }}>ViewPager Placeholder</text>
      <text style={{ marginTop: "12px", fontSize: "24px", color: "#4E5969" }}>
        {`Current page: ${current + 1}/${pages.length}`}
      </text>
      <view
        style={{ marginTop: "24px", width: "100%", height: "50%", flex: 1, borderRadius: "24px", overflow: "hidden" }}
      >
        <viewpager
          style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row" }}
          bindchange={(e) => {
            setCurrent(e.detail.index);
          }}
        >
          {pages.map((page) => {
            return (
              <viewpager-item style={{ width: "100%", height: "100%", flexShrink: 0 }}>
                <view
                  key={page.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: page.color,
                  }}
                >
                  <text style={{ fontSize: "48px", fontWeight: "600", color: "#1F2329" }}>{page.title}</text>
                </view>
              </viewpager-item>
            );
          })}
        </viewpager>
      </view>
    </view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
