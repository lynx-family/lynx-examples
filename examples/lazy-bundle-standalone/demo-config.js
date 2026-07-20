import os from "node:os";

import pkg from "./package.json" with { type: "json" };

export const producerDevPort = Number(
  process.env["LYNX_STANDALONE_PRODUCER_PORT"] ?? "43721",
);

/**
 * Where the producer bundle lives once this example is published to npm.
 * Pinned to the current version so a consumer bundle always loads the
 * producer bundle it was built against.
 */
export const producerPublishedBaseUrl = `https://unpkg.com/${pkg.name}@${pkg.version}/dist/producer`;

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
