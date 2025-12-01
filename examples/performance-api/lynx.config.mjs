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
      "fcp-entry": "./src/fcp-entry/index.tsx",
      "actual-fmp-entry": "./src/actual-fmp-entry/index.tsx",
      "pipeline-entry": "./src/pipeline-entry/index.tsx",
      "host-platform-timing": "./src/host-platform-timing/index.tsx",
      "reload-bundle-entry": "./src/reload-bundle-entry/index.tsx",
      "lazy-bundle-entry": "./src/lazy-bundle-entry/index.tsx",
      "load-bundle-entry": "./src/load-bundle-entry/index.tsx",
      "init-lynx-view-entry": "./src/init-lynx-view-entry/index.tsx",
      "init-background-runtime-entry": "./src/init-background-runtime-entry/index.tsx",
      "init-container-entry": "./src/init-container-entry/index.tsx",
      "create-custom-metric": "./src/create-custom-metric/index.tsx",
      "performance-observer-observe": "./src/performance-observer-observe/index.tsx",
      "performance-observer-disconnect": "./src/performance-observer-disconnect/index.tsx",
      "simple-observe": "./src/simple-observe/index.tsx",
    },
  },
  plugins: [
    pluginReactLynx({
      defaultDisplayLinear: false,
    }),
    pluginSass(),
    pluginQRCode(),
    pluginTypeCheck(),
  ],
  output: {
    filename: "[name].[platform].bundle",
  },
});
