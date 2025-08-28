import { defineConfig } from "@lynx-js/rspeedy";

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
    pluginReactLynx({
      enableCSSInheritance: true,
      defaultDisplayLinear: false,
    }),
    pluginQRCode(),
    pluginTypeCheck(),
  ],
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/lynx-api/dist",
  },
});
