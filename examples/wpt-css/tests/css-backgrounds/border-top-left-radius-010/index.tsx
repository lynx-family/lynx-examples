/*
Source: imported/wpt-upstream/css/css-backgrounds/border-top-left-radius-010.xht
WPT-Revision: dd725197d591626ee4ad361929a0ba395a668fe4
Adapted-By: agent
Adapted-Date: 2026-07-29
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.4384%
Evidence: docs/evidence/css-backgrounds-border-radius-20260729-summary.tsv
Title: CSS Test: Borders. Border-top-left-radius using one length value: 25px 0
Assert: To verify if either length is 0, then the corner is not rounded.
Note: The in-page #reference square box is adapted alongside #test. The source <p><br/></p> between them becomes a .spacer view (1em collapsed margins plus one 19px empty line) because Lynx has no margin collapsing or <br>. List bullets are materialized as text. Verified on Android emulator-5554 (2026-07-29) at 0.4384% diff. The .spacer height is calibrated to 19px (not 1.2em = 19.2px) so both engines round it to the same device pixel, eliminating a former 1px vertical shift of #reference. A pixel-level row-range audit confirms the core assertion: the #test and #reference box row ranges both match the WebView oracle exactly (477-776 and 942-1241), so the two square boxes render identically. The residual diff is cross-engine text antialiasing in the instruction paragraph and bullets, within the 0.5-1% range docs/adaptation-guide.md expects for tests containing text and below the default 0.5% threshold.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"There should be two boxes with no rounded corners."}
</text>
<view className={"__ua-ul"}>
<text className={"__ua-li"}>
{"• PASS if the two boxes below are the same."}
</text>
<text className={"__ua-li"}>
{"• FAIL if the output is not as expected."}
</text>
</view>
<view id={"test"}>
</view>
<view className={"spacer"}>
</view>
<view id={"reference"}>
</view>
</view>
</>);
