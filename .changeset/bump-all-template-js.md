---
"@lynx-example/7guis": patch
"@lynx-example/accessibility": patch
"@lynx-example/action-sheet": patch
"@lynx-example/animation": patch
"@lynx-example/bankcards": patch
"@lynx-example/composing-elements": patch
"@lynx-example/css": patch
"@lynx-example/css-api": patch
"@lynx-example/design-guide": patch
"@lynx-example/desktop": patch
"@lynx-example/element-manipulation": patch
"@lynx-example/event": patch
"@lynx-example/external-bundle": patch
"@lynx-example/fetch": patch
"@lynx-example/frame": patch
"@lynx-example/gallery": patch
"@lynx-example/hello-world": patch
"@lynx-example/i18n": patch
"@lynx-example/ifr": patch
"@lynx-example/image": patch
"@lynx-example/input": patch
"@lynx-example/layout": patch
"@lynx-example/lazy-bundle": patch
"@lynx-example/list": patch
"@lynx-example/local-storage": patch
"@lynx-example/lynx-api": patch
"@lynx-example/main-thread": patch
"@lynx-example/native-element": patch
"@lynx-example/networking": patch
"@lynx-example/overlay": patch
"@lynx-example/page": patch
"@lynx-example/performance-api": patch
"@lynx-example/react-lifecycle": patch
"@lynx-example/refresh": patch
"@lynx-example/scroll-coordinator": patch
"@lynx-example/scroll-view": patch
"@lynx-example/svg": patch
"@lynx-example/swiper": patch
"@lynx-example/tailwindcss": patch
"@lynx-example/tanstack-router": patch
"@lynx-example/text": patch
"@lynx-example/textarea": patch
"@lynx-example/title-bar-view": patch
"@lynx-example/view": patch
"@lynx-example/viewpager": patch
"@lynx-example/with-solidjs": patch
"@lynx-example/zustand": patch
---

Upgrade Lynx packages to latest:

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
