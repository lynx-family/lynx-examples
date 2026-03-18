# Tailwind CSS Example

A settings/profile UI built with ReactLynx + [Tailwind CSS](https://tailwindcss.com/), featuring runtime theme switching via CSS variables — the same pattern used by [shadcn/ui](https://ui.shadcn.com/).

## Features Exercised

- Tailwind CSS with `@lynx-js/tailwind-preset`
- Semantic design tokens via CSS variables (`--color-primary`, `--color-background`, etc.)
- Class-based theme switching (dark, light, ocean)
- CSS variable inheritance (`enableCSSInheritance: true`)
- `useState`, `useCallback` for interactive state
- `bindtap` event handling
- `"background-only"` directive for background-thread state updates
