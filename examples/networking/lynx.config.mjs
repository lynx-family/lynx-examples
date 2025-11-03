// Copyright 2025 The Lynx Authors. All rights reserved.
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
      "fetch": "./src/fetch/index.tsx",
      "react-query": "/src/react-query/index.tsx",
      "chunked-encoding": "/src/chunked-encoding/index.tsx",
    },
  },
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/networking/dist",
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
