// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";
import "./index.scss";

const App = () => {
  const [data, setData] = useState<string>();
  const [error, setError] = useState<string | null>(null);

  const handleButtonClick = async () => {
    setError(null);

    try {
      console.log("fetch");
      const response = await lynx.fetch("http://www.postman-echo.com/get");
      const text = await response.text();
      console.log(text);
      setData(text);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  async function streamToArrayBuffer(stream: any) {
    const reader = stream.getReader();
    while (true) {
      console.log("await read");
      const { done, value } = await reader.read();
      console.log("done", done);
      if (done) {
        break;
      } else {
        console.log(value.byteLength);
        // @ts-ignore
        const text = globalThis.TextCodecHelper.decode(value);
        setData(text);
        const currentTime = new Date();
        console.log(text);
        // @ts-ignore
        console.log("duration ", currentTime.getTime() - globalThis.startTime.getTime());
      }
    }
  }

  const handleButtonClickStreaming = async () => {
    setError(null);

    try {
      console.log("fetch streaming");
      // @ts-ignore
      globalThis.startTime = new Date();
      // @ts-ignore
      lynx.fetch("https://e3e0932a-9522-4aec-aec9-12cba94b0c7f.mock.pstmn.io/chunk", {
        // @ts-ignore
        lynxExtension: { "useStreaming": true },
      }).then((response: any) => {
        console.log("response");
        streamToArrayBuffer(response.body);
      });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <view className="container">
      <view className="btn" bindtap={handleButtonClick}>
        <text>fetch</text>
      </view>
      <view className="btn" bindtap={handleButtonClickStreaming}>
        <text>fetchChunk</text>
      </view>
      <scroll-view className="box" scroll-orientation="vertical">
        {error && <text className="error">Error: {error}</text>}
        {data && <text className="data">Data: {data}</text>}
      </scroll-view>
    </view>
  );
};

export default App;
root.render(<App />);
