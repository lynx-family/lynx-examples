// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useRef, useState } from "@lynx-js/react";
import type { NodesRef } from "@lynx-js/types";

const App = () => {
  const refreshViewRef = useRef<NodesRef>(null);
  const [refreshCount, setRefreshCount] = useState<number>(0);
  const [items, setItems] = useState<number[]>([0, 1, 2, 4, 5, 6, 7, 8]);
  const onStartRefresh = () => {
    console.log("on start refresh");
    setTimeout(() => {
      refreshViewRef.current?.invoke({
        method: "finishRefresh",
      }).exec();
      setItems([0, 1, 2, 4, 5, 6, 7, 8]);
      setRefreshCount(refreshCount + 1);
    }, 1000);
  };

  return (
    <view
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      {
        // @ts-expect-error type error


          <refresh ref={refreshViewRef} style={{ width: "100%", height: "100%" }} bindstartrefresh={onStartRefresh}>
            <refresh-header
              style={{
                width: "100%",
                height: "50px",
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "red",
              }}
            >
              <text style={{ fontSize: "30px" }}>Refreshing...</text>
            </refresh-header>
            <list style={{ width: "100%", height: "100%" }} scroll-orientation="vertical" bounces={true}>
              {items.map((item, index) => {
                return (
                  <list-item key={item + ""} item-key={item + ""}>
                    <text
                      style={{
                        "height": "200px",
                        width: "100%",
                        fontSize: "100px",
                        color: refreshCount % 2 === 0 ? "red" : "green",
                        padding: "25px",
                        textAlign: "center",
                        border: "1px solid black",
                      }}
                    >
                      {`item-${index}`}
                    </text>
                  </list-item>
                );
              })}
            </list>
          </refresh>

      }
    </view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
