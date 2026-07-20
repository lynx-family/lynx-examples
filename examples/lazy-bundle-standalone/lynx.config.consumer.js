import path from "node:path";
import { fileURLToPath } from "node:url";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

import { producerDevPort, producerPublishedBaseUrl } from "./demo-config.js";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  source: {
    entry: "./src/index.tsx",
    define: {
      "process.env.LYNX_PRODUCER_BASE_URL": JSON.stringify(
        producerPublishedBaseUrl,
      ),
    },
  },
  output: {
    distPath: {
      root: path.join(projectRoot, "dist/consumer"),
    },
  },
  dev: {
    assetPrefix: true,
  },
  server: {
    proxy: {
      "/producer": {
        target: `http://127.0.0.1:${producerDevPort}`,
        pathRewrite: {
          "^/producer": "",
        },
      },
    },
  },
  plugins: [
    pluginQRCode(),
    pluginReactLynx(),
    pluginTypeCheck(),
  ],
});
