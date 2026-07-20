---
"@lynx-example/lazy-bundle": patch
---

Add a `standalone` entry that loads the same lazy component from a separately built producer bundle, and drop the hash from lazy bundle filenames so the lazy bundle URL stays stable across releases.
