import { defineConfig } from "@lynx-js/rspeedy";

import { pluginLynxConfig } from "@lynx-js/config-rsbuild-plugin";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  plugins: [
    pluginQRCode(),
    pluginReactLynx(),
    pluginTypeCheck(),
    pluginLynxConfig({
      enableCSSInlineVariables: true,
    }),
  ],
  source: {
    entry: {
      weather: "./src/weather/index.tsx",
      gallery: "./src/gallery/index.tsx",
      actions: "./src/actions/index.tsx",
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
    assetPrefix: "https://lynxjs.org/lynx-examples/a2ui/dist",
    filename: "[name].[platform].bundle",
  },
});
