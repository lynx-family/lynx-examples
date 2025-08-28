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

  async function streamToArrayBuffer(stream: ReadableStream) {
    const reader = stream.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      } else {
        const text = TextCodecHelper.decode(value);
        setData(text);
      }
    }
  }

  const handleButtonClickStreaming = async () => {
    setError(null);

    console.log("fetch streaming");
    lynx.fetch("https://e3e0932a-9522-4aec-aec9-12cba94b0c7f.mock.pstmn.io/chunk", {
      lynxExtension: { "useStreaming": true },
    }).then((response) => {
      streamToArrayBuffer(response.body);
    }).catch((err: Error) => {
      setError(err.message);
    });
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
