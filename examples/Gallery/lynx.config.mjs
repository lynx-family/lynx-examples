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
      FirstImageCard: "./src/FirstImageCard/index.tsx",
      LikeImageCard: "./src/LikeImageCard/index.tsx",
      CreateGallery: "./src/CreateGallery/index.tsx",
      AddAutoScroll: "./src/AddAutoScroll/index.tsx",
      AddNiceScrollbar: "./src/AddNiceScrollbar/index.tsx",
      ScrollbarCompare: "./src/ScrollbarCompare/index.tsx",
      GalleryComplete: "./src/GalleryComplete/index.tsx",
    },
  },
  plugins: [
    pluginReactLynx(),
    pluginSass(),
    pluginQRCode(),
    pluginTypeCheck(),
  ],
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/gallery/dist",
  },
  environments: {
    web: {},
    lynx: {},
  },
});
