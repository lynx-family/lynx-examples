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
      fcp_entry: "./src/fcp_entry/index.tsx",
      actual_fmp_entry: "./src/actual_fmp_entry/index.tsx",
      PipelineEntry: "./src/PipelineEntry/index.tsx",
      HostPlatformTiming: "./src/HostPlatformTiming/index.tsx",
      ReloadBundleEntry: "./src/ReloadBundleEntry/index.tsx",
      LazyBundleEntry: "./src/LazyBundleEntry/index.tsx",
      load_bundle_entry: "./src/load_bundle_entry/index.tsx",
      InitLynxviewEntry: "./src/init_lynxview_entry/index.tsx",
      InitBackgroundRuntimeEntry: "./src/init_background_runtime_entry/index.tsx",
      InitContainerEntry: "./src/init_container_entry/index.tsx",
      CreateCustomPerformanceMetric: "./src/create_custom_performance_metric/index.tsx",
      PerformanceObserverObserve: "./src/performance_observer_observe/index.tsx",
      PerformanceObserverDisconnect: "./src/performance_observer_disconnect/index.tsx",
      SimpleObseve: "./src/simple_observe/index.tsx",
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
