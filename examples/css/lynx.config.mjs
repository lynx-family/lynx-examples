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
      bg: "./src/bg/index.tsx",
      border: "./src/border/index.tsx",
      border_radius: "./src/border_radius/index.tsx",
      box_shadow: "./src/box_shadow/index.tsx",
      bg_image: "./src/bg_image/index.tsx",
      bg_gradient: "./src/bg_gradient/index.tsx",
      bg_radial: "./src/bg_radial/index.tsx",
      keyframes: "./src/keyframes/index.tsx",
      filter: "./src/filter/index.tsx",
      flex_layout: "./src/flex_layout/index.tsx",
      grid_layout: "./src/grid_layout/index.tsx",
      linear_layout: "./src/linear_layout/index.tsx",
      relative_layout: "./src/relative_layout/index.tsx",
      clip_path_super_ellipse: "./src/clip_path_super_ellipse",
      mask_image_circle_gradient: "./src/mask_image_circle_gradient",
      border_background_shadow: "./src/border_background_shadow",
      descendant_selectors_theme: "./src/descendant_selectors_theme",
      css_variable_theme: "./src/css_variable_theme",
      class_guide: "./src/class_guide",
      cascade_guide: "./src/cascade_guide",
    },
  },
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/css/dist",
    filename: "[name].[platform].bundle",
  },
  plugins: [
    pluginReactLynx({
      defaultDisplayLinear: false,
    }),
    pluginSass(),
    pluginQRCode(),
    pluginTypeCheck(),
  ],
  environments: {
    web: {},
    lynx: {},
  },
});
