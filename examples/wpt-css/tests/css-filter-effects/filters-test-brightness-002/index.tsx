/*
Source: imported/wpt-upstream/css/filter-effects/filters-test-brightness-002.html
WPT-Revision: 54f8f933629e7c010ae98a246729af01f8abcda5
Adapted-By: agent
Adapted-Date: 2026-08-07
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0557%
Evidence: docs/evidence/css-filter-effects-filter-20260807-summary.tsv
Title: CSS Filter Test: brightness(0%) turns red to black
Assert: This test verifies that the brightness shorthand works. Black rectangle must shown, when brightness set 0%.
Note: The declaration under test ('filter: brightness(0%)') is verbatim; the source div.brightness_zero becomes an explicit #test view. Part of the filter support probe batch — if the filter declaration is silently dropped, the red box renders unfiltered and the case fails. Verified on Android emulator-5554 (2026-08-07) at 0.0557% diff (2036 px): the red box renders black, so brightness() applies.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"You should see a black rectangle and no red."}
</text>
<view id={"test"}>
</view>
</view>
</>);
