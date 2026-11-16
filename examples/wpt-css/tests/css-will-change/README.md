# CSS Will Change Tests

Adapted WPT CSS `will-change` tests for Lynx.

## Source

- WPT: https://github.com/web-platform-tests/wpt/tree/master/css/css-will-change
- Spec: https://drafts.csswg.org/css-will-change/

## Tests

| Test | Status | Notes |
|------|--------|-------|
| will-change-contents-crash | passing | Crash-only `will-change: contents` coverage; both colored text rows render and Android diff is 0.0034%. This does not prove optimization behavior. |

Evidence: `docs/evidence/css-property-will-change-contents-20260813-summary.tsv`.

## Running

```bash
./scripts/run-tests-android.sh --test=will-change-contents-crash --use-test-as-ref
```
