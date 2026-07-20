// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export const entry = {
  keyframe_animation: "./src/keyframe_animation/index.tsx",
  transition_animation: "./src/transition_animation/index.tsx",
  toggle_transition_demo: "./src/transition_toggle/index.tsx",
  keyframe_spring: "./src/keyframe_spring/index.tsx",
  keyframe_rotate: "./src/keyframe_rotate/index.tsx",
  animate: "./src/animate/index.tsx",
  transition_variable: "./src/transition_variable/index.tsx",
  animate_mt: "./src/animate_mt/index.tsx",
};

export default defineConfig({
  source: {
    entry,
  },
  output: {
    filename: "[name].[platform].bundle",
  },
  plugins: [
    pluginReactLynx(),
    pluginSass(),
    pluginQRCode(),
    pluginTypeCheck(),
  ],
});
