import path from "node:path";
import { fileURLToPath } from "node:url";

import { pluginLynxConfig } from "@lynx-js/config-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { discoverEntries } from "./tools/entries.mjs";
import { pluginNonvisualCSSCustomSections } from "./tools/plugins/nonvisual-css-custom-sections.mjs";

const projectRoot = fileURLToPath(new URL("./", import.meta.url));
const { entries, manifests } = discoverEntries(projectRoot, process.env.LYNX_WPT_TESTS);

export default defineConfig({
  source: {
    entry: entries,
    define: {
      // The host collector/Android runner stays in lynx-wpt. Building a card
      // alone must not send historical results to a collector.
      __LYNX_WPT_TESTHARNESS_SESSION__: JSON.stringify(null),
    },
  },
  output: {
    distPath: { root: path.join(projectRoot, "dist") },
    // Support images/fonts travel with each bundle; no deployment URL is baked in.
    dataUriLimit: Infinity,
  },
  plugins: [
    pluginReactLynx({
      targetSdkVersion: "3.9",
      enableCSSInvalidation: true,
      enableCSSInheritance: true,
      enableCSSSelector: true,
    }),
    pluginLynxConfig({
      enableCSSRule: true,
      enableFixedNew: true,
      enableCSSInlineVariables: true,
      enableFlexBasisZeroPercent: true,
      enableGridPlacementShorthands: true,
      enableParseIntFlex: true,
    }),
    pluginNonvisualCSSCustomSections({ entries: manifests }),
  ],
});
