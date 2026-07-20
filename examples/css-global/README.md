# Global CSS Example

An info card built with ReactLynx and a plain, globally scoped stylesheet.

The same card is rebuilt in [`css-modules`](../css-modules), [`css-preprocessors`](../css-preprocessors),
[`css-postcss`](../css-postcss) and [`tailwindcss`](../tailwindcss), so the five examples can be compared
side by side — same UI, different styling pipeline.

## Features Exercised

- Importing a `.css` file from a component (`import './App.css'`)
- Class names applied through `className`
- Global scope: every class is visible to the whole page, so names must not collide
- `display: flex` on every row container — Lynx defaults to
  [linear layout](https://lynxjs.org/api/css/properties/display.html), where `flex-direction` has no effect

## Getting Started

```bash
pnpm install
pnpm run dev
```

Scan the QRCode in the terminal with your LynxExplorer App to see the result.
