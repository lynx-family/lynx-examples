// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

import { entry } from "./lynx.config.mjs";

delete entry.animate;

export default defineConfig({
  source: {
    entry,
  },
  plugins: [
    pluginReactLynx(),
    pluginSass(),
    pluginTypeCheck(),
  ],
  environments: {
    web: {},
  },
  output: {
    cleanDistPath: false,
    filename: "[name].[platform].bundle",
  },
});
