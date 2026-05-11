import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { prepareDotEnvLocal, rootDir } from "./env.js";

type ServerHandle = {
  close: () => void;
  on: (event: "close", listener: () => void) => void;
};

type LaunchResult = {
  server: ServerHandle;
  host: string;
  port: number;
  serverUrl: string;
};

export const startServer = async (): Promise<LaunchResult> => {
  const moduleUrl = pathToFileURL(resolve(rootDir, "dist/server/index.js")).href;
  const { startServer: launchServer } = (await import(moduleUrl)) as {
    startServer: () => Promise<LaunchResult>;
  };

  return launchServer();
};

const runStandaloneServer = async () => {
  await prepareDotEnvLocal();

  const { server } = await startServer();

  const shutdown = () => {
    server.close();
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);

  server.on("close", () => {
    process.exit(0);
  });
};

if (
  process.argv[1]
  && import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  await runStandaloneServer();
}
