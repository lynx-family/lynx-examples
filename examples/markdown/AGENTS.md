# Markdown examples

- Preserve one `src/<name>/index.tsx` entry per documented behavior and keep
  `rsbuild.config.ts` and the README entry table in sync.
- Use `<markdown>` and public assets. Keep examples runnable without internal
  modules or internal asset services.
- Run `pnpm --filter @lynx-example/markdown build` from the repository root and
  verify changed behaviors in a Lynx Explorer build that registers `<markdown>`.
- Selection bounds returned by `getTextBoundingRect` use page coordinates.
  Convert to the containing view for menus and to the markdown element for
  `setTextSelection`; do not assume the component is at the page origin.
- `getSelectedText` only reads the selection. Do not claim clipboard success
  without calling a clipboard API supplied by the host.
- Verify custom truncation placement, typewriter cursor completion, and text
  selection with real interactions. Keep original screenshots or recordings for
  acceptance; do not hide native rendering failures with fixed offsets.
