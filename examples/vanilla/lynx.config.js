import path from "node:path";
import { fileURLToPath } from "node:url";

import { pluginLynxConfig } from "@lynx-js/config-rsbuild-plugin";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";

import { pluginVanillaTemplateWebpack } from "./plugin.js";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  dev: {
    hmr: false,
    liveReload: false,
  },
  source: {
    entry: {
      counter: path.join(projectRoot, "src/counter/main-thread.ts"),
      "event-card": path.join(projectRoot, "src/event-card/main-thread.ts"),
      "product-card": path.join(projectRoot, "src/product-card/main-thread.ts"),
      todolist: path.join(projectRoot, "src/todolist/main-thread.ts"),
      "weather-card": path.join(projectRoot, "src/weather-card/main-thread.ts"),
    },
  },
  output: {
    distPath: {
      root: path.join(projectRoot, "dist"),
    },
    filename: "[name].bundle",
  },
  plugins: [
    pluginVanillaTemplateWebpack(),
    pluginLynxConfig({
      enableEventHandleRefactor: true,
    }),
    pluginQRCode({
      schema(url) {
        return `${url}?fullscreen=true`;
      },
    }),
  ],
});
