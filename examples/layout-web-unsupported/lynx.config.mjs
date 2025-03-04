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
      relative_layout: "./src/relative_layout/index.tsx",
    },
  },
  plugins: [
    pluginReactLynx({
      enableCSSInheritance: true,
    }),
    pluginSass(),
    pluginQRCode(),
  ],
});
