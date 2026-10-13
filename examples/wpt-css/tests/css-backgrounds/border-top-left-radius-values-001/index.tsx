/*
Source: imported/wpt-upstream/css/css-backgrounds/border-top-left-radius-values-001.htm
WPT-Revision: dd725197d591626ee4ad361929a0ba395a668fe4
Adapted-By: agent
Adapted-Date: 2026-07-29
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0222%
Evidence: docs/evidence/css-backgrounds-border-radius-20260729-summary.tsv
Title: CSS Test: 'Border-top-left-radius' with two values.
Assert: The first value of the 'border-top-left-radius' is the horizontal radius of the rounded corner and the second value is its vertical radius.
Note: The in-page blue #reference ruler is adapted as an absolutely positioned overlay. The source anchors it at left/top 10px, exactly the body content origin (body margin: 10px); it is materialized as left/top 0 inside the positioned .body wrapper so Lynx reproduces the same setup geometry, and z-index: 1 keeps it painted above #test as in Web. The radius under test is untouched. Verified on Android emulator-5554 (2026-07-29) at 0.0222% diff (813 of 3655680 pixels); the residual diff is cross-engine antialiasing along the rounded corner and ruler edges.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"reference"}>
</view>
<view id={"test"}>
</view>
<text className={"__ua-p"}>
{"Test passes if the two blue lines are radii of the rounded corner."}
</text>
</view>
</>);
