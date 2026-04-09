## Mouse Cursor

This example keeps only the Lynx UI portion of the `pc-mouse-cursor` showcase.
It demonstrates drag, hover, docking, and cursor-state feedback without any
desktop main-process, preload, or Lynxtron-specific code.

## Getting Started

Install the dependencies in the workspace root:

```bash
corepack enable
pnpm install
```

Then run the example:

```bash
pnpm --filter @lynx-example/mouse-cursor run dev
```

Hover and cursor changes are easiest to observe in web or desktop previews. The
drag interaction also works with touch input.
