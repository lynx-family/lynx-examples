// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      base: "./src/base/index.tsx",
      itemSnap: "./src/itemsnap/index.tsx",
      horizontalSnap: "./src/horizontal-snap/index.tsx",
      loadMore: "./src/loadmore/index.tsx",
      flow: "./src/flow/index.tsx",
      waterfall: "./src/waterfall/index.tsx",
      sticky: "./src/sticky/index.tsx",
      asyncRendering: "./src/async-rendering/index.tsx",
      zIndex: "./src/zIndex/index.tsx",
      recyclable: "./src/recyclable/index.tsx",
      recycleSticky: "./src/recycle-sticky/index.tsx",
    },
  },
  plugins: [
    pluginReactLynx(),
    pluginSass(),
    pluginQRCode(),
    pluginTypeCheck(),
  ],
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/list/dist",
    filename: "[name].[platform].bundle",
  },
  environments: {
    lynx: {},
    web: {},
  },
});
