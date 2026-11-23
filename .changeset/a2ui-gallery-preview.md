---
"@lynx-example/a2ui": patch
---

Fix the Gallery preview's main-thread first render by passing a null message store until background initialization completes. Give each Trip day its own template component IDs so rendering one day cannot overwrite the other day's data context.
