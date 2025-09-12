// @ts-check

import { createUpdateOptions } from "@pnpm/meta-updater";
import { sortPackageJson } from "sort-package-json";

export default () => {
  return createUpdateOptions({
    "package.json": (manifest) => {
      return sortPackageJson({
        ...manifest,
        author: "Lynx Authors",
      });
    },
  });
};
