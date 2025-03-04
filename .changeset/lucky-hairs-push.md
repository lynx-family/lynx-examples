---
"@lynx-example/animation": patch
---

fix: split out lynx.web.config and remove entry: `animation`, because it uses `getElementById` which is not supported by the web platform.
