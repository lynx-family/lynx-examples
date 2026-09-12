---
"@lynx-example/tanstack-router": patch
---

Pass `origin` to `createRouter` so `@tanstack/router-core` stops reading `window.origin` on the Lynx main thread.
