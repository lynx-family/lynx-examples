// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useLynxGlobalEventListener, useState } from "@lynx-js/react";

const App = () => {
  const [inputContent, setInputContent] = useState("");

  const setNativeProps = (itemId: string, props: Record<string, unknown>) => {
    lynx
      .createSelectorQuery()
      .select(`#${itemId}`)
      .setNativeProps(props)
      .exec();
  };

  const getItemRect = (
    itemId: string,
    success: (
      left: number,
      top: number,
      right: number,
      bottom: number,
      width: number,
      height: number,
    ) => void,
    fail?: (res: any) => void,
  ) => {
    const nodeRef = itemId === "root"
      ? lynx.createSelectorQuery().selectRoot()
      : lynx.createSelectorQuery().select(`#${itemId}`);

    nodeRef
      .invoke({
        method: "boundingClientRect",
        params: {
          relativeTo: "screen",
        },
        success: res => {
          success(
            /* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access*/
            res.left,
            res.top,
            res.right,
            res.bottom,
            res.width,
            res.height,
            /* eslint-enable. no-safe-argument */
          );
        },
        fail: res => {
          fail?.(res);
        },
      })
      .exec();
  };

  const keyboardChanged = (keyboardHeightInPx: number) => {
    if (keyboardHeightInPx === 0) {
      setNativeProps("panel", {
        transform: `translateY(${0}px)`,
        transition: "transform 0.1s",
      });
    } else {
      setNativeProps("panel", {
        transform: `translateY(${-keyboardHeightInPx}px)`,
        transition: "transform 0.3s",
      });
    }
  };

  useLynxGlobalEventListener(
    "keyboardstatuschanged",
    (status: unknown, keyboardHeight: unknown) => {
      console.log(status);
      console.log(keyboardHeight);
      // @ts-ignore
      keyboardChanged(status === "on" ? keyboardHeight : 0);
    },
  );

  return (
    <view style={{ linearOrientation: "vertical", width: "100%", height: "100%", padding: "10px" }}>
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
      <view
        id="panel"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "white",
          height: "100px",
          background: "lightgray",
          border: "1px solid black",
          position: "absolute",
          bottom: "0px",
        }}
      >
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
    </view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
