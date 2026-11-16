/*
Source: imported/wpt-upstream/css/filter-effects/filter-contrast-003.html
WPT-Revision: 54f8f933629e7c010ae98a246729af01f8abcda5
Adapted-By: agent
Adapted-Date: 2026-08-07
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0030%
Evidence: docs/evidence/css-filter-effects-filter-20260807-summary.tsv
Title: CSS Filter contrast: Test for CSS contrast filter shorthand
Assert: CSS contrast filter will apply a component transfer to the div element to adjust the contrast of the colors. contrast(200%) on #3f0000 clamps the dark red to black.
Note: The declaration under test ('filter: contrast(200%)') is verbatim; the source div selector becomes an explicit #test id. Part of the filter support probe batch. Verified on Android emulator-5554 (2026-08-07) at 0.0030% diff (108 px): the dark red box renders black, so contrast() applies.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"The test passes if there is a black box and no dark red."}
</text>
<view id={"test"}>
</view>
</view>
</>);
