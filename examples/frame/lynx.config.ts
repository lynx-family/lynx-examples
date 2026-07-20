import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      frame: "./src/frame/index.tsx",
      in_frame: "./src/in_frame/index.tsx",
    },
  },
  plugins: [
    pluginQRCode(),
    pluginReactLynx(),
    pluginTypeCheck(),
  ],
  dev: {
    assetPrefix: true,
  },
  output: {
    assetPrefix: process.env.ENV === "lynx-explorer"
      ? "file://lynx?local://showcase/frame/"
      : `https://lynxjs.org/lynx-examples/frame/dist/`,
  },
});
