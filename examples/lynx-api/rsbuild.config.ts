import { pluginLynx } from "@lynx-js/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      "request-animation-frame": "./src/request-animation-frame/App.tsx",
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
    pluginReactLynx({
      enableCSSInheritance: true,
      defaultDisplayLinear: false,
    }),
    pluginQRCode(),
    pluginTypeCheck(),
  ],
  environments: {
    web: {},
    lynx: {},
  },
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/lynx-api/dist",
  },
});
