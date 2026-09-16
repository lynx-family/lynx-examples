// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  getPackagePublication,
  getTrustedPublisherInstructions,
  parseArguments,
  validatePackageName,
} from "./index.mjs";

describe("parseArguments", () => {
  it("enables publish command output for inspection", () => {
    assert.equal(
      parseArguments([
        "examples/design-guide",
        "--dry-run",
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

describe("getTrustedPublisherInstructions", () => {
  it("provides CLI and npmjs.com setup methods", () => {
    const instructions = getTrustedPublisherInstructions(
      "@lynx-example/new-package",
    ).join("\n");

    assert.match(instructions, /Method 1: npmjs\.com/u);
    assert.match(
      instructions,
      /npm trust github @lynx-example\/new-package \\\n    --repo lynx-family\/lynx-examples \\\n    --file release\.yml \\\n    --env npm \\\n    --allow-publish \\\n    --otp=YOUR_OTP/u,
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
