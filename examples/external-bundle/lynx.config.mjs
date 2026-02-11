// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { pluginExternalBundle } from "@lynx-js/external-bundle-rsbuild-plugin";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";

const EXTERNAL_BUNDLE_PREFIX = process.env["EXTERNAL_BUNDLE_PREFIX"]
  || "https://unpkg.com/@lynx-example/external-bundle@latest/dist";

export default defineConfig({
  source: {
    entry: {
      index: "./src/index",
    },
  },
  output: {
    filename: "[name].[platform].bundle",
    cleanDistPath: false,
  },
  plugins: [
    pluginReactLynx(),
    pluginQRCode(),
    pluginExternalBundle({
      externals: {
        lodash: {
          url: `${EXTERNAL_BUNDLE_PREFIX}/lodash-es.lynx.bundle`,
          background: { sectionPath: "lodash-es" },
          mainThread: { sectionPath: "lodash-es__main-thread" },
          async: false,
          timeout: 5000,
        },
        "@lynx-js/react": {
          libraryName: ["ReactLynx", "React"],
          url: `${EXTERNAL_BUNDLE_PREFIX}/react.lynx.bundle`,
          background: { sectionPath: "ReactLynx" },
          mainThread: { sectionPath: "ReactLynx__main-thread" },
          async: false,
          timeout: 5000,
        },
        "@lynx-js/react/internal": {
          libraryName: ["ReactLynx", "ReactInternal"],
          url: `${EXTERNAL_BUNDLE_PREFIX}/react.lynx.bundle`,
          background: { sectionPath: "ReactLynx" },
          mainThread: { sectionPath: "ReactLynx__main-thread" },
          async: false,
          timeout: 5000,
        },
        "@lynx-js/react/experimental/lazy/import": {
          libraryName: ["ReactLynx", "ReactLazyImport"],
          url: `${EXTERNAL_BUNDLE_PREFIX}/react.lynx.bundle`,
          background: { sectionPath: "ReactLynx" },
          mainThread: { sectionPath: "ReactLynx__main-thread" },
          async: false,
          timeout: 5000,
        },
        "@lynx-js/react/legacy-react-runtime": {
          libraryName: ["ReactLynx", "ReactLegacyRuntime"],
          url: `${EXTERNAL_BUNDLE_PREFIX}/react.lynx.bundle`,
          background: { sectionPath: "ReactLynx" },
          mainThread: { sectionPath: "ReactLynx__main-thread" },
          async: false,
          timeout: 5000,
        },
        "@lynx-js/react/runtime-components": {
          libraryName: ["ReactLynx", "ReactComponents"],
          url: `${EXTERNAL_BUNDLE_PREFIX}/react.lynx.bundle`,
          background: { sectionPath: "ReactLynx" },
          mainThread: { sectionPath: "ReactLynx__main-thread" },
          async: false,
          timeout: 5000,
        },
        "@lynx-js/react/worklet-runtime/bindings": {
          libraryName: ["ReactLynx", "ReactWorkletRuntime"],
          url: `${EXTERNAL_BUNDLE_PREFIX}/react.lynx.bundle`,
          background: { sectionPath: "ReactLynx" },
          mainThread: { sectionPath: "ReactLynx__main-thread" },
          async: false,
          timeout: 5000,
        },
        "@lynx-js/react/debug": {
          libraryName: ["ReactLynx", "ReactDebug"],
          url: `${EXTERNAL_BUNDLE_PREFIX}/react.lynx.bundle`,
          background: { sectionPath: "ReactLynx" },
          mainThread: { sectionPath: "ReactLynx__main-thread" },
          async: false,
          timeout: 5000,
        },
        preact: {
          libraryName: ["ReactLynx", "Preact"],
          url: `${EXTERNAL_BUNDLE_PREFIX}/react.lynx.bundle`,
          background: { sectionPath: "ReactLynx" },
          mainThread: { sectionPath: "ReactLynx__main-thread" },
          async: false,
        },
        "./components": {
          url: `${EXTERNAL_BUNDLE_PREFIX}/comp.lynx.bundle`,
          background: { sectionPath: "component" },
          mainThread: { sectionPath: "component__main-thread" },
          async: true,
          timeout: 5000,
        },
      },
    }),
  ],
});
