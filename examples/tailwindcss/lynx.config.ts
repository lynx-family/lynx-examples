import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginTailwindCSS } from "rsbuild-plugin-tailwindcss";

export default defineConfig({
  plugins: [pluginReactLynx(), pluginQRCode(), pluginTailwindCSS()],
  environments: {
    web: {},
    lynx: {},
  },
});
