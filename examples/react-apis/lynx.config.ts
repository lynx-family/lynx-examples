import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      "clone-element": "./src/clone-element/index.tsx",
      "create-element": "./src/create-element/index.tsx",
      "create-portal": "./src/create-portal/index.tsx",
    },
  },
  plugins: [
    pluginReactLynx({
      defaultDisplayLinear: false,
      enableCSSInheritance: true,
    }),
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
