# CSS Masking Tests

Adapted WPT CSS Masking static visual tests for Lynx.

## Source

- WPT: https://github.com/web-platform-tests/wpt/tree/master/css/css-masking
- Spec: https://drafts.fxtf.org/css-masking/

## Tests

| Test | Status | Notes |
|------|--------|-------|
| mask-image-data-url-image | passing | Direct `mask-image: url(data:...)` raster-mask sample; Android `emulator-5556` diff 0.0740%, with identical core color counts/bboxes. |
| mask-image-none-computed | failing | Manifest-bound testharness result: `mask-image: none` returns an empty computed value instead of `none`. |

Evidence: `docs/evidence/css-property-mask-image-data-url-20260813-summary.tsv`.
Computed-value evidence:
`docs/evidence/css-property-mask-image-none-20260813-testharness-summary.tsv`.

## Running

```bash
./scripts/run-tests-android.sh --test=mask-image-data-url-image --use-test-as-ref
```
