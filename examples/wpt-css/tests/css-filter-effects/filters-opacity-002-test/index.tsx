/*
Source: imported/wpt-upstream/css/filter-effects/filters-opacity-002-test.html
WPT-Revision: 54f8f933629e7c010ae98a246729af01f8abcda5
Adapted-By: agent
Adapted-Date: 2026-08-07
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 9.8786%
Evidence: docs/evidence/css-filter-effects-filter-20260807-summary.tsv
Lynx-Issue: filter: opacity(0) is silently dropped on Lynx — the red box renders fully opaque below the green one, while brightness/grayscale/contrast filters apply correctly in the same batch.
Title: CSS Filter Test: Test opacity shorthand with value 0
Assert: CSS opacity filter will apply a transparency to the div element. Since opacity is 0, it has affect on the div to be transparent.
Note: The declaration under test ('filter: opacity(0)') is verbatim; the source .box1/.box2 classes become explicit ids. The two boxes stack in normal flow exactly as the source; a silently dropped filter leaves a visible red box below the green one. Part of the filter support probe batch. Verified on Android emulator-5554 (2026-08-07): FAILS at 9.8786% diff — the actual screenshot shows the red box fully opaque below the green box, so the opacity() declaration is dropped. Recorded as a suspected engine gap.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test filter opacity CSS shorthand. You should see a green box."}
</text>
<view id={"box1"}>
</view>
<view id={"box2"}>
</view>
</view>
</>);
