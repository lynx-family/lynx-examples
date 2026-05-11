import { buildClientResources, getClientResourceUrl } from "./client.js";
import { prepareDotEnvLocal } from "./env.js";
import { startServer } from "./server.js";

const main = async () => {
  await prepareDotEnvLocal();

  console.info("Starting server...");
  const { server, serverUrl } = await startServer();

  let exitCode = 0;
  const shutdown = () => {
    server.close();
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);

  try {
    console.info("Building client resources...");
    await buildClientResources(serverUrl);

    const clientResourceUrl = getClientResourceUrl(serverUrl);
    console.info([
      "Startup complete:",
      `- Server ready: ${serverUrl}`,
      `- Client resource: ${clientResourceUrl}`,
    ].join("\n"));
  } catch (error) {
    exitCode = 1;
    console.error(error);
  } finally {
    server.on("close", () => {
      process.exit(exitCode);
    });

    if (exitCode !== 0) {
      server.close();
    }
  }
};

await main();
