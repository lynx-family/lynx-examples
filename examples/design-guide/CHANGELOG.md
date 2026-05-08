# @lynx-example/design-guide

## 0.4.4

### Patch Changes

- a16f885: Upgrade Lynx packages to latest:

  - `@lynx-js/react`: `0.117.0` → `0.120.0`
  - `@lynx-js/react-umd`: `0.117.1` → `0.120.0`
  - `@lynx-js/react-rsbuild-plugin`: `0.13.0` → `0.16.1`
  - `@lynx-js/rspeedy`: `0.13.6` → `0.14.3`
  - `@lynx-js/template-webpack-plugin`: `0.10.6` → `0.11.0`
  - `@lynx-js/external-bundle-rsbuild-plugin`: `0.1.0` → `0.1.1`
  - `@lynx-js/lynx-bundle-rslib-config`: `0.3.0` → `0.3.2`
  - `@lynx-js/web-core`: `^0.19.8` → `^0.20.3`
  - `@lynx-js/web-elements`: `^0.11.3` → `^0.12.1`

  Migrate `@lynx-example/react-container` to the new `@lynx-js/web-core` entry points (`./client`) and use `createElement('lynx-view', ...)` instead of the JSX intrinsic, which is no longer auto-augmented.

## 0.4.3

### Patch Changes

- 2a5a904: Fix `force_field` example pointer coord drift when NavBar present by aligning clientX/clientY with screen-based boundingClientRect coords (not original web semantics).
- c0fce3a: Add README and update package keywords, include LICENSE/CHANGELOG.md.

## 0.4.2

### Patch Changes

- 8efb295: Fix pointer coordinate space mismatch (client vs page) in the `force_field` example on the web.

## 0.4.1

### Patch Changes

- b2668d8: Fix Lynx Web pointer coordinate drift by refreshing element rect on interaction start

## 0.4.0

### Minor Changes

- 77d7f52: Enable interactive pointer support for `force_field` on web and unify cross-platform pointer behavior.

### Patch Changes

- 77d7f52: Align cross-platform perception and document rendering differences in `gooey_effect`.

## 0.3.2

### Patch Changes

- 8c521d4: Refine the `force_field` example to clarify token override semantics.

## 0.3.1

### Patch Changes

- f706135: Adjust container styling to better fit the Go playground by removing extra padding.

## 0.3.0

### Minor Changes

- ec7a3b1: Add the `soft_glow` example to demonstrate token-based shadow composition. Refine visual details in the `force_field` example.

## 0.2.0

### Minor Changes

- e5a0a4a: Add the `force_field` example.

## 0.1.1

### Patch Changes

- f1376ee: Fix the entry wiring for the `color_wheels` example.
  Restructure CSS blocks to surface the syntax of core features earlier for better readability.

## 0.1.0

### Minor Changes

- 7e8dd6f: Initial release.
