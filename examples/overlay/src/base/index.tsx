// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <view
      style={{
        linearOrientation: "vertical",
        width: "100%",
        height: "100%",
        padding: "10px",
      }}
    >
      <overlay visible={visible} style={{ position: "fixed" }}>
        <view
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          bindtap={() => setVisible(false)}
        >
          <view
            catchtap={() => console.log("tap inside the overlay")}
            style={{
              width: "80%",
              height: "50%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <text
              style={{
                fontSize: "30px",
                color: "red",
                textAlign: "center",
                width: "max-content",
              }}
            >
              Biz Content
            </text>
            <text
              catchtap={() => setVisible(false)}
              style={{
                position: "absolute",
                fontSize: "20px",
                color: "white",
                textAlign: "center",
                left: "20px",
                right: "20px",
                bottom: "20px",
                backgroundColor: "green",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              Dismiss
            </text>
          </view>
        </view>
      </overlay>
      <view
        bindtap={() => setVisible(true)}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#12345678",
          borderRadius: "10px",
        }}
      >
        <text
          style={{
            fontSize: "30px",
            color: "red",
            textAlign: "center",
            width: "max-content",
          }}
        >
          Open the overlay
        </text>
      </view>
    </view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
