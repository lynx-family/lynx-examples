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
      FcpEntry: "./src/FcpEntry/index.tsx",
      ActualFmpEntry: "./src/ActualFmpEntry/index.tsx",
      PipelineEntry: "./src/PipelineEntry/index.tsx",
      HostPlatformTiming: "./src/HostPlatformTiming/index.tsx",
      ReloadBundleEntry: "./src/ReloadBundleEntry/index.tsx",
      LazyBundleEntry: "./src/LazyBundleEntry/index.tsx",
      LoadBundleEntry: "./src/LoadBundleEntry/index.tsx",
      InitLynxviewEntry: "./src/InitLynxviewEntry/index.tsx",
      InitBackgroundRuntimeEntry: "./src/InitBackgroundRuntimeEntry/index.tsx",
      InitContainerEntry: "./src/InitContainerEntry/index.tsx",
      CreateCustomMetric: "./src/CreateCustomMetric/index.tsx",
      PerformanceObserverObserve: "./src/PerformanceObserverObserve/index.tsx",
      PerformanceObserverDisconnect: "./src/PerformanceObserverDisconnect/index.tsx",
      SimpleObserve: "./src/SimpleObserve/index.tsx",
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
