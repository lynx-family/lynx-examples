import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  source: {
    entry: {
      base: "./src/base/index.tsx",
      vertical: "./src/vertical/index.tsx",
      event: "./src/event/index.tsx",
      sticky: "./src/sticky/index.tsx",
    },
  },

  plugins: [
    pluginReactLynx(),
    pluginSass(),
    pluginQRCode(),
  ],
  environments: {
    web: {},
    lynx: {},
  },
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/scroll-view/dist",
  },
});
