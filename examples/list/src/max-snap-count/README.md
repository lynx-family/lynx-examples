# Compare maxSnapCount

The two native lists have identical dimensions, data and event handlers.
Only `item-snap.maxSnapCount` differs: 1 on the top list, 3 on the bottom.

Build with `pnpm --filter @lynx-example/list build` and open
`dist/maxSnapCount.lynx.bundle` in Android or iOS Lynx 4.1+.

Fling each row to the left with a similar short, fast gesture. Keep the
finger's drag distance below one item width (112 CSS pixels). Compare the
numbered cards and the `Item N` readout, which comes directly from the
native `snap` event. A sufficiently fast fling can advance the bottom list
by more than one item, capped at three; actual distance also depends on
the gesture and remaining items. This is a cap, not a command to advance
exactly three items. The limit applies to the fling's snapping phase after
release, not to all movement since touch-down: a long drag can already
cross items before the fling begins.

There are no timers, transforms or `scrollTo` calls. Do not use a Web
preview as evidence of native `maxSnapCount` behavior.
