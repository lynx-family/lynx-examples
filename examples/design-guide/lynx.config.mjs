// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { pluginLynxConfig } from "@lynx-js/config-rsbuild-plugin";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      force_field: "./src/force_field/index.tsx",
      color_wheels: "./src/color_wheels/index.tsx",
      gooey_effect: "./src/gooey_effect/index.tsx",
      soft_glow: "./src/soft_glow/index.tsx",
    },
  },
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/design-guide/dist",
    filename: "[name].[platform].bundle",
  },
  plugins: [
    pluginLynxConfig({
      enableCSSInlineVariables: true,
    }),
    pluginReactLynx({
      defaultDisplayLinear: false,
      enableCSSInheritance: true,
    }),
    pluginQRCode({
      schema(url) {
        return `${url}?fullscreen=true&bar_color=0d0d0d&bg_color=0d0d0d`;
      },
    }),
    pluginTypeCheck(),
  ],
  performance: {
    removeConsole: true,
  },
  environments: {
    web: {},
    lynx: {},
  },
});
