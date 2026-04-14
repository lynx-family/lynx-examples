## Desktop

This example groups desktop-oriented cursor demos for Lynx:

- `cursor`: preview several CSS cursor keywords on hover.
- `mouse-cursor`: drag the Lynx logo into a desktop frame and observe hover,
  docking, and cursor-state feedback.

## Getting Started

Install the dependencies in the workspace root:

```bash
corepack enable
pnpm install
```

Then run the example:

```bash
pnpm --filter @lynx-example/desktop run dev
```

Both demos are exposed as separate entry points, so the dev server will list
`cursor` and `mouse-cursor`.
