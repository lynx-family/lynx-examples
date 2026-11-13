# CSS Box Tests

Adapted WPT CSS box model tests for Lynx.

## Source

- WPT: https://github.com/web-platform-tests/wpt/tree/master/css/CSS2/css1
- WPT normal-flow sizing: https://github.com/web-platform-tests/wpt/tree/master/css/CSS2/normal-flow
- Spec: https://drafts.csswg.org/css2/box.html

## Tests

| Test | Status | Notes |
|------|--------|-------|
| width-length | passing | Adapted from WPT `c5523-width-000.xht`; Android diff 0.4044% against the original WPT test HTML via `--use-test-as-ref`. |
| height-length | passing | Adapted from WPT `c5524-height-000.xht`; Android diff 0.1976% against the original WPT test HTML via `--use-test-as-ref`. |
| c5524-height-001 | skipped | Adapted from WPT `c5524-height-001.xht`, but skipped until the web-test-render reference path preserves XHTML CDATA CSS for this source. |
| box-sizing-border-box-001 | passing | Adapted from WPT `box-sizing-border-box-001.xht`; Android diff 0.4410% against the original WPT test HTML via `--use-test-as-ref`. |
| box-sizing-border-box-002 | passing | Adapted from WPT `box-sizing-border-box-002.xht`; Android diff 0.4457% against the original WPT test HTML via `--use-test-as-ref`. |
| box-sizing-border-box-003 | partial | Adapted from WPT `box-sizing-border-box-003.xht`; box-sizing assertion is visually satisfied, but Android diff 2.1051% exceeds threshold due container border/position differences. |
| box-sizing-border-box-004 | partial | Adapted from WPT `box-sizing-border-box-004.xht`; box-sizing assertion is visually satisfied, but Android diff 2.7235% exceeds threshold due min/max-width clamping differences. |
| box-sizing-content-box-001 | partial | Adapted from WPT `box-sizing-content-box-001.xht`; content-box assertion is visually satisfied, but Android diff 1.0325% exceeds threshold due vertical offset vs WebView. |
| box-sizing-content-box-002 | partial | Adapted from WPT `box-sizing-content-box-002.xht`; content-box calc assertion is visually satisfied, but Android diff 1.0157% exceeds threshold due vertical offset vs WebView. |
| box-sizing-content-box-003 | partial | Adapted from WPT `box-sizing-content-box-003.xht`; content-box min/max assertion is visually satisfied, but Android diff 0.9905% exceeds threshold due vertical offset vs WebView. |
| min-width-length | passing | Adapted from WPT `min-width-006.xht`; Android diff 0.1415% in a historical pre-policy run; non-empty screenshot check passed; revalidate with web-test-render before treating as final parity evidence. |
| max-width-length | passing | Adapted from WPT `max-width-006.xht`; Android diff 0.1415% in a historical pre-policy run; non-empty screenshot check passed; revalidate with web-test-render before treating as final parity evidence. |
| min-height-length | passing | Adapted from WPT `min-height-006.xht`; Android diff 0.13% in a historical pre-policy run; non-empty screenshot check passed; revalidate with web-test-render before treating as final parity evidence. |
| max-height-length | passing | Adapted from WPT `max-height-006.xht`; Android diff 0.13% in a historical pre-policy run; non-empty screenshot check passed; revalidate with web-test-render before treating as final parity evidence. |
| margin-bottom-007 | passing | Adapted from WPT `margin-bottom-007.xht`; Android diff 0.0803% in a historical pre-policy run; non-empty screenshot check passed; revalidate with web-test-render before treating as final parity evidence. |

> **Note:** Padding tests have been moved to `tests/css2/margin-padding-clear/` to align with WPT's `css/CSS2/margin-padding-clear/` classification.

The box-sizing partial cases are not marked partial because `box-sizing` failed to parse. Their core assertion is visually satisfied: the boxes stay side-by-side and no red failure background is visible. They remain partial because the upstream WPT cases depend on `float: left`, browser body/text defaults, absolute positioning, and min/max clamping. Lynx does not support `float`, so the adaptations use flex row layout with `flex-shrink: 0`; that preserves the assertion but is not pixel-identical to WebView. The remaining diffs are from a few-pixel absolute-container offset in the content-box cases and container/clamping differences in the larger border-box cases.

The `*-006.xht` tests validate pixel length values on the min/max sizing properties. Their helper square dimensions use CSS absolute `1in` in WPT; the Lynx TTSS adaptation normalizes those setup-only dimensions to the CSS-equivalent `96px` while preserving the tested `min/max-* : 96px` declarations while noting that older validation predates the reference-blind policy and must be revalidated with web-test-render.

## Running

```bash
./scripts/run-tests-android.sh --test=width-length --use-test-as-ref
./scripts/run-tests-android.sh --test=height-length --use-test-as-ref
./scripts/run-tests-android.sh --test=min-width-length --diff-percent=0.5
./scripts/run-tests-android.sh --test=max-width-length --diff-percent=0.5
./scripts/run-tests-android.sh --test=min-height-length --diff-percent=0.5
./scripts/run-tests-android.sh --test=max-height-length --diff-percent=0.5
./scripts/run-tests-android.sh --test=margin-bottom-007 --diff-percent=0.5
./scripts/run-tests-android.sh --filter=css-box
```
