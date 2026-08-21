import { LynxEncodePlugin, WebEncodePlugin } from "@lynx-js/template-webpack-plugin";

import type { BundlerChain, Platform } from "./build-types.js";

export function getPlatform(name: string): Platform | undefined {
  if (name === "lynx" || name.startsWith("lynx-")) return "lynx";
  if (name === "web" || name.startsWith("web-")) return "web";
  return undefined;
}

export function configureEncoder(
  chain: BundlerChain,
  platform: Platform,
): void {
  if (platform === "lynx") {
    chain.plugin(LynxEncodePlugin.name).use(LynxEncodePlugin, []);
    return;
  }

  // Set EXPERIMENTAL_USE_WEB_BINARY_TEMPLATE to "false" or "0" when a
  // consumer needs the legacy JSON Web template instead of the binary format.
  chain.plugin(WebEncodePlugin.name).use(WebEncodePlugin, []);
}
