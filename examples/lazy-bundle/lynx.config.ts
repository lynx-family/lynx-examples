import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
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
      ? "file://lynx?local://showcase/lazy-bundle/"
      : `https://lynxjs.org/lynx-examples/lazy-bundle/dist/`,
    minify: {
      jsOptions: {
        exclude: [/async[\\/].*[\\/]template(\.[a-z0-9]+)?\.js$/],
      },
    },
  },
});
