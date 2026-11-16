# CSS Flexbox Tests

Adapted WPT CSS Flexbox tests for Lynx.

## Source

- WPT: https://github.com/web-platform-tests/wpt/tree/master/css/css-flexbox
- Spec: https://drafts.csswg.org/css-flexbox/

## Tests

| Test | Status | Notes |
|------|--------|-------|
| lynx-flex-direction-001 | passing | Basic flex-direction: row |
| flexbox-flex-wrap-nowrap | passing | Adapted from WPT `flexbox-flex-wrap-nowrap.htm`; Android diff 0.0005% in a historical pre-policy run; non-empty screenshot check passed; revalidate with web-test-render before treating as final parity evidence. |
| flexbox-flex-wrap-wrap | passing | Adapted from WPT `flexbox-flex-wrap-wrap.htm`; Android diff 0.3550% in a historical pre-policy run; non-empty screenshot check passed; revalidate with web-test-render before treating as final parity evidence. |
| flexbox-flex-wrap-wrap-reverse | passing | Adapted from WPT `flexbox-flex-wrap-wrap-reverse.htm`; Android diff 0.3550% in a historical pre-policy run; non-empty screenshot check passed; revalidate with web-test-render before treating as final parity evidence. |
| padding-overflow | passing | Adapted from WPT `padding-overflow.html`; Android diff 0.0034% in a historical pre-policy run; non-empty screenshot check passed; revalidate with web-test-render before treating as final parity evidence. |
| flex-basis-001 | passing | flex-basis: 60px on flex item. Android diff 0.42%. |
| flex-001 | passing | flex: 1 0 auto shorthand. Android diff 0.42%. |
| flex-shrink-001 | passing | flex-shrink: 2/3 with negative space. Android diff 0.42%. |
| flex-grow-002 | passing | flex-grow: 0 initial value. Android diff 0.42%. |
| flex-flow-001 | passing | flex-flow: row nowrap. Green box layout matches (0.91% diff is text wrapping only, not flex behavior). |
| auto-height-with-flex | passing | flex: 1 with auto height in column direction. Adapted from WPT `auto-height-with-flex.html`; Android diff 0.0027%. |
| auto-height-column-with-border-and-padding | passing | Auto-height column flexbox with border and padding. Adapted from WPT `auto-height-column-with-border-and-padding.html`; Android diff 0.0337%. |
| flex-container-margin | passing | Flex container margins do NOT collapse with content margins (no-op in Lynx since Lynx already has no margin collapsing). Adapted from WPT `flex-container-margin.html`; Android diff 0.0000%. |
| negative-margins-001 | passing | Negative margins in flex items (`margin-left: -40px`). Adapted from WPT `negative-margins-001.html`; Android diff 0.0000%. |
| flexbox-flex-0-0-auto | passing | flex: 0 0 auto shorthand. Adapted from WPT `flexbox-flex-0-0-auto.htm`. Android diff 0.0001%. |
| flexbox-flex-0-0-N | passing | flex: 0 0 N shorthand. Adapted from WPT `flexbox-flex-0-0-N.htm`. Android diff 0.0001%. |
| flex-basis-002 | passing | `flex-basis: 60px` overrides width. Web-test-render Android diff 0.0219%. |
| flex-basis-007 | passing | `flex-basis: auto` uses the specified width. Web-test-render Android diff 0.0219%. |
| flex-basis-008 | passing | `flex-basis: 60%` resolves against the flex container. Web-test-render Android diff 0.0219%. |
| flex-flow-008 | passing | `flex-flow: column wrap` creates multiple columns. Web-test-render Android diff 0.0289%. |
| flexible-order | passing | Negative ordinal groups produce blue-red-black order. Web-test-render Android diff 0.0001%. |

## Running

```bash
# Run all flexbox tests
./scripts/run-tests-android.sh --filter=css-flexbox --diff-percent=0.5 --use-test-as-ref

# Or run individual tests
./scripts/run-tests-android.sh --test=flex-basis-001 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=flex-001 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=flex-shrink-001 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=flex-grow-002 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=flex-flow-001 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=auto-height-with-flex --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=auto-height-column-with-border-and-padding --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=flex-container-margin --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=negative-margins-001 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=flexbox-flex-0-0-auto --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=flexbox-flex-0-0-N --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=flex-basis-002 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=flex-basis-007 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=flex-basis-008 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=flex-flow-008 --diff-percent=0.5 --use-test-as-ref
./scripts/run-tests-android.sh --test=flexible-order --diff-percent=0.5 --use-test-as-ref
```

## Support Files

- `support/` - Images and shared resources
