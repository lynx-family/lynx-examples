import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";

export default defineConfig({
  source: {
    entry: {
      fib: "./src/fib/index.tsx",
      init_data: "./src/initData/index.tsx",
    },
  },
  plugins: [
    pluginQRCode(),
    pluginReactLynx(),
  ],
  environments: {
    web: {},
    lynx: {},
  },
});
