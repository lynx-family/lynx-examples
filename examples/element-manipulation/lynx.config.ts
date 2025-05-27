import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      "ref-background": "./src/ref-background/index.tsx",
      "ref-main-thread": "./src/ref-main-thread/index.tsx",
      "selector-query-background": "./src/selector-query-background/index.tsx",
      "selector-query-main-thread": "./src/selector-query-main-thread/index.tsx",
      "event-main-thread": "./src/event-main-thread/index.tsx",
    },
  },
  plugins: [
    pluginQRCode(),
    pluginReactLynx(),
    pluginTypeCheck(),
  ],
});
