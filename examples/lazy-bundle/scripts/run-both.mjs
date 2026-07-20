import { spawn } from "node:child_process";
import { createInterface } from "node:readline";

const subcommand = process.argv[2];
if (!["dev", "preview", "build"].includes(subcommand)) {
  process.stderr.write(
    `Usage: node scripts/run-both.mjs <dev|preview|build> [--local] [--fetchbundle]\n`,
  );
  process.exitCode = 1;
  throw new Error(`unknown subcommand: ${subcommand ?? "(none)"}`);
}

// `--local` makes the standalone entry resolve the producer bundle from the local
// producer server instead of unpkg, so the production output can be exercised
// end to end before the package is published.
// `--fetchbundle` builds the FetchBundle loader variant into its own output
// root. See demo-config.js for both.
const env = {
  ...process.env,
  ...(process.argv.includes("--local") ? { LYNX_PRODUCER_LOCAL: "1" } : {}),
  ...(process.argv.includes("--fetchbundle")
    ? { LAZY_BUNDLE_FETCHBUNDLE: "1" }
    : {}),
};

const rspeedy = process.platform === "win32" ? "rspeedy.cmd" : "rspeedy";

const start = (config, stdio) => spawn(rspeedy, [subcommand, "--config", config], { stdio, env });

const prefix = (stream, label) => {
  const rl = createInterface({ input: stream });
  rl.on("line", (line) => {
    process.stdout.write(`[${label}] ${line}\n`);
  });
};

if (subcommand === "build") {
  // Both builds have to finish. Exiting as soon as one is done would kill the
  // other mid-build and report a success that never produced its output.
  const run = (config, label) =>
    new Promise((resolve) => {
      const child = start(config, ["ignore", "pipe", "pipe"]);
      prefix(child.stdout, label);
      prefix(child.stderr, label);
      child.on("exit", (code) => resolve(code ?? 1));
    });

  const codes = await Promise.all([
    run("lynx.config.producer.js", "producer"),
    run("lynx.config.ts", "app"),
  ]);
  process.exitCode = codes.find((code) => code !== 0) ?? 0;
} else {
  const producer = start("lynx.config.producer.js", ["ignore", "pipe", "pipe"]);
  prefix(producer.stdout, "producer");
  prefix(producer.stderr, "producer");

  const app = start("lynx.config.ts", "inherit");

  const shutdown = (code) => {
    if (typeof code === "number") process.exitCode = code;
    if (!producer.killed) producer.kill("SIGTERM");
    if (!app.killed) app.kill("SIGTERM");
  };

  app.on("exit", (code) => shutdown(code ?? 0));
  producer.on("exit", (code) => {
    if (code !== 0 && code !== null) shutdown(code);
  });
  process.on("SIGINT", () => shutdown(0));
  process.on("SIGTERM", () => shutdown(0));
}
