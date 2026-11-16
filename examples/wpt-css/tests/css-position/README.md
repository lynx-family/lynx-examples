# CSS Position Tests

Adapted WPT CSS positioning tests for Lynx.

## Source

- WPT CSS Position: https://github.com/web-platform-tests/wpt/tree/master/css/css-position
- WPT CSS2 Positioning: https://github.com/web-platform-tests/wpt/tree/master/css/CSS2/positioning
- WPT CSS2 Stacking Context: https://github.com/web-platform-tests/wpt/tree/master/css/CSS2/stacking-context
- WPT CSS2 Absolute Positioning: https://github.com/web-platform-tests/wpt/tree/master/css/CSS2/abspos
- WPT CSS2 Visual Formatting Model: https://github.com/web-platform-tests/wpt/tree/master/css/CSS2/visuren

## Tests

| Test | Status | Notes |
|------|--------|-------|
| position-relative-001 | passing | Adapted from WPT `position-relative-001.html`; Android diff 0.0528% in a historical pre-policy run; tests `left: 100%` percentage inset on relative positioned elements; revalidate with web-test-render before treating as final parity evidence. |
| position-relative-002 | passing | Adapted from WPT `position-relative-002.html`; Android diff 0.4467% in a historical pre-policy run; tests `left: 100px` pixel inset and `left: -100%` negative percentage inset; revalidate with web-test-render before treating as final parity evidence. |
| position-relative-003 | passing | Adapted from WPT `position-relative-003.html`; Android diff 0.4467% in a historical pre-policy run; tests percentage insets with nested relative positioned containers and `position: fixed` child; revalidate with web-test-render before treating as final parity evidence. |
| position-absolute-001 | passing | Adapted from WPT `position-absolute-001.xht`; Android diff 0.3014% with original WPT test HTML as WebView reference on 2026-05-26. Evidence: `docs/evidence/css-position-absolute-css2-20260526-summary.tsv`. |
| position-absolute-002 | passing | Adapted from WPT `position-absolute-002.xht`; Android diff 0% with original WPT test HTML as WebView reference on 2026-05-26. Evidence: `docs/evidence/css-position-absolute-css2-20260526-summary.tsv`. |
| position-absolute-003 | passing | Adapted from WPT `position-absolute-003.xht`; Android diff 0% with original WPT test HTML as WebView reference on 2026-05-26. Evidence: `docs/evidence/css-position-absolute-css2-20260526-summary.tsv`. |
| position-absolute-004 | passing | Adapted from WPT `position-absolute-004.xht`; Android diff 0%; setup-only physical units normalized to px (`1in = 96px`). Evidence: `docs/evidence/css-position-absolute-css2-20260526-summary.tsv`. |
| position-absolute-005 | passing | Adapted from WPT `position-absolute-005.xht`; Android diff 0%; tests fixed descendant containment under an absolute ancestor; setup-only physical units normalized to px. Evidence: `docs/evidence/css-position-absolute-css2-20260526-summary.tsv`. |
| position-absolute-006 | passing | Adapted from WPT `position-absolute-006.xht`; Android diff 0.2821%; setup-only physical units normalized to px (`1in = 96px`). Evidence: `docs/evidence/css-position-absolute-css2-20260526-summary.tsv`. |
| position-absolute-007 | passing | Adapted from WPT `position-absolute-007.xht`; Android diff 0%; setup-only physical units normalized to px; unsupported `float` removed from the non-asserted blue setup box. Evidence: `docs/evidence/css-position-absolute-css2-20260526-summary.tsv`. |
| position-absolute-008 | passing | Adapted from WPT `position-absolute-008.xht`; Android diff 0%; removed unsupported `float` because the WPT assertion expects it to have no visual effect when `position:absolute` applies. Evidence: `docs/evidence/css-position-absolute-css2-20260526-summary.tsv`. |
| position-absolute-large-negative-inset | passing | Adapted from WPT `position-absolute-large-negative-inset.html`; Android diff 0% in a historical pre-policy run; tests `left: -99999999999px` extreme negative inset on absolute positioned element; revalidate with web-test-render before treating as final parity evidence. |
| zindex-affects-block-in-inline | passing | Adapted from WPT `zindex-affects-block-in-inline.html`; Android diff 0.4477% in a historical pre-policy run; non-empty screenshot check passed; revalidate with web-test-render before treating as final parity evidence. |
| position-fixed-001 | failing | Adapted from WPT `position-fixed-001.xht`; tests fixed elements don't impact later siblings. Lynx treats `left:auto; top:auto` as `left:0; top:0` → green square at x=0 vs Web static position at x=24. Diff 2.733%. |
| fixed-pos-stacking-001 | failing | Adapted from WPT `fixed-pos-stacking-001.xht`; tests `position:fixed` creates stacking context. Uses explicit `left:10em; top:3em` so NOT affected by `auto→0` bug. Diff 0.5089% (near-passing, text rendering diff). |
| left-offset-position-fixed-001 | failing | Adapted from WPT `left-offset-position-fixed-001.xht`; tests `left:auto` offset of fixed box. Lynx treats `left:auto` as `left:0` → red square at x=0 (left edge) instead of x=50% (center) → green doesn't cover red. Diff 4.545%. |
| position-fixed-root-element-flex | failing | Adapted from WPT `position-fixed-root-element-flex.html`; tests box inset properties on fixed flex root. Uses explicit `left:10px; right:20px; top:30px; bottom:40px` so NOT affected by `auto→0` bug. Diff 2.483% (text/border rendering). |
| static-fixed-inside-abspos | failing | Adapted from WPT `static-fixed-inside-abspos.html`; tests fixed positioning inside absolute container. Inner fixed green has no explicit left/top → Lynx places at x=0 (viewport edge) instead of static position inside red div (~100px). Diff 2.555%. |

## Running

```bash
# Individual tests
./scripts/run-tests-android.sh --test=position-relative-001 --diff-percent=0.5
./scripts/run-tests-android.sh --test=position-relative-002 --diff-percent=1.0
./scripts/run-tests-android.sh --test=position-relative-003 --diff-percent=1.0
./scripts/run-tests-android.sh --test=position-absolute-001 --diff-percent=0.5
./scripts/run-tests-android.sh --filter=position-absolute-00 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=position-absolute-large-negative-inset --diff-percent=0.5
./scripts/run-tests-android.sh --test=zindex-affects-block-in-inline --diff-percent=0.5
./scripts/run-tests-android.sh --test=position-fixed-001 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=fixed-pos-stacking-001 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=left-offset-position-fixed-001 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=position-fixed-root-element-flex --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=static-fixed-inside-abspos --diff-percent=0.5 --use-test-as-ref

# All css-position tests
./scripts/run-tests-android.sh --filter=css-position
```
