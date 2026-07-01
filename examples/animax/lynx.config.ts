// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      basic: "./src/basic/index.tsx",
      "basic-json": "./src/basic-json/index.tsx",
      "basic-loop": "./src/basic-loop/index.tsx",
      controls: "./src/controls/index.tsx",
      "dynamic-resource-font": "./src/dynamic-resource-font/index.tsx",
      "dynamic-resource-submit": "./src/dynamic-resource-submit/index.tsx",
      "dynamic-resource-video": "./src/dynamic-resource-video/index.tsx",
      "dynamic-layer-property": "./src/dynamic-layer-property/index.tsx",
      "dynamic-layer-wildcard": "./src/dynamic-layer-wildcard/index.tsx",
      "dynamic-text-layer": "./src/dynamic-text-layer/index.tsx",
      events: "./src/events/index.tsx",
      "events-tap": "./src/events-tap/index.tsx",
      "events-update": "./src/events-update/index.tsx",
      "firstframe-poster": "./src/firstframe-poster/index.tsx",
      "methods-query": "./src/methods-query/index.tsx",
      playsegment: "./src/playsegment/index.tsx",
      "playback-props": "./src/playback-props/index.tsx",
    },
  },
  plugins: [
    pluginQRCode(),
    pluginReactLynx(),
    pluginTypeCheck(),
  ],
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/animax/dist",
    filename: "[name].[platform].bundle",
  },
  environments: {
    web: {},
    lynx: {},
  },
});
