# @lynx-example/text-composition

## 0.3.1

### Patch Changes

- 8b8f5f0: Upgrade the shared ReactLynx runtime and React UMD bundle to 0.129.4, the React build plugin to 0.22.4, and the Lynx build plugin to 0.2.0.

  Manage A2UI and OpenUI's genui dependency through the workspace catalog at 0.8.1, and align A2UI's config plugin and Rsbuild core with the shared versions.

## 0.3.0

### Minor Changes

- 74c7cb1: Use the binary template for web platform bundle

  Since https://github.com/lynx-family/lynx-website/pull/1235 upgraded the @lynx-js/web-core of the lynx website, now we are able to use the new binary template for web platform.

## 0.2.2

### Patch Changes

- 1553efd: Build with Rsbuild and `pluginLynx` instead of Rspeedy. The entry keeps its `main` name, so the artifact names are unchanged.
- 1553efd: Upgrade the Lynx dependencies to their latest releases.

## 0.2.1

### Patch Changes

- 39c8c27: Upgrade Lynx packages to the latest release and move the remaining canary pins onto the catalog.

## 0.2.0

### Minor Changes

- b1a8c4b: Add a text-composition example with 24 independently navigable source-parity cases covering natural wrapping, inline text/image/view content, truncation, events, bidirectional text, a development guide, and a reusable coding skill.

## 0.1.0

### Minor Changes

- Add a ReactLynx text-composition example with 24 independently navigable text-layout cases, a development guide, and a reusable coding skill.
