import { pluginLynx } from "@lynx-js/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      main: "./src/index.tsx",
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
    web: {},
    lynx: {},
  },
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/image/dist",
  },
});
