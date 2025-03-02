// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import type { ReactElement } from "react";

const RenderExample = () => {
  return (
    <view
      style={{
        borderLeftWidth: "15px",
        borderRightWidth: "60px",
        borderTopWidth: "100px",
        borderBottomWidth: "50px",
        borderColor: "green red",
        backgroundColor: "blue",
        width: "100vw",
        height: "500px",
      }}
    />
  );
};

const LayoutExample = () => {
  return (
    <view
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <text
        style={{
          fontSize: "50px",
          padding: "30px",
          background: "red",
        }}
      >
        Hello World
      </text>
      <text
        style={{
          fontSize: "50px",
          marginTop: "50px",
          padding: "30px",
          background: "green",
        }}
      >
        Hello Lynx
      </text>
    </view>
  );
};

export const App = () => {
  const examples: ReactElement[] = [
    <RenderExample />,
    <LayoutExample />,
  ];

  return (
    <scroll-view scroll-orientation="vertical" style="padding:5px;width:100%; height:100%;">
      <text className="title">View Examples</text>
      {examples.map((example, index) => example)}
    </scroll-view>
  );
};
