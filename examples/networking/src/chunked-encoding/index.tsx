import { root, useEffect, useState } from "@lynx-js/react";

import "./index.scss";

const App = () => {
  const [chunks, setChunks] = useState<string[]>([]);
  const testUrl = "https://e3e0932a-9522-4aec-aec9-12cba94b0c7f.mock.pstmn.io/chunk";
  const chunkedFetch = async () => {
    const response = await lynx.fetch(testUrl, {
      lynxExtension: { useStreaming: true },
    });
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      } else {
        const text = TextCodecHelper.decode(value);
        setChunks(prevChunks => [...prevChunks, text]);
      }
    }
  };

  useEffect(() => {
    chunkedFetch();
  }, []);

  return (
    <scroll-view scroll-y className="scroll-view">
      {chunks.map((chunk, index) => (
        <view key={index} className="chunk-item">
          <text>{chunk}</text>
        </view>
      ))}
    </scroll-view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
