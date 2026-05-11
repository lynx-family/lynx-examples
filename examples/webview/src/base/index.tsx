// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useRef, useState } from "@lynx-js/react";

import "./index.scss";

function App() {
  const webviewRef = useRef<any>(undefined);
  const [url, setUrl] = useState<string>("https://www.github.com");

  return (
    <view style="width:100vw;height:100vh">
      <view style="width:100%;height:100px;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 6px 12px rgba(0,0,0,0.15);">
        <text style="color:#ffffff;font-size:28px;font-weight:bold;letter-spacing:3px;text-shadow:0 2px 4px rgba(0,0,0,0.2);">
          WebView Demo
        </text>
        <text style="background:rgba(255,255,255,0.25);padding:6px 20px;border-radius:20px;font-size:14px;color:#ffffff;margin-top:8px;">
          Powered by Lynx
        </text>
      </view>
      <view style="width:100%;padding:16px;display:flex;justify-content:center;">
        <view
          style="background:linear-gradient(135deg, #f093fb 0%, #f5576c 100%);padding:12px 32px;border-radius:25px;box-shadow:0 4px 15px rgba(245,87,108,0.4);"
          bindtap={() => {
            setUrl("https://www.google.com");
          }}
        >
          <text style="color:#ffffff;font-size:16px;font-weight:600;letter-spacing:1px;">
            🔄 Switch to Google
          </text>
        </view>
      </view>

      <webview
        style={"width: 100vw; height: 100%"}
        ref={webviewRef}
        src={url}
        bindload={() => {
          const jsCode = `
            const javascriptFunc = (arg) => {
                console.log("execute");
                if (window) {
                    window.postMessage("Hello from JavaScript " + arg);
                }
            };
            javascriptFunc('good');
          `;
          webviewRef?.current
            ?.invoke({
              method: "eval",
              params: {
                func: jsCode,
              },
            })
            .exec();
        }}
        bindmessage={(e: any) => {
          console.log("message: ", e.detail.msg);
        }}
      />
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
