import { defineConfig } from "@lynx-js/rspeedy";

import { pluginLynxConfig } from "@lynx-js/config-rsbuild-plugin";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  plugins: [
    pluginQRCode(),
    pluginReactLynx({
      defaultDisplayLinear: false,
    }),
    pluginTypeCheck(),
    pluginLynxConfig({
      enableCSSInlineVariables: true,
    }),
  ],
  source: {
    entry: {
      openui: "./src/index.tsx",
    },
  },
  environments: {
    web: {},
    lynx: {},
  },
  server: {
    port: 8080,
  },
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/openui/dist",
    filename: "[name].[platform].bundle",
  },
});
