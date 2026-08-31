import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { UnoCSSRspackPlugin } from "@unocss/webpack/rspack";
import { presetAttributify, presetWind3 } from "unocss";
import { lynxColors } from "./src/constants/colors/colors.js";

export default defineConfig({
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`;
      },
    }),
    pluginReactLynx(),
  ],
  tools: {
    rspack: {
      plugins: [
        UnoCSSRspackPlugin({
          presets: [presetWind3(), presetAttributify()],
          theme: {
            animation: {
              keyframes: {
                shake: "{0%{transform:scale(1)}50%{transform:scale(0.9)}100%{transform:scale(1)}}",
              },
            },
            colors: { ...lynxColors },
          },
          shortcuts: {
            "animate-shake": "animate-[shake_0.5s_ease_infinite]",
          },
        }),
      ],
    },
  },
});
