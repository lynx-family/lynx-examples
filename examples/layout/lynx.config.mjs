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
      align: "./src/align/index.tsx",
      position: "./src/position/index.tsx",
      direction: "./src/direction/index.tsx",
      flex: "./src/flex/index.tsx",
      flex_grow: "./src/flex_grow/index.tsx",
      flex_shrink: "./src/flex_shrink/index.tsx",
      flex_wrap: "./src/flex_wrap/index.tsx",
      grid: "./src/grid/index.tsx",
      grid_size: "./src/grid_size/index.tsx",
      grid_gap: "./src/grid_gap/index.tsx",
      grid_axis_alignment: "./src/grid_axis_alignment/index.tsx",
      grid_placement: "./src/grid_placement/index.tsx",
      grid_area_alignment: "./src/grid_area_alignment/index.tsx",
      linear: "./src/linear/index.tsx",
      linear_justify_content: "./src/linear_justify_content/index.tsx",
      linear_align_items: "./src/linear_align_items/index.tsx",
      linear_align_self: "./src/linear_align_self/index.tsx",
      linear_weight: "./src/linear_weight/index.tsx",
      relative: "./src/relative_layout/index.tsx",
      sizing: "./src/sizing/index.tsx",
    },
  },
  output: {
    filename: "[name].[platform].bundle",
  },
  plugins: [
    pluginReactLynx({
      enableCSSInheritance: true,
    }),
    pluginSass(),
    pluginQRCode(),
    pluginTypeCheck(),
  ],
});
