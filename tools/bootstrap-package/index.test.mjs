// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import assert from "node:assert/strict";
import path from "node:path";
import { describe, it } from "node:test";

import {
  getBootstrapPublishCommands,
  getPackagePublication,
  getTrustedPublisherInstructions,
  main,
  parseArguments,
  quoteShellArgument,
  supportsColor,
  validatePackageName,
} from "./index.mjs";

async function captureConsole(callback) {
  const stdout = [];
  const stderr = [];
  const originalLog = console.log;
  const originalWarn = console.warn;

  console.log = (...args) => stdout.push(args.join(" "));
  console.warn = (...args) => stderr.push(args.join(" "));

  try {
    await callback();
  } finally {
    console.log = originalLog;
    console.warn = originalWarn;
  }

  return {
    stderr: stderr.join("\n"),
    stdout: stdout.join("\n"),
  };
}

describe("parseArguments", () => {
  it("enables publish command output for inspection", () => {
    assert.equal(
      parseArguments([
        "examples/design-guide",
        "--force",
        "--show-publish-commands",
      ]).showPublishCommands,
      true,
    );
  });
});

describe("validatePackageName", () => {
  it("accepts packages in the supported npm scope", () => {
    assert.doesNotThrow(() => {
      validatePackageName("@lynx-example/example");
    });
  });

  it("rejects packages outside the supported npm scope", () => {
    assert.throws(
      () => {
        validatePackageName("@other-scope/example");
      },
      /must use the @lynx-example\/ scope/u,
    );
  });

  it("rejects an uppercase package name", () => {
    assert.throws(
      () => {
        validatePackageName("@lynx-example/Example");
      },
      /Invalid package name/u,
    );
  });
});

describe("getPackagePublication", () => {
  it("reports a package missing from the registry", async () => {
    assert.deepEqual(
      await getPackagePublication(
        "@lynx-example/new-package",
        async () => ({ ok: false, status: 404 }),
      ),
      { published: false, versions: [] },
    );
  });

  it("reports a package that already exists", async () => {
    assert.deepEqual(
      await getPackagePublication(
        "@lynx-example/existing-package",
        async () => ({
          json: async () => ({
            versions: {
              "0.0.0": {},
              "1.0.0": {},
            },
          }),
          ok: true,
          status: 200,
        }),
      ),
      { published: true, versions: ["0.0.0", "1.0.0"] },
    );
  });

  it("fails closed when the registry cannot be verified", async () => {
    await assert.rejects(
      getPackagePublication(
        "@lynx-example/new-package",
        async () => ({ ok: false, status: 503 }),
      ),
      /HTTP 503/u,
    );
  });
});

describe("supportsColor", () => {
  it("disables color for non-TTY streams and NO_COLOR", () => {
    assert.equal(supportsColor({ isTTY: false }, {}), false);
    assert.equal(supportsColor({ isTTY: true }, { NO_COLOR: "" }), false);
    assert.equal(supportsColor({ isTTY: true }, {}), true);
  });
});

describe("getBootstrapPublishCommands", () => {
  it("quotes the output path and stops if changing directory fails", () => {
    const outDir = path.join(
      process.cwd(),
      "bootstrap output",
      "package's files",
    );

    assert.deepEqual(
      getBootstrapPublishCommands(outDir),
      [
        "npm login --registry=https://registry.npmjs.org/",
        "cd 'bootstrap output/package'\\''s files' && \\",
        "  npm publish --access public --tag oidc-bootstrap --registry=https://registry.npmjs.org/",
      ],
    );
  });

  it("keeps output paths outside the working directory absolute", () => {
    const outDir = path.resolve(process.cwd(), "../bootstrap output");
    const commands = getBootstrapPublishCommands(outDir);

    assert.equal(
      commands[1],
      `cd ${quoteShellArgument(outDir)} && \\`,
    );
  });
});

describe("getTrustedPublisherInstructions", () => {
  it("provides CLI and npmjs.com setup methods", () => {
    const instructions = getTrustedPublisherInstructions(
      "@lynx-example/new-package",
    ).join("\n");

    assert.match(instructions, /Method 1: npmjs\.com/u);
    assert.match(
      instructions,
      /npm trust github @lynx-example\/new-package \\\n    --repo lynx-family\/lynx-examples \\\n    --file release\.yml \\\n    --environment npm \\\n    --allow-publish \\\n    --registry=https:\/\/registry\.npmjs\.org\/ \\\n    --otp=YOUR_OTP/u,
    );
    assert.match(
      instructions,
      /Method 2: npm CLI \(requires npm >= 11\.15\.0\)/u,
    );
    assert.match(
      instructions,
      /https:\/\/www\.npmjs\.com\/package\/@lynx-example\/new-package\/access/u,
    );
    assert.match(instructions, /Publisher: GitHub Actions/u);
    assert.ok(
      instructions.indexOf("Method 1: npmjs.com")
        < instructions.indexOf("Method 2: npm CLI"),
    );
  });
});

describe("main", () => {
  it("does not print executable commands during a published-package dry run", async () => {
    const { stderr, stdout } = await captureConsole(() =>
      main(
        [
          "examples/design-guide",
          "--dry-run",
          "--show-publish-commands",
        ],
        async () => ({
          json: async () => ({ versions: { "1.0.0": {} } }),
          ok: true,
          status: 200,
        }),
      )
    );

    assert.match(stderr, /already exists on the public npm registry/u);
    assert.match(stdout, /--- package\.json \(preview\) ---/u);
    assert.doesNotMatch(stdout, /npm publish --access/u);
    assert.doesNotMatch(stdout, /npm trust github/u);
  });
});
