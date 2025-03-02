import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import file from "node:fs";
import path from "node:path";

const version = JSON.parse(
  file.readFileSync(path.resolve("./package.json"), "utf-8"),
).version;

export default defineConfig({
  plugins: [pluginQRCode(), pluginReactLynx()],
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
