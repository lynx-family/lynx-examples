---
"@lynx-example/i18n": patch
"@lynx-example/tailwindcss": patch
---

Publish `dist/` so the built bundles reach npm again. Without a `files` field npm falls back to the ignore rules, which exclude `dist/`, so the last releases shipped no `.lynx.bundle` and any consumer rendering the example had nothing to load.
