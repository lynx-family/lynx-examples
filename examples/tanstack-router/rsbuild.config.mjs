import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginLynx } from "@lynx-js/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { tanstackRouter } from "@tanstack/router-plugin/rspack";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export default defineConfig({
  source: {
    entry: {
      main: "./src/index.tsx",
    },
  },
  plugins: [
    pluginLynx({
      output: {
        filename: {
          bundle: "[name].[platform].bundle",
        },
      },
    }),
    pluginReactLynx(),
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`;
      },
    }),
  ],
  environments: {
    web: {},
    lynx: {},
  },
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/tanstack-router/dist",
  },
  tools: {
    rspack: {
      plugins: [
        tanstackRouter({
          target: "react",
          quoteStyle: "double",
          semicolons: true,
        }),
      ],
      resolve: {
        alias: {
          react$: require.resolve("@lynx-js/react/compat"),
        },
      },
    },
  },
});
