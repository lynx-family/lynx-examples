/*
Source: imported/wpt-upstream/css/filter-effects/filter-hue_rotate-002-test.html
WPT-Revision: 54f8f933629e7c010ae98a246729af01f8abcda5
Adapted-By: agent
Adapted-Date: 2026-08-07
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 9.9199%
Evidence: docs/evidence/css-filter-effects-filter-20260807-summary.tsv
Lynx-Issue: filter: hue-rotate(120deg) is silently dropped on Lynx — the box renders unfiltered red instead of green (#007100).
Title: CSS filter: hue-rotate turns red to green
Assert: Applying filter: hue-rotate(120deg) to a red rectangle should produce a green(#007100) rectangle.
Note: The declaration under test ('filter: hue-rotate(120deg)') is verbatim; the source div selector becomes an explicit #test id. Part of the filter support probe batch. Verified on Android emulator-5554 (2026-08-07): FAILS at 9.9199% diff — the actual screenshot shows the box unfiltered red instead of green (#007100), so the hue-rotate() declaration is dropped. Recorded as a suspected engine gap.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"You should see a green(#007100) rectangle."}
</text>
<view id={"test"}>
</view>
</view>
</>);
