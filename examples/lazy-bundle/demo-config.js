import os from "node:os";

import pkg from "./package.json" with { type: "json" };

export const producerDevPort = Number(
  process.env["LYNX_STANDALONE_PRODUCER_PORT"] ?? "43721",
);

/**
 * Whether to build the FetchBundle variant. `engineVersion: '3.9'` switches
 * how the engine loads a lazy bundle; the sources are identical either way.
 */
export const fetchBundle = !!process.env["LAZY_BUNDLE_FETCHBUNDLE"];

/**
 * Each loader variant needs its own output root: Rspeedy cleans the output
 * directory before every build, so `pnpm build`'s second pass would otherwise
 * wipe the first one's artifacts.
 */
export const distRoot = fetchBundle ? "dist-fetchbundle" : "dist";

/**
 * Where the consumer resolves the producer bundle from in a production build.
 *
 * Defaults to unpkg, pinned to the current version so a published consumer
 * bundle always loads the producer bundle it was built against. `pnpm
 * build:local` sets `LYNX_PRODUCER_LOCAL` to point at the local producer
 * server instead, which is what makes `pnpm preview` work before the package
 * is published — unpkg 404s until then.
 *
 * The default has to be the published URL: CI releases run a plain `pnpm
 * build`, so anything else here would bake a LAN address into the artifact
 * that ships to npm.
 */
export const producerBaseUrl = process.env["LYNX_PRODUCER_LOCAL"]
  ? `http://${detectLanHost()}:${producerDevPort}`
  : `https://unpkg.com/${pkg.name}@${pkg.version}/${distRoot}/producer`;

export function detectLanHost() {
  if (process.env["LYNX_STANDALONE_PRODUCER_HOST"]) {
    return process.env["LYNX_STANDALONE_PRODUCER_HOST"];
  }
  for (const ifaces of Object.values(os.networkInterfaces())) {
    for (const iface of ifaces ?? []) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}
