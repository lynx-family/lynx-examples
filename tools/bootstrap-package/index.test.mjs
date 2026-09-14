// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { getPackagePublication, validatePackageName } from "./index.mjs";

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
