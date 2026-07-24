# Tag Choice

This example implements a controlled, wrapping, multi-select tag group.

## Behavior

- Entries without a label are not rendered.
- Selection is derived from the parent-owned array.
- Tapping a tag reports its key and previous selected state.
- Repeated taps toggle the entry without changing option order.
- Reset restores the deterministic initial selection.

## Commands

```bash
pnpm --filter @lynx-example/tag-choice dev
pnpm --filter @lynx-example/tag-choice build
```

This example intentionally excludes generated API types, feedback submission, analytics, and network requests.
