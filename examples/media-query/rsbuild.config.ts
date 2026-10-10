// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { pluginLynxConfig } from "@lynx-js/config-rsbuild-plugin";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginLynx } from "@lynx-js/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  source: {
    entry: {
      main: "./src/index.tsx",
    },
  },
  plugins: [
    pluginLynx({ output: { filename: { bundle: "[name].[platform].bundle" } } }),
    pluginReactLynx(),
    // Media queries require CSS Rule encoding and Lynx SDK >= 4.0.
    pluginLynxConfig({ enableCSSRule: true }),
    pluginQRCode(),
  ],
  environments: {
    web: {},
    lynx: {},
  },
});
