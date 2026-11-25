// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { checkCatalogDependencies } from "./check-catalog-dependencies.mjs";

const catalog = {
  "@lynx-js/react": "0.129.4",
  "@lynx-js/lynx-ui": "3.142.0",
  "@lynx-js/config-rsbuild-plugin": "0.2.3",
  "@lynx-js/react-rsbuild-plugin": "0.22.4",
  "@lynx-js/rsbuild-plugin": "0.2.0",
  "@rsbuild/core": "2.1.6",
};

describe("checkCatalogDependencies", () => {
  it("rejects the direct dependency pins introduced by PR #473", () => {
    const manifest = {
      dependencies: { "@lynx-js/react": "0.129.4" },
      devDependencies: {
        "@lynx-js/config-rsbuild-plugin": "0.3.0",
        "@lynx-js/react-rsbuild-plugin": "0.22.4",
        "@lynx-js/rsbuild-plugin": "0.2.0",
        "@rsbuild/core": "2.3.3",
      },
    };

    assert.deepEqual(checkCatalogDependencies(manifest, catalog), [
      { field: "dependencies", name: "@lynx-js/react", specifier: "0.129.4" },
      {
        field: "devDependencies",
        name: "@lynx-js/config-rsbuild-plugin",
        specifier: "0.3.0",
      },
      {
        field: "devDependencies",
        name: "@lynx-js/react-rsbuild-plugin",
        specifier: "0.22.4",
      },
      {
        field: "devDependencies",
        name: "@lynx-js/rsbuild-plugin",
        specifier: "0.2.0",
      },
      { field: "devDependencies", name: "@rsbuild/core", specifier: "2.3.3" },
    ]);
  });

  it("checks every dependency field, including private packages", () => {
    const manifest = {
      private: true,
      dependencies: { "@lynx-js/react": "^0.129.4" },
      devDependencies: { "@lynx-js/react": "~0.129.4" },
      peerDependencies: { "@lynx-js/react": ">=0.129.4" },
      optionalDependencies: { "@lynx-js/react": "npm:@lynx-js/react@0.129.4" },
    };

    assert.deepEqual(
      checkCatalogDependencies(manifest, catalog).map(({ field }) => field),
      [
        "dependencies",
        "devDependencies",
        "peerDependencies",
        "optionalDependencies",
      ],
    );
  });

  it("accepts catalog references, workspace links, and wildcard peers", () => {
    assert.deepEqual(
      checkCatalogDependencies({
        dependencies: { "@lynx-js/react": "catalog:" },
        devDependencies: { "@lynx-js/rsbuild-plugin": "workspace:*" },
        peerDependencies: { "@lynx-js/react": "*" },
      }, catalog),
      [],
    );
  });

  it("rejects wildcard versions in non-peer dependency fields", () => {
    for (
      const field of [
        "dependencies",
        "devDependencies",
        "optionalDependencies",
      ]
    ) {
      assert.deepEqual(
        checkCatalogDependencies({
          [field]: { "@lynx-js/react": "*" },
        }, catalog),
        [{ field, name: "@lynx-js/react", specifier: "*" }],
      );
    }
  });

  it("leaves dependencies outside the default catalog unrestricted", () => {
    assert.deepEqual(
      checkCatalogDependencies({
        dependencies: { "@lynx-js/luna-styles": "0.2.2" },
        devDependencies: { typescript: "~5.9.3" },
      }, catalog),
      [],
    );
  });

  it("uses catalog entries added after the check was written", () => {
    assert.deepEqual(
      checkCatalogDependencies(
        { dependencies: { "new-shared-package": "1.0.0" } },
        { "new-shared-package": "1.0.0" },
      ),
      [{
        field: "dependencies",
        name: "new-shared-package",
        specifier: "1.0.0",
      }],
    );
  });

  it("rejects named catalogs for dependencies managed by the default catalog", () => {
    assert.deepEqual(
      checkCatalogDependencies(
        { dependencies: { "@lynx-js/react": "catalog:custom" } },
        catalog,
      ),
      [{
        field: "dependencies",
        name: "@lynx-js/react",
        specifier: "catalog:custom",
      }],
    );
  });

  it("accepts packages without dependency declarations", () => {
    assert.deepEqual(checkCatalogDependencies({}, catalog), []);
  });
});
