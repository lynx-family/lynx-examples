// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

const enableBundleAnalysis = !!process.env["RSPEEDY_BUNDLE_ANALYSIS"];

export default defineConfig({
  source: {
    entry: {
      main: "./src/index.tsx",
      mini: "./src/Mini/index.tsx",
    },
  },
  output: {
    filename: "[name].[platform].bundle",
  },
  plugins: [
    pluginReactLynx(),
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`;
      },
    }),
    pluginTypeCheck(),
  ],
  environments: {
    web: {},
    lynx: {},
  },
  performance: {
    profile: enableBundleAnalysis,
  },
});
