// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import HomePage from "@assets/image/homepage.png?inline";

import { type ReactElement, useEffect, useState } from "@lynx-js/react";

import "./App.css";

interface DialogProps {
  show?: boolean;
  children: ReactElement;
}

function Dialog(props: DialogProps) {
  const {
    show = true,
    children,
  } = props;
  const [visible, setVisble] = useState<boolean>(false);
  const [displayContainer, setDisplayContainer] = useState<boolean>(false);

  const maskStyle = visible ? { opacity: 0.6 } : { opacity: 0.0 };

  const contentStyle = visible
    ? {
      opacity: 1,
      transform: "translateY(0%)",
      transition: "opacity 0.3s, transform 0.3s",
    }
    : {
      opacity: 0,
      transform: "translateY(100%)",
      transition: "opacity 0.3s, transform 0.3s",
    };

  useEffect(() => {
    if (show) {
      setDisplayContainer(true);
      setTimeout(() => {
        setVisble(true);
      }, 50);
    } else if (visible) {
      setVisble(false);
      setTimeout(() => {
        setDisplayContainer(false);
      }, 300);
    }
  }, [show]);

  return (
    <view
      className="dialog-container"
      style={{
        visibility: displayContainer ? "visible" : "hidden",
        position: "fixed",
        justifyContent: "flex-end",
      }}
    >
      <view
        className="dialog-mask"
        native-interaction-enabled
        style={maskStyle}
      />
      <view
        className="dialog-content"
        style={contentStyle}
      >
        {children}
      </view>
    </view>
  );
}

export const App = () => {
  const [open, setOpen] = useState<boolean>(true);

  const handleDismissed = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <view style="padding:5px;width:100%; height:100%;">
      <text className="title">ActionSheet Example</text>
      <image
        bindtap={handleOpen}
        mode="aspectFill"
        src={HomePage}
        style="width: 100%; height: 100%;"
      />
      <Dialog show={open}>
        <view
          style={{
            background: "white",
            width: "100vw",
            paddingTop: "2px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingBottom: " 44px",
            borderRadius: "10px 10px 0px 0px",
            alignItems: "center",
          }}
        >
          <text
            style={{ color: "black", fontSize: "14px", fontWeight: "bold", paddingTop: "10px", paddingBottom: "10px" }}
          >
            Get Started
          </text>
          <view
            style={{
              margin: "0px 10px 10px 10px",
              width: "100%",
              border: "0.5px solid lightgray",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <text style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}>
              <view
                style={{
                  borderRadius: "4px",
                  verticalAlign: "center",
                  background: "black",
                  width: "16px",
                  height: "16px",
                  marginRight: "2px",
                }}
              >
                <text style={{ color: "white", fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>1</text>
              </view>
              Introduction
            </text>
            <text style={{ color: "gray", fontWeight: "200", fontSize: "12px", marginTop: "5px" }}>
              Lynx is a stack of cross-platform technologies that help you build truly native user experiences with a
              Web-friendly development experience.
            </text>
          </view>

          <view
            style={{
              margin: "0px 10px 10px 10px",
              width: "100%",
              border: "0.5px solid lightgray",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <text style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}>
              <view
                style={{
                  borderRadius: "4px",
                  verticalAlign: "center",
                  background: "black",
                  width: "16px",
                  height: "16px",
                  marginRight: "2px",
                }}
              >
                <text style={{ color: "white", fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>2</text>
              </view>
              Quick Start
            </text>
            <text style={{ color: "gray", fontWeight: "200", fontSize: "12px", marginTop: "5px" }}>
              Welcome to the Lynx documentation! We will create a Lynx project and start developing.
            </text>
          </view>

          <view
            style={{
              margin: "0px 10px 10px 10px",
              width: "100%",
              border: "0.5px solid lightgray",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <text style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}>
              <view
                style={{
                  borderRadius: "4px",
                  verticalAlign: "center",
                  background: "black",
                  width: "16px",
                  height: "16px",
                  marginRight: "2px",
                }}
              >
                <text style={{ color: "white", fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>3</text>
              </view>
              Integrate With Existing Apps
            </text>
            <text style={{ color: "gray", fontWeight: "200", fontSize: "12px", marginTop: "5px" }}>
              Lynx is not suitable for building a new application from scratch. You need to integrate Lynx (engine) with
              your native mobile app or web app, and load Lynx apps through Lynx views.
            </text>
          </view>

          <text
            bindtap={handleDismissed}
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            Try it
          </text>
        </view>
      </Dialog>
    </view>
  );
};
