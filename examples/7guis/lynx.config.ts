import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";

export default defineConfig({
  plugins: [pluginQRCode(), pluginReactLynx()],
  source: {
    entry: {
      counter: "./src/counter/index.tsx",
      "temperature-converter": "./src/temperature-converter/index.tsx",
      "flight-booker": "./src/flight-booker/index.tsx",
      timer: "./src/timer/index.tsx",
      crud: "./src/crud/index.tsx",
      "circle-drawer": "./src/circle-drawer/index.tsx",
      cells: "./src/cells/index.tsx",
    },
  },
  environments: {
    web: {},
    lynx: {},
  },
});
