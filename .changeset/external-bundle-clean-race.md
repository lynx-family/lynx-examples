---
"@lynx-example/external-bundle": patch
---

Fix a race condition in `pnpm build:bundle` where `lodash-es` and `comp` rslib builds run in parallel and both clean the shared `dist-external-bundle/` output dir on startup.

When the larger `lodash-es` bundle starts late (e.g. under CI scheduling jitter), its startup clean wipes `comp.template.js` that the faster `comp` build has already written, causing `external-bundle-rsbuild-plugin` to fail with `could not find local bundle .../dist-external-bundle/comp.template.js`.

Disable `cleanDistPath` for the slower bundle (`lodash.rslib.config.js`) so it can no longer wipe the faster bundle's output. The faster `comp` build still cleans the directory at startup, which is sufficient because its clean always finishes before either bundle writes.
