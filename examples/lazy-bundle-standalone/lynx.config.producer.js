import path from "node:path";
import { fileURLToPath } from "node:url";

import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";

import { detectLanHost, producerDevPort } from "./demo-ports.js";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const producerPublicPath = `http://${detectLanHost()}:${producerDevPort}/`;

export default defineConfig({
  source: {
    entry: {
      MyLazyBundle: "./src/MyLazyBundle.tsx",
    },
  },
  output: {
    assetPrefix: producerPublicPath,
    distPath: {
      root: path.join(projectRoot, "dist/producer"),
    },
  },
  dev: {
    assetPrefix: producerPublicPath,
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
