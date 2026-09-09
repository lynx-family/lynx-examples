import { pluginLynx } from "@lynx-js/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      "background-draggable": "./src/background-draggable/index.tsx",
      "main-thread-draggable": "./src/main-thread-draggable/index.tsx",
      "cross-thread-calls": "./src/cross-thread-calls/index.tsx",
      "shared-module": "./src/shared-module/index.tsx",
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
  environments: {
    lynx: {},
    // can open when web supports querySelector
    web: {},
  },
  output: {},
});
