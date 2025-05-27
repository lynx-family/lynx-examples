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
      event_aop: "./src/event_aop/index.tsx",
      event_bubble: "./src/event_bubble/index.tsx",
      event_capture: "./src/event_capture/index.tsx",
      event_chain: "./src/event_chain/index.tsx",
      event_emitter_listen: "./src/event_emitter_listen/index.tsx",
      event_emitter_toggle: "./src/event_emitter_toggle/index.tsx",
      event_global_bind: "./src/event_global_bind/index.tsx",
      event_node_eom: "./src/event_node_eom/index.tsx",
      event_node_sq: "./src/event_node_sq/index.tsx",
      event_static_catch: "./src/event_static_catch/index.tsx",
      visibility_expose: "./src/visibility_expose/index.tsx",
      visibility_expose_custom: "./src/visibility_expose_custom/index.tsx",
      visibility_expose_global: "./src/visibility_expose_global/index.tsx",
      visibility_intersection: "./src/visibility_intersection/index.tsx",
    },
  },
  plugins: [
    pluginReactLynx(),
    pluginSass(),
    pluginQRCode(),
    pluginTypeCheck(),
  ],
  environments: {
    web: {},
    lynx: {},
  },
});
