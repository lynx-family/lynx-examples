// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginLynx } from "@lynx-js/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      main: "./src/index.tsx",
    },
  },
  plugins: [
    pluginLynx({
      output: {
        filename: {
          bundle: "[name].[platform].bundle",
        },
      },
    }),
    pluginReactLynx(),
    pluginQRCode(),
    pluginTypeCheck(),
  ],
  environments: {
    web: {},
    lynx: {},
  },
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/zustand/dist",
  },
});
