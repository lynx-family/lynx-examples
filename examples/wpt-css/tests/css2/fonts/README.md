# CSS2 Fonts — Font Family, Font Weight, and Font Size Tests

Adapted WPT CSS2/CSS Fonts `font-family`, `font-weight`, and `font-size` tests for Lynx.

## Source

- WPT: https://github.com/web-platform-tests/wpt/tree/master/css/CSS2/fonts
- WPT CSS Fonts: https://github.com/web-platform-tests/wpt/tree/master/css/css-fonts
- Spec: https://drafts.csswg.org/css-fonts/#font-family-prop
- Spec: https://drafts.csswg.org/css-fonts/#font-weight-prop
- Spec: https://drafts.csswg.org/css-fonts/#font-size-prop

## Font Family Tests

| Test | Status | Notes |
|------|--------|-------|
| font-family-generic-002 | passing | CSS2 `serif` keyword overrides an embedded Ahem black-box sentinel; Android diff 0.0370%. |
| font-family-generic-004 | passing | CSS2 `cursive` keyword overrides the Ahem sentinel; Android diff 0.0777%. This Lynx build maps it to the same default sans glyphs as the other sampled generic families. |
| font-family-generic-005 | passing | CSS2 `fantasy` keyword overrides the Ahem sentinel; Android diff 0.0370%. This Lynx build maps it to the same default sans glyphs as the other sampled generic families. |
| font-family-generic-006 | passing | CSS2 `monospace` keyword overrides the Ahem sentinel; Android diff 0.0982%. This Lynx build maps it to the same default sans glyphs as the other sampled generic families. |
| font-family-name-001 | passing | WPT-derived focused adaptation for unquoted multi-token family names. The original WPT assumes CSSTest fonts are installed; the reference source and Lynx TTSS embed the same imported WPT CSSTest fonts as data URLs. Android diff 0.2547%. |
| font-family-name-002 | skipped | SDK gap: lowercase unquoted family names should match the embedded `CSSTest FamilyName` case-insensitively before fallback, but current Android evidence renders FAIL. |
| font-family-name-003 | skipped | SDK gap: mixed-case unquoted family names should match the embedded `CSSTest FamilyName` case-insensitively before fallback, but current Android evidence renders FAIL. |
| font-family-name-004 | passing | Double-quoted multi-token family names match the embedded CSSTest family before fallback. Android diff 0.2547%. |
| font-family-name-005 | passing | Single-quoted multi-token family names match the embedded CSSTest family before fallback. Android diff 0.2547%. |
| font-family-name-006 | passing | Unquoted family names with extra internal whitespace are condensed before matching the embedded CSSTest family. Android diff 0.2547%. |
| font-family-name-007 | passing | Double-quoted family names with extra internal spaces do not match the embedded family and fall back to CSSTest Fallback. Android diff 0.2547%. |
| font-family-name-008 | passing | Single-quoted family names with extra internal spaces do not match the embedded family and fall back to CSSTest Fallback. Android diff 0.2547%. |
| font-family-name-009 | skipped | SDK gap: hexadecimal CSS escapes in `font-family` should resolve before custom font matching, but current Android evidence renders FAIL. |
| font-family-name-012 | skipped | SDK bug candidate: quoted CSS string escape `"CSSTest Family\Name"` should resolve to `CSSTest FamilyName` before matching. Android verification fails at 1.0329%, so the case is kept skipped until the parser behavior is fixed. |
| font-family-name-013 | passing | Full font name matching works with the embedded CSSTest family. Android diff 0.2547%. |
| font-family-name-014 | passing | PostScript font name matching works with the embedded CSSTest family. Android diff 0.2547%. |
| font-family-name-017 | passing | Unknown unquoted first family falls back to the explicit fallback family rather than inheriting the body family. Android diff 0.3625%. |
| font-family-name-018 | passing | Unknown quoted first family falls back to the explicit fallback family rather than inheriting the body family. Android diff 0.3625%. |
| font-family-name-019 | passing | Unknown unquoted child family falls back to the explicit fallback family rather than inheriting the parent family. Android diff 0.3625%. |
| font-family-name-020 | passing | Unknown quoted child family falls back to the explicit fallback family rather than inheriting the parent family. Android diff 0.3625%. |
| font-family-name-021 | skipped | SDK gap: invalid mixed quoted/unquoted syntax should be dropped so the element inherits the body family, but current Android evidence renders `5678`. |
| font-family-name-022 | passing | Font-family values beginning with `x-large` or `caption` do not get misinterpreted as font shorthand. Android diff 0.0992%. |
| font-family-name-023 | passing | Quoted family names that look like font shorthand still match embedded alias fonts. Android diff 0.0554%. |
| font-family-name-024 | passing | System-font-keyword-like names in `font-family` are treated as family names, not `font` shorthand keywords. Android diff 0.4001%. |

