import path from "node:path";
import { fileURLToPath } from "node:url";

import { pluginLynxConfig } from "@lynx-js/config-rsbuild-plugin";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginLynx } from "@lynx-js/rsbuild-plugin";
import { pluginVanillaLynx } from "@lynx-js/vanilla-rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  environments: {
    lynx: {},
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
  },
  plugins: [
    pluginLynx({
      output: {
        filename: {
          bundle: "[name].bundle",
        },
      },
    }),
    pluginVanillaLynx(),
    pluginLynxConfig({}),
    pluginQRCode({
      schema(url) {
        return `${url}?fullscreen=true`;
      },
    }),
    pluginTypeCheck(),
  ],
});
