// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { getNewPublishablePackages, isNpmNotFoundError, parsePublishedVersions } from "./check-new-packages.mjs";

describe("getNewPublishablePackages", () => {
  it("ignores a package moved without changing its name", () => {
    const currentPackages = [
      { name: "@lynx-example/example", path: "new/example" },
    ];
    const basePackageNames = new Set(["@lynx-example/example"]);

    assert.deepEqual(
      getNewPublishablePackages(currentPackages, basePackageNames),
      [],
    );
  });

  it("detects a package that changes from private to public", () => {
    const currentPackages = [
      { name: "@lynx-example/example", path: "examples/example" },
    ];

    assert.deepEqual(
      getNewPublishablePackages(currentPackages, new Set()),
      currentPackages,
    );
  });

  it("detects a package name or scope change", () => {
    const currentPackages = [
      { name: "@lynx-example/example", path: "examples/example" },
    ];
    const basePackageNames = new Set(["@lynx-example/old-example"]);

    assert.deepEqual(
      getNewPublishablePackages(currentPackages, basePackageNames),
      currentPackages,
    );
  });

  it("rejects a new package outside the supported npm scope", () => {
    const currentPackages = [
      { name: "@other-scope/example", path: "examples/example" },
    ];

    assert.throws(
      () => getNewPublishablePackages(currentPackages, new Set()),
      /must use the @lynx-example\/ scope/u,
    );
  });

  it("rejects an uppercase package name", () => {
    const currentPackages = [
      { name: "@lynx-example/Example", path: "examples/example" },
    ];

    assert.throws(
      () => getNewPublishablePackages(currentPackages, new Set()),
      /valid npm name/u,
    );
  });
});

describe("parsePublishedVersions", () => {
  it("accepts multiple published versions", () => {
    assert.deepEqual(
      parsePublishedVersions(
        "[\"0.0.0-oidc-bootstrap.0\",\"1.0.0\"]",
        "@lynx-example/example",
      ),
      ["0.0.0-oidc-bootstrap.0", "1.0.0"],
    );
  });

  it("accepts a single version response", () => {
    assert.deepEqual(
      parsePublishedVersions(
        "\"0.0.0-oidc-bootstrap.0\"",
        "@lynx-example/example",
      ),
      ["0.0.0-oidc-bootstrap.0"],
    );
  });

  it("accepts an empty versions response", () => {
    assert.deepEqual(
      parsePublishedVersions("[]", "@lynx-example/example"),
      [],
    );
  });
});

describe("isNpmNotFoundError", () => {
  it("recognizes npm E404 errors", () => {
    assert.equal(
      isNpmNotFoundError({ stderr: "npm error code E404" }),
      true,
    );
  });

  it("does not treat network failures as unpublished packages", () => {
    assert.equal(
      isNpmNotFoundError({ stderr: "npm error code ETIMEDOUT" }),
      false,
    );
  });
});
