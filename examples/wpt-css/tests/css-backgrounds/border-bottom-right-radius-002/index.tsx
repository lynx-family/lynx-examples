/*
Source: imported/wpt-upstream/css/css-backgrounds/border-bottom-right-radius-002.xht
WPT-Revision: dd725197d591626ee4ad361929a0ba395a668fe4
Adapted-By: agent
Adapted-Date: 2026-07-29
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.4877%
Evidence: docs/evidence/css-backgrounds-border-radius-20260729-summary.tsv
Title: CSS Test: Borders. Border-bottom-right-radius using one length value: 25px
Assert: To verify border-bottom-right-radius property set with one length value, works as expected
Note: The trailing source <p><br/></p> after the test box is dropped; it only adds blank space below the assertion target. List bullets are materialized as text because Lynx has no list-item markers. Adaptation fix during validation: .__ua-ul changed from display:block to display:linear; linear-direction:column so the two bullet lines stack vertically instead of laying out horizontally. Verified on Android emulator-5554 (2026-07-29) at 0.4877% diff (17833 of 3655680 pixels); the residual diff is cross-engine text antialiasing.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"There should be a box with a rounded bottom right corner."}
</text>
<view className={"__ua-ul"}>
<text className={"__ua-li"}>
{"• PASS if only bottom right corner is rounded."}
</text>
<text className={"__ua-li"}>
{"• FAIL if the output is not as expected."}
</text>
</view>
<view id={"test"}>
</view>
</view>
</>);
