import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  source: {
    entry: {
      no_page_tag: "./src/no_page_tag/index.tsx",
      with_page_tag: "./src/with_page_tag/index.tsx",
    },
  },
  plugins: [pluginSass(), pluginQRCode(), pluginReactLynx()],
  environments: {
    web: {},
    lynx: {},
  },
});
