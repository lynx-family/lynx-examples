import { type Config as LynxConfig, pluginLynxConfig } from "@lynx-js/config-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

type DesktopLynxConfig = LynxConfig & {
  alignMouseEventWithW3C?: boolean;
};

export default defineConfig({
  source: {
    entry: {
      cursor: "./src/cursor/index.tsx",
      "mouse-cursor": "./src/mouse-cursor/index.tsx",
    },
  },
  plugins: [
    pluginLynxConfig(
      {
        alignMouseEventWithW3C: true,
        enableCSSInheritance: true,
      } as DesktopLynxConfig,
      {
        configKeys: ["enableCSSInheritance", "alignMouseEventWithW3C"],
        validate: (input) => input as DesktopLynxConfig,
      },
    ),
    pluginQRCode(),
    pluginReactLynx(),
    pluginTypeCheck(),
  ],
  output: {
    filename: "[name].[platform].bundle",
  },
  environments: {
    web: {},
    lynx: {},
  },
});
