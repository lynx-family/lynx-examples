import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      "thread-macros": "./src/thread-macros/index.tsx",
    },
  },
  plugins: [
    pluginReactLynx(),
    pluginQRCode(),
    pluginTypeCheck(),
  ],
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/react-apis/dist",
    filename: "[name].[platform].bundle",
  },
  environments: {
    web: {},
    lynx: {},
  },
});
