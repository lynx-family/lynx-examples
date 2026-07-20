# CSS Pre-Processors Example

The same info card as [`css-global`](../css-global), rendered three times and styled by
Sass, Less and Stylus respectively — one card per language, so the three syntaxes can be
diffed against each other and against the plain-CSS version.

The card is also rebuilt in [`css-modules`](../css-modules), [`css-postcss`](../css-postcss) and
[`tailwindcss`](../tailwindcss), so the five examples can be compared side by side —
same UI, different styling pipeline.

## Features Exercised

- [`@rsbuild/plugin-sass`](https://rsbuild.rs/plugins/list/plugin-sass), [`@rsbuild/plugin-less`](https://rsbuild.rs/plugins/list/plugin-less)
  and [`@rsbuild/plugin-stylus`](https://rsbuild.rs/plugins/list/plugin-stylus) registered together
- Variables — `$accent` (Sass), `@accent` (Less), `accent =` (Stylus)
- Nesting, resolved into [descendant selectors](https://lynxjs.org/api/css/selectors.html#descendant-combinator)
  scoped by `.sass` / `.less` / `.stylus`
- Stylus' indentation-based syntax, with no braces, colons or semicolons

`.page` lives at the top level of `src/card.scss` — it is the only rule shared by all three cards.

## Getting Started

```bash
pnpm install
pnpm run dev
```

Scan the QRCode in the terminal with your LynxExplorer App to see the result.
