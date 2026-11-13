# CSS Filter Effects Tests

Adapted static visual WPT Filter Effects tests for Lynx.

## Source

- WPT: https://github.com/web-platform-tests/wpt/tree/master/css/filter-effects
- Revision: `8e3d3261432a28800a28676d9b7617b3e7bc0f33` (2026-08-12 batch); `54f8f933629e7c010ae98a246729af01f8abcda5` (2026-08-07 probe batch)
- Spec: https://drafts.fxtf.org/filter-effects-1/

Match-reference targets are not imported or used. Each card is compared with
the original WPT test HTML rendered in Android WebView.

The 2026-08-07 batch was a support probe: Lynx `filter` support was unknown
before it, so each card is a minimal solid-color scene whose oracle only
matches when the filter actually applies. The identity baseline
(`filters-test-brightness-001`) would pass vacuously if filter were
unimplemented; it is meaningful only because `filters-test-brightness-002`
proves `brightness()` applies.

Note: `filters-opacity-002-test` (2026-08-07 probe) and `filters-opacity-002`
(2026-08-12 batch) adapt the same upstream source and record the same failure;
both are kept with their own evidence.

## Tests

| Test | Status | Notes |
| --- | --- | --- |
| `filter-grayscale-001` | passing | `grayscale(100%)` passes at 0.0249%; WebView and Lynx produce the same gray-box bbox and dominant color. |
| `filters-opacity-002` | failing | `opacity(0)` fails at 9.8786%; Lynx leaves the complete red sentinel visible. |
| `filters-drop-shadow-001` | failing | `drop-shadow(20px 10px green)` fails at 1.9919%; Lynx leaves the red sentinel visible where the shadow should cover it. |
| `filter-none-computed` | passing | Manifest-bound testharness result: `filter: none` computes to the exact expected `none`. |
| `backdrop-filter-none-computed` | failing | Manifest-bound testharness result: `backdrop-filter: none` returns an empty computed value instead of `none`. |
| `filters-test-brightness-002` | passing | Android `emulator-5554`, diff 0.0557%; `brightness(0%)` turns red to black. |
| `filters-grayscale-001-test` | passing | Android `emulator-5554`, diff 0.1057%; `grayscale(1)` turns red to gray. |
| `filter-contrast-003` | passing | Android `emulator-5554`, diff 0.0030%; `contrast(200%)` clamps dark red to black. |
| `filters-test-brightness-001` | passing | Android `emulator-5554`, diff 0.0432%; `brightness(100%)` identity baseline (genuine — brightness is proven by -002). |
| `filters-opacity-002-test` | failing | Android `emulator-5554`, diff 9.8786%; `opacity(0)` declaration silently dropped, red box renders opaque. Same source/result as `filters-opacity-002`. |
| `filter-hue_rotate-002-test` | failing | Android `emulator-5554`, diff 9.9199%; `hue-rotate(120deg)` declaration silently dropped, box stays red. |
| `clip-under-filter-001` | failing | Android `emulator-5554`, diff 1.7574%; blur IS implemented and the descendant clip applies — residual diff is cross-engine gaussian kernel spread (non-defect difference), above the 0.5% pixel threshold. |

Evidence: `docs/evidence/css-property-filter-functions-20260812-summary.tsv` and
`docs/evidence/css-filter-effects-filter-20260807-summary.tsv`.
Computed-value evidence:
`docs/evidence/css-property-filter-none-20260813-testharness-summary.tsv` and
`docs/evidence/css-property-backdrop-filter-none-20260813-testharness-summary.tsv`.
Diagnosis: `docs/diagnostics/filter-functions-20260812.md`.
See `docs/wpt-filter-coverage.md` for the upstream inventory, selection
rationale, the Lynx filter support conclusion, and validation details.

## Running

```bash
ANDROID_SERIAL=<device> ./scripts/run-tests-android.sh \
  --device=<device> --test=<test-name> --retry=0 \
  --use-test-as-ref --diff-percent=0.5 --wait-time=10
```
