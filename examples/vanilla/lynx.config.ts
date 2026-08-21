import path from "node:path";
import { fileURLToPath } from "node:url";

import { pluginLynxConfig } from "@lynx-js/config-rsbuild-plugin";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginVanillaLynx } from "@lynx-js/vanilla-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  source: {
    entry: {
      "background-interaction": path.join(
        projectRoot,
        "src/background-interaction/main-thread.ts",
      ),
      counter: path.join(projectRoot, "src/counter/main-thread.ts"),
      "event-card": path.join(projectRoot, "src/event-card/main-thread.ts"),
      "hello-lynx": path.join(projectRoot, "src/hello-lynx/main-thread.ts"),
      "product-card": path.join(projectRoot, "src/product-card/main-thread.ts"),
      "simple-interaction": path.join(
        projectRoot,
        "src/simple-interaction/main-thread.ts",
      ),
      todolist: path.join(projectRoot, "src/todolist/main-thread.ts"),
      "weather-card": path.join(projectRoot, "src/weather-card/main-thread.ts"),
    },
  },
  output: {
    distPath: {
      root: path.join(projectRoot, "dist"),
    },
    filename: "[name].[platform].bundle",
  },
  plugins: [
    pluginVanillaLynx(),
    pluginLynxConfig({}),
    pluginQRCode({
      schema(url) {
        return `${url}?fullscreen=true`;
      },
    }),
    pluginTypeCheck(),
  ],
  environments: {
    web: {},
    lynx: {},
  },
});
