# CSS Cascade tests

This module contains Lynx adaptations of WPT CSS Cascade tests.

`layer-basic` and `layer-important` use the
`dynamic-stylesheet-computed-style-v1` nonvisual profile. Their generated
manifests preserve 34 basic layer cases (68 computed-style assertions) and 9
`!important` layer-priority cases (18 computed-color assertions) against their
classic TTML `<text>` targets. They are instances of the generic same-profile
shape: one or more canonical classed
targets, a static `target`/`target.<class>`/`.<class>` query resolved during
adaptation, and a safe computed property (dot access or hyphenated
`getPropertyValue`). The classic data processor hosts the main-thread
selector/computed-style bridge; entry-local generated CSS sections are loaded,
replaced, cleared, and checked without evaluating the WPT source script.

The profile remains fail-closed: dynamic or compound selectors, dynamic or
unsafe properties, additional DOM/harness behavior, and unrepresented
dependencies require another documented profile rather than being inferred
from this card.

Future same-profile cards are created in two commands: run
`tools/nonvisual-wpt-adapter.mjs` into the card's `generated/` directory, then
run `tsx tools/scaffold-nonvisual-card.ts --adapted-by=<actor>
--adapted-date=YYYY-MM-DD <card>/generated/manifest.json <card>`. The scaffold
generates the classic card files from the shared runtime templates; the runner
reads the selected manifest dynamically, with no `lynx.config.ts` entry.

All 43 cases and 86 assertions pass on Android. Canonical evidence is stored in
`layer-basic/evidence/testharness-result.json`,
`layer-important/evidence/testharness-result.json`, and their matching
`docs/evidence/css-cascade-layer-*-testharness-summary.tsv` summaries. These
are 2 adapted sources out of the 44 related Cascade Layers files inventoried at
the pinned revision; the other 42 remain deferred, not skipped.