Generic-family evidence: `docs/evidence/css-property-font-family-generic-20260813-summary.tsv`. Platform mapping notes: `docs/diagnostics/font-family-generic-20260813.md`.

Skipped or deferred upstream `font-family-name-*` cases:

| Test | Reason |
|------|--------|
| font-family-name-002, 003 | Custom font-family matching currently treats family names case-sensitively; CSS expects lowercase/mixed-case unquoted names to match `CSSTest FamilyName`. |
| font-family-name-009, 012 | CSS escapes in `font-family` are not resolved before custom font matching. |
| font-family-name-010, 011, 015 | Localized/internal font-name cases need platform font resources or localized family-name tables; embedding a renamed data URL would change the assertion. |
| font-family-name-016 | Numeric-token family-name coverage needs the original CSSTest Weights family resource to preserve the exact upstream assertion. |
| font-family-name-021 | Invalid mixed quoted/unquoted `font-family` syntax is not dropped before inheritance/fallback evaluation. |
| font-family-name-025 | Depends on system/Ahem assumptions and overlaps with the already adapted full/PostScript name coverage. |

## Font Weight Tests

| Test | Status | Notes |
|------|--------|-------|
| font-weight-applies-to-002 | passing | Font weights apply to `display: block` elements; Android diff 0.1213%. |
| font-weight-rule-001 | passing | `normal` corresponds to weight value `400`; Android diff 0.1218%. |
| font-weight-rule-002 | passing | Font weight 100–900 gradient; Android diff 0.1873%. |
| font-weight-rule-003 | passing | Child elements inherit their parent's actual font weight; Android diff 0.1213%. |
| font-weight-rule-004 | passing | `bolder` selects the next darker weight; Android diff 0.1213%. |
| font-weight-rule-005 | passing | `bolder` capped at `900`; Android diff 0.1037%. |
| font-weight-rule-006 | passing | `lighter` selects the next lighter weight; Android diff 0.1218%. |
| font-weight-rule-007 | passing | `lighter` floored at `100`; Android diff 0.1114%. |
| font-weight-rule-008 | passing | `bold` corresponds to weight value `700`; Android diff 0.1213%. |

## Font Size Tests (Pilot)

| Test | Status | Diff | Notes |
|------|--------|------|-------|
| font-size-001-pilot | passing | 0.0148% | Invalid `-1px` → falls back to `font-size: 0` → no red visible |
| font-size-002-pilot | passing | 0.0148% | `font-size: 0px` minimum → text invisible → no red visible |
| font-size-007-pilot | passing | 0.0179% | `+96px` (converted to `96px`) positive box comparison |
| font-size-023-pilot | passing | 0.0148% | Invalid `-1pc` → falls back to `font-size: 0` → no red visible |
| font-size-rule-001-pilot | passing | 0.0588% | Invalid `-1in` → ignored, both spans render at default size |

**Font-size adaptation notes**:

1. **Unsupported units**: `in`, `pt`, `pc`, `cm`, `mm` values under test are treated as invalid in Lynx (fall back to previous valid declaration)
2. **`+` prefix**: Lynx CSS parser does not support `+` prefix on length values — must remove (e.g., `+96px` → `96px`)
3. **Ahem font**: Most CSS2 font-size tests require Ahem for precise metrics. Embed via base64 `@font-face` with `font-family: 'Ahem'` in TTSS
4. **`line-height` with large font-size**: Use explicit `line-height` matching the `font-size` value for accurate box height comparison
5. **Page background**: Add `page { background: white; }` to prevent default system gray background from causing screenshot diff
6. **Keywords**: `medium`, `large`, `small`, `xx-small`, `larger`, `smaller` keywords are supported and compute correctly

## Running

```bash
# Run all font tests
./scripts/run-tests-android.sh --filter=css2/fonts --diff-percent=0.5 --use-test-as-ref

# Or run individual tests
./scripts/run-tests-android.sh --test=font-weight-applies-to-002 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-weight-rule-001 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-weight-rule-002 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-weight-rule-003 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-weight-rule-004 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-weight-rule-005 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-weight-rule-006 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-weight-rule-007 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-weight-rule-008 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-001 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-002 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-003 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-004 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-005 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-006 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-007 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-008 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-009 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-013 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-014 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-017 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-018 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-019 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-020 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-021 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-022 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-023 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-family-name-024 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-size-001-pilot --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-size-002-pilot --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-size-007-pilot --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-size-023-pilot --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=font-size-rule-001-pilot --diff-percent=0.5 --use-test-as-ref
```
