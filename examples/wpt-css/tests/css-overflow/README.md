# CSS Overflow Tests

Adapted WPT CSS Overflow tests for Lynx.

## Source

- WPT: https://github.com/web-platform-tests/wpt/tree/master/css/css-overflow
- Spec: https://drafts.csswg.org/css-overflow/

## Tests

| Test | Status | Notes |
|------|--------|-------|
| overflow-hidden | passing | Adapted from WPT `overflow-hidden-resize-with-stacking-context-child.html`; final 100px reference state |
| text-overflow-clip-001 | passing | `text-overflow: clip` renders the same 360 x 90 device-pixel Ahem rectangle as WebView; diff 0.0940%. |

Evidence: `docs/evidence/css-property-text-overflow-clip-20260813-summary.tsv`.

## Running

```bash
./scripts/run-tests.sh --filter=css-overflow
```
