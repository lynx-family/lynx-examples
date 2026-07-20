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
      Swiper: "./src/Swiper/App.tsx",
      SwiperMTS: "./src/SwiperMTS/App.tsx",
      UpdateOffset: "./src/UpdateOffset/App.tsx",
      SwiperHooks: "./src/SwiperHooks/App.tsx",
      SwiperEmpty: "./src/SwiperEmpty/App.tsx",
      MTSIndicator: "./src/MTSIndicator/App.tsx",
      MTSIndicatorEmpty: "./src/MTSIndicatorEmpty/App.tsx",
      MTSIndicatorCurrent: "./src/MTSIndicatorCurrent/App.tsx",
      MTSIndicatorWrong: "./src/MTSIndicatorWrong/App.tsx",
      EasingDefault: "./src/EasingDefault/App.tsx",
    },
  },
  plugins: [
    pluginReactLynx(),
    pluginSass(),
    pluginQRCode(),
    pluginTypeCheck(),
  ],
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/swiper/dist",
    filename: "[name].[platform].bundle",
  },
  environments: {
    lynx: {},
    web: {},
  },
});
