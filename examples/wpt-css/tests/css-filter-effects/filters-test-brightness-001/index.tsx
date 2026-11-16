/*
Source: imported/wpt-upstream/css/filter-effects/filters-test-brightness-001.html
WPT-Revision: 54f8f933629e7c010ae98a246729af01f8abcda5
Adapted-By: agent
Adapted-Date: 2026-08-07
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0432%
Evidence: docs/evidence/css-filter-effects-filter-20260807-summary.tsv
Title: CSS Filter Test: brightness(100%) identity baseline
Assert: This test verifies that the brightness shorthand works. Green rectangle must shown, when brightness set to 100%.
Note: The declaration under test ('filter: brightness(100%)') is verbatim; the source div.brightness_hundred becomes an explicit #test view. Identity baseline: if Lynx does not implement filter at all, this case passes vacuously (no filter == identity), so its pass is only meaningful alongside the non-identity probe cards. Verified on Android emulator-5554 (2026-08-07) at 0.0432% diff (1581 px); because filters-test-brightness-002 proves brightness() applies, this identity result is genuine identity behavior rather than a dropped declaration.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"You should see green rectangle."}
</text>
<view id={"test"}>
</view>
</view>
</>);
