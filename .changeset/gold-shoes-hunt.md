---
"@lynx-example/tanstack-router": patch
---

Resolve breaking change introduced in `@tanstack/router@1.127.9`. 

Fix white screen issue on ReactLynx by explicitly setting `isServer: false` in router configuration to override incorrect server environment detection.
