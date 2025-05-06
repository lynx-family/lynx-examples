// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginSass } from "@rsbuild/plugin-sass";
export default defineConfig({
  source: {
    entry: {
      inline_text: "./src/inline_text/index.tsx",
      inline_image: "./src/inline_image/index.tsx",
      inline_view: "./src/inline_view/index.tsx",
      inline_truncation: "./src/inline_truncation/index.tsx",
      text_event: "./src/text_event/index.tsx",
      text_style: "./src/text_style/index.tsx",
      text_layout: "./src/text_layout/index.tsx",
      shadow_and_stroke: "./src/shadow_and_stroke/index.tsx",
      custom_font: "./src/custom_font/index.tsx",
      font_face: "./src/font_face/index.tsx",
      cross_text_selection: "./src/cross_text_selection/index.tsx",
      text_selection: "./src/text_selection/index.tsx",
    },
    alias: {
      "@assets": "./assets",
    },
  },
  plugins: [pluginReactLynx(), pluginSass({}), pluginQRCode()],
  environments: {
    web: {},
    lynx: {},
  },
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/text/dist",
  },
});
