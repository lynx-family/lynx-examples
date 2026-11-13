/*
Source: imported/wpt-upstream/css/filter-effects/filters-grayscale-001-test.html
WPT-Revision: 54f8f933629e7c010ae98a246729af01f8abcda5
Adapted-By: agent
Adapted-Date: 2026-08-07
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1057%
Evidence: docs/evidence/css-filter-effects-filter-20260807-summary.tsv
Title: CSS Filter Test: Test grayscale shorthand with value 1
Assert: If the test runs, you should see a black olive colored rectangle.
Note: The declaration under test ('filter: grayscale(1)') is verbatim; the source div selector becomes an explicit #test id. The source carries fuzzy metadata (maxDifference=0-1; totalPixels=0-40000) for sub-pixel color rounding; the runner's 0.5% threshold covers it. Part of the filter support probe batch. Verified on Android emulator-5554 (2026-08-07) at 0.1057% diff (3863 px): the red box renders gray, so grayscale() applies; the residual diff is sub-pixel color rounding at the box edge, consistent with the source's fuzzy metadata.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"You should see a black olive colored rectangle."}
</text>
<view id={"test"}>
</view>
</view>
</>);
