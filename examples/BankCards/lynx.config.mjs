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
      step_1: "./src/step_1/index.tsx",
      step_2: "./src/step_2/index.tsx",
      step_3: "./src/step_3/index.tsx",
      final: "./src/final/index.tsx",
    },
  },
  plugins: [pluginReactLynx(), pluginSass({}), pluginQRCode()],
  environments: {
    web: {},
    lynx: {},
  },
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/bankcards/dist",
  },
});
