# CSS UI Tests

Adapted WPT CSS UI and interaction-related tests for Lynx.

## Source

- WPT computed-value source:
  `svg/interact/parsing/pointer-events-computed.svg`
- Revision: `8e3d3261432a28800a28676d9b7617b3e7bc0f33`
- Spec: https://drafts.csswg.org/css-ui/

## Tests

| Test | Status | Notes |
| --- | --- | --- |
| pointer-events-auto-computed | failing | The exact standard WPT `pointer-events: auto` computed helper completes on Android but returns an empty computed value instead of `auto`. |

Evidence:
`docs/evidence/css-property-pointer-events-auto-20260813-testharness-summary.tsv`.

## Running

```bash
ANDROID_SERIAL=<device> ./scripts/run-tests-android.sh \
  --mode=testharness --device=<device> \
  --test=pointer-events-auto-computed \
  --timeout=60 --port=<unique-port> \
  --output-dir=results/<run-id>/pointer-events-auto-computed
```
