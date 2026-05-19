import { spawn } from "node:child_process";

import { rootDir } from "./env.js";

export const buildClientResources = async (serverUrl: string) => {
  await new Promise<void>((resolvePromise, rejectPromise) => {
    const child = spawn("npm", ["run", "build:client"], {
      cwd: rootDir,
      env: {
        ...process.env,
        CHAT_SERVER_URL: serverUrl,
      },
      stdio: "inherit",
      shell: process.platform === "win32",
    });

    child.on("error", (error) => {
      rejectPromise(error);
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolvePromise();
        return;
      }

      rejectPromise(
        new Error(
          `Client build failed while building the shared client bundle (exit code ${code ?? 0}).`,
        ),
      );
    });
  });
};

export const getClientResourceUrl = (serverUrl: string) => {
  const normalizedServerUrl = serverUrl.endsWith("/")
    ? serverUrl
    : `${serverUrl}/`;

  return new URL("client.lynx.bundle", normalizedServerUrl).toString();
};
