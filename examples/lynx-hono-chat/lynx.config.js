import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";

export default defineConfig(() => {
  const serverUrl = process.env.CHAT_SERVER_URL ?? "http://127.0.0.1:8787";

  return {
    source: {
      define: {
        __CHAT_SERVER_URL__: JSON.stringify(serverUrl),
      },
      entry: {
        client: "./src/client/index.tsx",
      },
    },
    output: {
      distPath: {
        root: "dist/client",
      },
      assetPrefix: serverUrl,
    },
    plugins: [
      pluginQRCode({
        schema(url) {
          return `${url}?fullscreen=true`;
        },
      }),
      pluginReactLynx(),
    ],
  };
});
