import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

import { distRoot, fetchBundle, producerBaseUrl, producerDevPort } from "./demo-config.js";

export default defineConfig({
  source: {
    entry: {
      // Two ways to load the same `src/MyLazyBundle.tsx`:
      // `main` lets the bundler code-split it out of this build, `standalone`
      // fetches it from a bundle produced by lynx.config.producer.js.
      main: "./src/index.tsx",
      standalone: "./src/standalone/index.tsx",
    },
    define: {
      "process.env.LYNX_PRODUCER_BASE_URL": JSON.stringify(producerBaseUrl),
    },
  },
  plugins: [
    pluginQRCode(),
    pluginReactLynx(fetchBundle ? { engineVersion: "3.9" } : {}),
    pluginTypeCheck(),
  ],
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
  output: {
    distPath: {
      root: distRoot,
    },
    assetPrefix: process.env.ENV === "lynx-explorer"
      ? "file://lynx?local://showcase/lazy-bundle/"
      : `https://lynxjs.org/lynx-examples/lazy-bundle/${distRoot}/`,
    minify: {
      jsOptions: {
        exclude: [/async[\\/].*[\\/]template(\.[a-z0-9]+)?\.js$/],
      },
    },
    filename: {
      // The lazy bundle URL is baked into the main bundle, so a hash in its
      // filename changes that URL on every release and forces the showcase to
      // be re-pinned. Drop the hash from lazy bundles only; the main bundle
      // keeps its `[platform]` name.
      bundle: ({ lazyBundle, platform }) => lazyBundle ? "async/[name].bundle" : `[name].${platform}.bundle`,
    },
  },
});
