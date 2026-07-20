// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useRef, useState } from "@lynx-js/react";
import type { NodesRef } from "@lynx-js/types";

import loadingGif from "../assets/bg_flower.gif";
import image0 from "../assets/item_0.jpg";
import image1 from "../assets/item_1.jpg";
import image2 from "../assets/item_2.jpg";

const App = () => {
  const refreshRefs = useRef<Record<string, NodesRef | null>>({});
  const [currentPage, setCurrentPage] = useState(0);
  const coverImages = [image0, image1, image2];
  const tabs = ["Featured", "Nearby", "Saved"];
  const listPages = ["A", "B", "C"];
  const listItems = Array.from({ length: 24 }, (_, index) => {
    return {
      image: coverImages[index % coverImages.length],
      title: `Scenic stop ${index + 1}`,
      subtitle: index % 2 === 0 ? "Quiet path with a wide lookout" : "Short trail near the water",
      tag: index % 3 === 0 ? "Fresh" : (index % 3 === 1 ? "Calm" : "Open"),
    };
  });

  const onStartRefresh = (page: string) => {
    setTimeout(() => {
      refreshRefs.current[page]?.invoke({
        method: "finishRefresh",
      }).exec();
    }, 2000);
  };

  return (
    <view
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        display: "flex",
        padding: "24px",
        backgroundColor: "#F6F7F9",
        boxSizing: "border-box",
      }}
    >
      <text style={{ fontSize: "32px", fontWeight: "700", color: "#202124" }}>Scroll Coordinator</text>
      <scroll-coordinator
        bounces={false}
        refresh-mode="page"
        style={{
          marginTop: "24px",
          width: "100%",
          height: "100%",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#EDEFF2",
        }}
      >
        {
          /*
          Required, it can be scrolled in scroll coordinator without affecting the layout,
          so it is recommended to set position: absolute.
          No need to place scroll-view or list inside.
        */
        }
        <scroll-coordinator-header
          style={{
            position: "absolute",
            width: "100%",
            height: "360rpx",
          }}
        >
          <view
            style={{
              width: "100%",
              height: "360rpx",
              overflow: "hidden",
            }}
          >
            <image
              mode="aspectFill"
              src={image0}
              style={{
                width: "100%",
                height: "360rpx",
              }}
            />
            <view
              style={{
                position: "absolute",
                left: "0",
                bottom: "0",
                width: "100%",
                padding: "24rpx",
                backgroundColor: "#00000066",
                boxSizing: "border-box",
              }}
            >
              <text style={{ fontSize: "34rpx", fontWeight: "700", color: "#FFFFFF" }}>Forest Ridge</text>
              <text style={{ marginTop: "8rpx", fontSize: "22rpx", color: "#FFFFFF" }}>
                Sunrise views, shaded paths, and easy waypoints.
              </text>
            </view>
          </view>
        </scroll-coordinator-header>

        {
          /*
          Required, its size must be the same as scroll coordinator's size.
          If there is a toolbar, subtract its height.
          After the header is completely collapsed, the slot will occupy the entire scroll coordinator viewport.
          In its child nodes, scrolling can be achieved and can continue after the header is collapsed.
          When placing scroll-view, add enable-new-nested on scroll-view to support nested scrolling interactions.
        */
        }
        <scroll-coordinator-slot
          style={{
            width: "100%",
            flexDirection: "column",
            flex: "1",
            display: "flex",
          }}
        >
          {
            /*
            Optional sticky area. When the header is completely collapsed, it will stay at the top of the slot.
            You can place Tabs modules or any other content here.
            By default it accepts up and down dragging gestures. Use enable-drag to control it.
          */
          }
          <scroll-coordinator-slot-drag style={{ width: "100%" }}>
            <view
              style={{
                width: "100%",
                height: "96rpx",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "0 16rpx",
                backgroundColor: "#FFFFFF",
                boxSizing: "border-box",
              }}
            >
              {tabs.map((tab, index) => {
                const selected = currentPage === index;

                return (
                  <view
                    style={{
                      height: "56rpx",
                      padding: "0 20rpx",
                      marginRight: "12rpx",
                      justifyContent: "center",
                      borderRadius: "8px",
                      backgroundColor: selected ? "#DDF3E5" : "#EEF1F4",
                    }}
                  >
                    <text
                      style={{
                        fontSize: "22rpx",
                        fontWeight: selected ? "700" : "400",
                        color: selected ? "#1F7A4D" : "#4E5969",
                      }}
                    >
                      {tab}
                    </text>
                  </view>
                );
              })}
            </view>
          </scroll-coordinator-slot-drag>
          <viewpager
            style={{
              width: "100%",
              height: "100%",
              flex: "1",
              display: "flex",
              flexDirection: "row",
            }}
            bindwillchange={(e) => {
              setCurrentPage(e.detail.index);
            }}
          >
            {listPages.map((page) => {
              return (
                <viewpager-item
                  style={{
                    width: "100%",
                    height: "100%",
                    flexShrink: 0,
                  }}
                >
                  <refresh
                    ref={(element: NodesRef | null) => {
                      refreshRefs.current[page] = element;
                    }}
                    bindstartrefresh={() => {
                      onStartRefresh(page);
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <refresh-header
                      style={{
                        width: "100%",
                        height: "104rpx",
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#F6F7F9",
                      }}
                    >
                      <image
                        mode="aspectFit"
                        src={loadingGif}
                        style={{
                          width: "48rpx",
                          height: "48rpx",
                        }}
                      />
                      <text style={{ marginTop: "8rpx", fontSize: "20rpx", color: "#4E5969" }}>
                        Refreshing routes...
                      </text>
                    </refresh-header>
                    <list
                      scroll-orientation="vertical"
                      list-type="single"
                      span-count={1}
                      style={{
                        width: "100%",
                        height: "100%",
                        listMainAxisGap: "12px",
                        padding: "12px",
                        boxSizing: "border-box",
                      }}
                    >
                      {listItems.map((item, index) => {
                        return (
                          <list-item
                            item-key={`list-${page}-item-${index}`}
                            key={`list-${page}-item-${index}`}
                          >
                            <view
                              style={{
                                width: "100%",
                                height: "144rpx",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                padding: "12rpx",
                                borderRadius: "8px",
                                backgroundColor: "#FFFFFF",
                                boxSizing: "border-box",
                              }}
                            >
                              <image
                                mode="aspectFill"
                                src={item.image}
                                style={{
                                  width: "120rpx",
                                  height: "120rpx",
                                  borderRadius: "8px",
                                }}
                              />
                              <view
                                style={{
                                  marginLeft: "18rpx",
                                  flex: 1,
                                  flexDirection: "column",
                                }}
                              >
                                <text style={{ fontSize: "28rpx", fontWeight: "700", color: "#202124" }}>
                                  {`${item.title} ${page}`}
                                </text>
                                <text style={{ marginTop: "8rpx", fontSize: "22rpx", color: "#5F6673" }}>
                                  {item.subtitle}
                                </text>
                                <text style={{ marginTop: "10rpx", fontSize: "20rpx", color: "#2D7D46" }}>
                                  {item.tag}
                                </text>
                              </view>
                            </view>
                          </list-item>
                        );
                      })}
                    </list>
                  </refresh>
                </viewpager-item>
              );
            })}
          </viewpager>
        </scroll-coordinator-slot>
      </scroll-coordinator>
    </view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
