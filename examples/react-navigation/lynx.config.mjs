import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

// `@react-navigation/core` is written against React. On Lynx those imports have
// to land on the navigator's compat layer, which fills the gaps ReactLynx has
// yet to cover (`use`, `useInsertionEffect`, `startTransition`).
const reactCompat = require.resolve("@react-navigation/lynx/react-compat");

export default defineConfig({
  plugins: [
    pluginReactLynx(),
    pluginQRCode({
      schema(url) {
        return `${url}?fullscreen=true`;
      },
    }),
  ],
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/react-navigation/dist",
    filename: "[name].[platform].bundle",
  },
  environments: {
    lynx: {},
  },
  source: {
    include: [
      /[\\/]node_modules[\\/]@react-navigation[\\/]/,
      /[\\/]node_modules[\\/]lynx-screens[\\/]/,
    ],
  },
  tools: {
    rspack: {
      resolve: {
        alias: {
          react$: reactCompat,
        },
        extensionAlias: {
          ".js": [".ts", ".tsx", ".js"],
          ".jsx": [".tsx", ".jsx"],
        },
      },
    },
  },
});
