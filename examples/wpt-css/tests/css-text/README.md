# CSS Text Tests

Adapted WPT CSS Text tests for Lynx.

## Source

- WPT: https://github.com/web-platform-tests/wpt/tree/master/css/css-text
- Spec: https://drafts.csswg.org/css-text/

## Tests

| Test | Status | Notes |
|------|--------|-------|
| text-align-center | passing | Adapted from WPT `CSS2/text/text-align-003.xht`; use original WPT visual HTML as reference |
| text-overflow-ellipsis | passing | Adapted from WPT `text-overflow-ellipsis-changing-scroll.html`; final scroll-reset reference state |
| letter-spacing-007 | passing | `letter-spacing: 96px` matches the Ahem margin control; Android `emulator-5554` diff 0.0144%. |
| text-decoration-001 | passing | Adapted from WPT `CSS2/text/text-decoration-001.xht`; shorthand `text-decoration: underline`; Android `emulator-5556` diff 0.0486%. |
| text-decoration-005 | passing | Adapted from WPT `CSS2/text/text-decoration-005.xht`; shorthand `underline overline`; Android `emulator-5556` diff 0.1269%. |
| text-decoration-006 | passing | Adapted from WPT `CSS2/text/text-decoration-006.xht`; shorthand `underline line-through`; Android `emulator-5556` diff 0.0859%. |
| text-decoration-081 | passing | Adapted from WPT `CSS2/text/text-decoration-081.xht`; underline propagation through inline content and spaces; Android `emulator-5556` diff 0.0436%. |
| text-decoration-line-011 | failing | `text-decoration-line: underline` has no visible effect while the shorthand control underlines; 0.3164% with a strict 0% limit. |
| text-shadow-basic | failing | Green text renders without the expected gray 3px/3px shadow; 0.0184% with a strict 0% limit. |
| word-break-normal-en-000 | passing | `word-break: normal` wraps the final Latin word at the ordinary space and matches the explicit two-line control; Android `emulator-5556` diff 0.0332%. |
| text-decoration-shorthand-styles-multiple | failing | Nested `solid coral`, `dashed skyblue`, and `wavy green` shorthand decorations are incomplete; strict diff 0.3769%. |
| text-decoration-shorthand-dotted-001 | failing | `text-decoration: dotted red underline` does not preserve the three continuous dotted lines across bidi runs; strict diff 12.1766%. |
| text-decoration-style-solid-visual | failing | `text-decoration-style: solid` changes the dashed baseline, but the coral underline is 9 device pixels high versus WebView's 15; strict diff 0.4025%. |
| text-decoration-style-dashed-visual | failing | `text-decoration-style: dashed` produces no pixel change from the solid-baseline Lynx card and the sky-blue overline remains absent; strict diff 0.3769%. |
| text-decoration-style-wavy-visual | failing | `text-decoration-style: wavy` changes the solid baseline, but the green wave geometry diverges from WebView; strict diff 0.3570%. |
| text-decoration-style-dotted-visual | failing | After setup-only nowrap and margin normalization, Lynx paints the same 17-device-pixel solid red band for all three thicknesses instead of WebView's 30/60/90px dotted bands; strict diff 7.9353%. |
| text-shadow-none-computed | failing | Manifest-bound testharness result: `text-shadow: none` returns an empty computed value instead of `none`. |
| text-decoration-double-computed | failing | Manifest-bound testharness result: `double overline underline` returns an empty computed shorthand instead of `underline overline double`. |
| text-decoration-style-double-computed | failing | Manifest-bound testharness result: `text-decoration-style: double` returns an empty computed value. |
| text-decoration-style-color-invalid | failing | The source grammar excludes colors; the `red` declaration does not preserve an observable dashed baseline and the computed assertion returns empty. |

Current `word-break: normal` evidence: `docs/evidence/css-property-word-break-normal-20260813-summary.tsv`.

Current shorthand style/color evidence: `docs/evidence/css-property-text-decoration-shorthand-styles-20260813-summary.tsv`.

Current longhand style evidence: `docs/evidence/css-property-text-decoration-style-values-20260813-summary.tsv`.

Current computed/parsing evidence:
`docs/evidence/css-property-text-shadow-none-20260813-testharness-summary.tsv`,
`docs/evidence/css-property-text-decoration-double-20260813-testharness-summary.tsv`,
`docs/evidence/css-property-text-decoration-style-double-20260813-testharness-summary.tsv`,
and `docs/evidence/css-property-text-decoration-style-color-20260813-testharness-summary.tsv`.

## Running

```bash
./scripts/run-tests.sh --filter=css-text
```
