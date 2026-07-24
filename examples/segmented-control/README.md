# Segmented Control

This example implements a controlled segmented selector with an optional trailing indicator and disabled visual state.

## Behavior

- The parent owns the selected value.
- Every item forwards its value when tapped.
- The disabled state changes opacity while preserving the source interaction semantics.
- Reset restores the initial selection.

## Commands

```bash
pnpm --filter @lynx-example/segmented-control dev
pnpm --filter @lynx-example/segmented-control build
```

This example intentionally excludes product navigation, analytics, theme services, and private icon packages.
