// @ts-check

import { createUpdateOptions } from "@pnpm/meta-updater";
import path from "node:path";
import { sortPackageJson } from "sort-package-json";

const REPOSITORY_TYPE = "git";
const REPOSITORY_URL = "git+https://github.com/lynx-family/lynx-examples.git";

const toPosixPath = (filePath) => filePath.split(path.sep).join("/");

const resolvePackageDir = (dirOrOptions) => {
  if (typeof dirOrOptions === "string") return dirOrOptions;
  if (!dirOrOptions || typeof dirOrOptions !== "object") return null;
  if (typeof dirOrOptions.dir === "string") return dirOrOptions.dir;
  if (typeof dirOrOptions.resolvedPath === "string") {
    return path.dirname(dirOrOptions.resolvedPath);
  }
  if (typeof dirOrOptions.filePath === "string") {
    return path.dirname(dirOrOptions.filePath);
  }
  return null;
};

const normalizeRepository = (repository, dirOrOptions, workspaceDir) => {
  const packageDir = resolvePackageDir(dirOrOptions);
  const directory = packageDir == null
    ? ""
    : toPosixPath(path.relative(workspaceDir, packageDir));
  if (repository == null) {
    return {
      type: REPOSITORY_TYPE,
      url: REPOSITORY_URL,
      ...(directory ? { directory } : {}),
    };
  }

  if (typeof repository !== "object" || Array.isArray(repository)) {
    return {
      type: REPOSITORY_TYPE,
      url: REPOSITORY_URL,
      ...(directory ? { directory } : {}),
    };
  }

  return {
    ...repository,
    type: REPOSITORY_TYPE,
    url: REPOSITORY_URL,
    ...(directory ? { directory } : {}),
  };
};

export default (workspaceDir) => {
  return createUpdateOptions({
    "package.json": (manifest, options) => {
      return sortPackageJson({
        ...manifest,
        author: "Lynx Authors",
        repository: normalizeRepository(
          manifest.repository,
          options,
          workspaceDir,
        ),
      });
    },
  });
};
