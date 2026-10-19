# Markdown

ReactLynx examples for the `<markdown>` element. Each snippet has its own entry,
following the multi-entry layout used by other element examples.

## Run

From the repository root, use the Node and pnpm versions in
[`CONTRIBUTING.md`](../../CONTRIBUTING.md):

```bash
pnpm install
pnpm --filter @lynx-example/markdown dev
```

Open an entry's QR code in a Lynx Explorer build that registers `<markdown>`.
To build all entries, including TypeScript validation:

```bash
pnpm --filter @lynx-example/markdown build
```

For local Android testing, serve `examples/markdown/dist` over HTTP, forward the
port with `adb reverse`, and open the bundle through
`lynx://open?url=<URL-encoded-bundle-URL>`.

## Entries

| Feature                       | Entry names                                                                                         |
| ----------------------------- | --------------------------------------------------------------------------------------------------- |
| Basic content and styles      | `basic`, `style`, `link_style`, `span_style`, `paragraph_style`                                     |
| Images and captions           | `image`, `image_size`, `image_caption`, `image_caption_style`, `gif`                                |
| Embedded views and text marks | `inline_view`, `span_mark`, `text_mark_attachments`                                                 |
| Truncation                    | `truncation`, `truncation_text`, `truncation_view`                                                  |
| Typewriter animation          | `typewriter`, `typewriter_cursor`, `typewriter_keep_cursor`, `typewriter_mask`                      |
| Selection                     | `text_selection`, `selection_menu`, `selection_select_all`, `selection_copy`, `selection_paragraph` |

For an entry named `<name>`, the source is `src/<name>/index.tsx` and the native
bundle is `dist/<name>.lynx.bundle`.

The selection examples build up the behavior in stages: native selection, menu
placement, selecting all text, reading selected text, and selecting a paragraph.
Long-press the text to begin. `selection_copy` displays the result of
`getSelectedText`; writing that result to the system clipboard requires a
host-provided clipboard API. The earlier menu examples show the menu before
adding the corresponding action handlers.

`getTextBoundingRect` returns page coordinates. Convert them to the menu
container's coordinates for positioning, or to the markdown element's coordinates
before passing them to `setTextSelection`.

## Website integration

After validating a snippet and preparing its screenshot, use the matching entry
in the website's `Go` component. For example:

```mdx
<Go
  example="markdown"
  defaultFile="src/basic/index.tsx"
  defaultEntryFile="dist/basic.lynx.bundle"
  entry="src/basic"
  img={markdownBasicImg}
/>
```

Use the same entry name for the source, bundle, and `entry` properties. Native
rendering and interactions must be checked in Lynx Explorer; a successful bundle
build alone does not verify native component behavior.
