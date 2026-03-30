// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { pluginExternalBundle } from "@lynx-js/external-bundle-rsbuild-plugin";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";

export default defineConfig({
  source: {
    entry: {
      index: "./src/index",
    },
  },
  output: {
    filename: "[name].[platform].bundle",
    assetPrefix: "https://unpkg.com/@lynx-example/external-bundle@latest/dist",
  },
  plugins: [
    pluginReactLynx(),
    pluginQRCode(),
    pluginExternalBundle({
      externalBundleRoot: "dist-external-bundle",
      externalsPresets: {
        reactlynx: true,
      },
      externals: {
        "lodash-es": {
          bundlePath: "lodash-es.lynx.bundle",
          background: { sectionPath: "lodash-es" },
          mainThread: { sectionPath: "lodash-es__main-thread" },
          async: false,
          timeout: 10000,
        },
        "./components": {
          bundlePath: "comp.lynx.bundle",
          background: { sectionPath: "component" },
          mainThread: { sectionPath: "component__main-thread" },
          async: true,
          timeout: 5000,
        },
      },
      timeout: 10000,
    }),
  ],
});
