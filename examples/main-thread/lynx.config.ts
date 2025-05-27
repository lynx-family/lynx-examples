import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      "background-draggable": "./src/background-draggable/index.tsx",
      "main-thread-draggable": "./src/main-thread-draggable/index.tsx",
    },
  },
  plugins: [
    pluginQRCode(),
    pluginReactLynx(),
    pluginTypeCheck(),
  ],
});
