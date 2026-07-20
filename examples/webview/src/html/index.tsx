// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useRef, useState } from "@lynx-js/react";

import "./index.scss";

const defaultHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Lynx WebView HTML Demo</title>
</head>
<body style="margin:0;padding:16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;line-height:1.6;">
  <div style="max-width:720px;margin:0 auto;">
    <h1 style="font-size:20px;margin:0 0 8px;">Hello from HTML prop</h1>
    <p style="margin:0 0 8px;font-size:14px;">This content is loaded via the <code>html</code> prop.</p>
    <div style="display:flex;gap:8px;align-items:center;margin-top:12px;">
      <button id="btn" style="padding:6px 10px;border:1px solid #ddd;border-radius:6px;background:#f5f5f5;color:#111;font-size:14px;cursor:pointer;">Click Me</button>
      <span id="status" style="font-size:13px;color:#666;">Status: idle</span>
    </div>
  </div>
  <script>
    (function(){
      var btn = document.getElementById('btn');
      var status = document.getElementById('status');
      if (btn) {
        btn.addEventListener('click', function(){
          status.textContent = 'Status: clicked @ ' + new Date().toLocaleTimeString();
        });
      }
    })();
  </script>
</body>
</html>`;

const updatedHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Lynx WebView HTML Demo</title>
</head>
<body style="margin:0;padding:16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;line-height:1.6;">
  <div style="max-width:720px;margin:0 auto;">
    <h1 style="font-size:20px;margin:0 0 8px;">Updated HTML Content</h1>
    <p style="margin:0 0 8px;font-size:14px;">The <code></scrip>html</code> prop has been updated successfully.</p>
    <div style="display:flex;gap:8px;align-items:center;margin-top:12px;">
      <button id="btn" style="padding:6px 10px;border:1px solid #ddd;border-radius:6px;background:#e0f7fa;color:#00695c;font-size:14px;cursor:pointer;">Click Me</button>
      <span id="status" style="font-size:13px;color:#666;">Status: idle</span>
    </div>
  </div>
  <script>
    (function(){
      var btn = document.getElementById('btn');
      var status = document.getElementById('status');
      if (btn) {
        btn.addEventListener('click', function(){
          status.textContent = 'Status: clicked @ ' + new Date().toLocaleTimeString();
        });
      }
    })();
  </script>
</body>
</html>`;

function App() {
  const webviewRef = useRef<any>(undefined);
  const [html, setHtml] = useState<string>(defaultHtml);

  return (
    <view style="width:100vw;height:100vh">
      <view style="width:100%;height:100px;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 6px 12px rgba(0,0,0,0.15);">
        <text style="color:#ffffff;font-size:28px;font-weight:bold;letter-spacing:3px;text-shadow:0 2px 4px rgba(0,0,0,0.2);">
          WebView HTML Demo
        </text>
        <text style="background:rgba(255,255,255,0.25);padding:6px 20px;border-radius:20px;font-size:14px;color:#ffffff;margin-top:8px;">
          Powered by Lynx
        </text>
      </view>
      <view style="width:100%;padding:16px;display:flex;justify-content:center;">
        <view
          style="background:linear-gradient(135deg, #f093fb 0%, #f5576c 100%);padding:12px 32px;border-radius:25px;box-shadow:0 4px 15px rgba(245,87,108,0.4);"
          bindtap={() => {
            setHtml(updatedHtml);
          }}
        >
          <text style="color:#ffffff;font-size:16px;font-weight:600;letter-spacing:1px;">
            🔄 Update HTML
          </text>
        </view>
      </view>

      <webview
        style={"width: 100vw; height: 100%"}
        ref={webviewRef}
        html={html}
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
