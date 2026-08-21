import type { RsbuildPluginAPI } from "@lynx-js/rspeedy";

type Callback<T> = T extends (...arguments_: infer _Arguments) => infer _Result ? T
  : never;

type ModifyBundlerChainCallback = Callback<
  Parameters<RsbuildPluginAPI["modifyBundlerChain"]>[0]
>;

export type BundlerChain = Parameters<
  ModifyBundlerChainCallback
>[0];

export type BundlerChainContext = Parameters<
  ModifyBundlerChainCallback
>[1];

export type Platform = "lynx" | "web";

export interface ThreadEntry {
  backgroundEntry: string;
  entryName: string;
  mainThreadAsset: string;
  mainThreadEntry: string;
}
