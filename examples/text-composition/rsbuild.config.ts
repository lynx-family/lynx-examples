// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      main: "./src/index.tsx",
    },
  },
  plugins: [
    pluginQRCode(),
    pluginReactLynx(),
    pluginTypeCheck(),
  ],
  environments: {
    web: {},
    lynx: {},
  },
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/text-composition/dist",
  },
});
