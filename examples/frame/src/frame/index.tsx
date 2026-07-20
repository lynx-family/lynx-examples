// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { type InitData, root, useState } from "@lynx-js/react";
import type { FrameLoadEvent, GlobalProps } from "@lynx-js/types";

const App = () => {
  const [bindLoadEvent, setBindLoadEvent] = useState({
    url: "",
    statusCode: 0,
    statusMessage: "",
  });
  const [initData, setInitData] = useState<InitData>({
    id: 123,
    name: "Alice",
    showDetail: true,
  });
  const [globalProps, setGlobalProps] = useState<GlobalProps>({
    message: "hello globalProps!",
    status: 42,
    loaded: true,
  });
  const handleLoad = (e: FrameLoadEvent) => {
    setBindLoadEvent(e.detail);
  };

  const frameUrl = `${process.env.ASSET_PREFIX}/in_frame.lynx.bundle`;
  return (
    <view>
      <text style={{ fontSize: "20px", color: "black", padding: "10px" }}>
        Below is the inline text example in frame page.
      </text>

      <frame
        style={{ width: "100%", height: "150px", border: "3px solid red" }}
        src={frameUrl}
        data={initData}
        bindload={handleLoad}
        global-props={globalProps}
      />
      <view
        style={{
          padding: "10px",
          width: "100%",
          height: "100px",
          border: "3px solid red",
        }}
        bindtap={() => setInitData({ ...initData, showDetail: !initData.showDetail })}
      >
        <text style={{ color: "black", fontSize: "20px" }}>
          {initData.showDetail ? "Hide Detail" : "Show Detail"}
        </text>
      </view>
      <text>load url: {bindLoadEvent.url}</text>
      <text>status code: {bindLoadEvent.statusCode}</text>
      <text>status message: {bindLoadEvent.statusMessage}</text>
    </view>
  );
};

root.render(<App />);
