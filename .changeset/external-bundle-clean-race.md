---
"@lynx-example/external-bundle": patch
---

Fix a race condition in `pnpm build:bundle` where `comp` and `lodash-es` rslib builds run in parallel and both clean the shared `dist-external-bundle/` output dir at startup.

When the slower bundle's startup clean lands after the faster bundle has already written its template, the faster bundle's file gets deleted, and the subsequent rspeedy build fails with `external-bundle-rsbuild-plugin could not find local bundle .../dist-external-bundle/comp.template.js`.

The fix:

- Set `cleanDistPath: false` on both `comp.rslib.config.js` and `lodash.rslib.config.js` so neither parallel build can wipe the shared dir.
- Clean `dist-external-bundle/` once before the parallel builds in the `build:bundle` script, so stale outputs from previous runs are still cleared.
