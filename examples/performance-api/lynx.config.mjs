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
      metric_fcp_entry: "./src/fcp_entry/index.tsx",
      metric_actual_fmp_entry: "./src/actual_fmp_entry/index.tsx",
      pipeline_entry: "./src/pipeline_entry/index.tsx",
      load_bundle_entry: "./src/load_bundle_entry/index.tsx",
      init_lynxview_entry: "./src/init_lynxview_entry/index.tsx",
      init_background_runtime_entry: "./src/init_background_runtime_entry/index.tsx",
      init_container_entry: "./src/init_container_entry/index.tsx",
      create_custom_performance_metric: "./src/create_custom_performance_metric/index.tsx",
      performance_observer_observe: "./src/performance_observer_observe/index.tsx",
      performance_observer_disconnect: "./src/performance_observer_disconnect/index.tsx",
      simple_observe: "./src/simple_observe/index.tsx",
      reload_bundle_entry: "./src/reload_bundle_entry/index.tsx",
      lazy_bundle_entry: "./src/lazy_bundle_entry/index.tsx",
    },
  },
  plugins: [
    pluginReactLynx({
      defaultDisplayLinear: false,
    }),
    pluginSass(),
    pluginQRCode(),
    pluginTypeCheck(),
  ],
});
