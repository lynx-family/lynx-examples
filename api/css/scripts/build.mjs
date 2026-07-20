// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { spawnSync } from "node:child_process";

const command = process.platform === "win32" ? "rspeedy.cmd" : "rspeedy";
const chunks = Number(process.env.CSS_API_BUILD_CHUNKS ?? 8);

function runBuild(env = {}) {
  const result = spawnSync(command, ["build"], {
    env: {
      ...process.env,
      ...env,
    },
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

if (process.env.CI !== "1") {
  runBuild();
  process.exit(0);
}

for (let index = 0; index < chunks; index++) {
  console.log(`Building CSS API entries chunk ${index + 1}/${chunks}`);
  runBuild({
    CSS_API_BUILD_CHUNK_INDEX: String(index),
    CSS_API_BUILD_CHUNKS: String(chunks),
  });
}
