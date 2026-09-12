import { defineConfig } from "@rsbuild/core";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginLynx } from "@lynx-js/rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  environments: {
    lynx: {},
  },
  source: {
    entry: {
      "ref-background": "./src/ref-background/index.tsx",
      "ref-main-thread": "./src/ref-main-thread/index.tsx",
      "selector-query-background": "./src/selector-query-background/index.tsx",
      "selector-query-main-thread": "./src/selector-query-main-thread/index.tsx",
      "event-main-thread": "./src/event-main-thread/index.tsx",
    },
  },
  plugins: [
    pluginLynx({
      output: {
        filename: {
          bundle: "[name].[platform].bundle",
        },
      },
    }),
    pluginQRCode(),
    pluginReactLynx(),
    pluginTypeCheck(),
  ],
});
