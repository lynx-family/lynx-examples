import { type Config as LynxConfig, pluginLynxConfig } from "@lynx-js/config-rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginLynx } from "@lynx-js/rsbuild-plugin";
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
    pluginLynx({
      output: {
        filename: {
          bundle: "[name].[platform].bundle",
        },
      },
    }),
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
    assetPrefix: "https://lynxjs.org/lynx-examples/desktop/dist",
  },
  environments: {
    web: {},
    lynx: {},
  },
});
