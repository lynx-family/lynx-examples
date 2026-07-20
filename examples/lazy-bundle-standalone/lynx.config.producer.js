import path from "node:path";
import { fileURLToPath } from "node:url";

import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";

import { detectLanHost, producerBaseUrl, producerDevPort } from "./demo-config.js";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  source: {
    entry: {
      MyLazyBundle: "./src/MyLazyBundle.tsx",
    },
  },
  output: {
    assetPrefix: producerBaseUrl,
    distPath: {
      root: path.join(projectRoot, "dist/producer"),
    },
  },
  dev: {
    assetPrefix: `http://${detectLanHost()}:${producerDevPort}/`,
  },
  server: {
    port: producerDevPort,
    strictPort: true,
  },
  plugins: [
    pluginReactLynx({
      experimental_isLazyBundle: true,
    }),
  ],
});
