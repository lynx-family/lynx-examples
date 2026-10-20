# CSS Display Tests

Adapted WPT CSS display and visibility tests for Lynx.

## Source

- WPT: https://github.com/web-platform-tests/wpt/tree/master/css/CSS2/visufx
- Spec: https://www.w3.org/TR/CSS21/visufx.html

## Tests

| Test | Status | Notes |
|------|--------|-------|
| visibility-hidden-layout | passing | Adapted from WPT `visibility-layout-001.xht`; Android diff 0.0158% against the original WPT test HTML via `--use-test-as-ref`; non-empty screenshot check passed. |

## Running

```bash
./scripts/run-tests-android.sh --test=visibility-hidden-layout --use-test-as-ref --diff-percent=0.5
```
