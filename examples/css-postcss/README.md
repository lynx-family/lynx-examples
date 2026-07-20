# PostCSS Example

The same info card as [`css-global`](../css-global), but every length is authored in `px`
against a 375px design width and converted to `vw` at build time by PostCSS, so the card
scales with the viewport.

The card is also rebuilt in [`css-modules`](../css-modules), [`css-preprocessors`](../css-preprocessors)
and [`tailwindcss`](../tailwindcss), so the five examples can be compared side by side —
same UI, different styling pipeline.

## Features Exercised

- Rspeedy's built-in PostCSS, configured through `postcss.config.js`
  ([`postcss-load-config`](https://github.com/postcss/postcss-load-config) picks it up automatically)
- [`postcss-px-to-viewport`](https://www.npmjs.com/package/postcss-px-to-viewport) with `viewportWidth: 375`

`1px` borders are left untouched — `postcss-px-to-viewport` skips values at or below its
`minPixelValue` (`1` by default).

## Getting Started

```bash
pnpm install
pnpm run dev
```

Scan the QRCode in the terminal with your LynxExplorer App to see the result.
