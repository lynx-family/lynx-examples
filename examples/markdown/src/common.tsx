// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";
import type { ReactNode } from "react";

import "./App.css";

export function renderExample(title: string, children: ReactNode) {
  root.render(
    <scroll-view scroll-orientation="vertical" className="page">
      <text className="title">Markdown: {title}</text>
      <view className="snippet-card">
        {children}
      </view>
    </scroll-view>,
  );

  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept();
  }
}
