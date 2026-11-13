/*
Source: imported/wpt-upstream/css/css-flexbox/align-content-horiz-002.html
WPT-Revision: dd432b1d351796d3f25e1d1f243ba52da16c3a0a
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Final run 003r2 on Pixel_9_Pro emulator-5554 (2026-08-27) produced 3.6683% diff above the 0.5% threshold; align-content: space-evenly is unsupported, and logical start/end collapse to flex-start/flex-end before wrap-reverse layout. Diagnosis: results/css-flexbox-20-20260828/align-content-horiz-002/debug-report.json
Title: CSS Test: Testing 'align-content' in a row wrap-reverse flex container
Assert: The align-content values position one to three lines in fixed-width row wrap-reverse flex containers.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
{/* default (stretch) */}
<view className={"flexbox"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"8"} data-offset-y={"198"}>
</view>
</view>
<view className={"flexbox"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"30"} data-offset-y={"198"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"110"} data-offset-x={"30"} data-offset-y={"8"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"30"} data-offset-y={"8"}>
</view>
</view>
</view>
<view className={"flexbox"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"52"} data-offset-y={"198"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"70"} data-offset-x={"52"} data-offset-y={"88"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"52"} data-offset-y={"88"}>
</view>
</view>
<view className={"c"} data-expected-width={"20"} data-expected-height={"40"} data-offset-x={"52"} data-offset-y={"48"}>
</view>
</view>
{/* flex-start */}
<view className={"flexbox __inline-001"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"74"} data-offset-y={"198"}>
</view>
</view>
<view className={"flexbox __inline-002"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"96"} data-offset-y={"198"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"96"} data-offset-y={"168"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"96"} data-offset-y={"168"}>
</view>
</view>
</view>
<view className={"flexbox __inline-003"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"118"} data-offset-y={"198"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"118"} data-offset-y={"168"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"118"} data-offset-y={"168"}>
</view>
</view>
<view className={"c"} data-expected-width={"20"} data-expected-height={"40"} data-offset-x={"118"} data-offset-y={"128"}>
</view>
</view>
{/* flex-end */}
<view className={"flexbox __inline-004"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"140"} data-offset-y={"8"}>
</view>
</view>
<view className={"flexbox __inline-005"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"162"} data-offset-y={"38"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"162"} data-offset-y={"8"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"162"} data-offset-y={"8"}>
</view>
</view>
</view>
<view className={"flexbox __inline-006"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"184"} data-offset-y={"78"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"184"} data-offset-y={"48"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"184"} data-offset-y={"48"}>
</view>
</view>
<view className={"c"} data-expected-width={"20"} data-expected-height={"40"} data-offset-x={"184"} data-offset-y={"8"}>
</view>
</view>
{/* center */}
<view className={"flexbox __inline-007"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"206"} data-offset-y={"103"}>
</view>
</view>
<view className={"flexbox __inline-008"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"228"} data-offset-y={"118"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"228"} data-offset-y={"88"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"228"} data-offset-y={"88"}>
</view>
</view>
</view>
<view className={"flexbox __inline-009"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"250"} data-offset-y={"138"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"250"} data-offset-y={"108"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"250"} data-offset-y={"108"}>
</view>
</view>
<view className={"c"} data-expected-width={"20"} data-expected-height={"40"} data-offset-x={"250"} data-offset-y={"68"}>
</view>
</view>
{/* space-between */}
<view className={"flexbox __inline-010"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"272"} data-offset-y={"198"}>
</view>
</view>
<view className={"flexbox __inline-011"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"294"} data-offset-y={"198"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"294"} data-offset-y={"8"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"294"} data-offset-y={"8"}>
</view>
</view>
</view>
<view className={"flexbox __inline-012"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"316"} data-offset-y={"198"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"316"} data-offset-y={"108"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"316"} data-offset-y={"108"}>
</view>
</view>
<view className={"c"} data-expected-width={"20"} data-expected-height={"40"} data-offset-x={"316"} data-offset-y={"8"}>
</view>
</view>
{/* space-around */}
<view className={"flexbox __inline-013"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"338"} data-offset-y={"103"}>
</view>
</view>
<view className={"flexbox __inline-014"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"360"} data-offset-y={"158"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"360"} data-offset-y={"48"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"360"} data-offset-y={"48"}>
</view>
</view>
</view>
<view className={"flexbox __inline-015"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"382"} data-offset-y={"178"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"382"} data-offset-y={"108"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"382"} data-offset-y={"108"}>
</view>
</view>
<view className={"c"} data-expected-width={"20"} data-expected-height={"40"} data-offset-x={"382"} data-offset-y={"28"}>
</view>
</view>
{/* space-evenly */}
<view className={"flexbox __inline-016"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"404"} data-offset-y={"103"}>
</view>
</view>
<view className={"flexbox __inline-017"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"426"} data-offset-y={"145"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"426"} data-offset-y={"61"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"426"} data-offset-y={"61"}>
</view>
</view>
</view>
<view className={"flexbox __inline-018"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"448"} data-offset-y={"168"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"448"} data-offset-y={"108"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"448"} data-offset-y={"108"}>
</view>
</view>
<view className={"c"} data-expected-width={"20"} data-expected-height={"40"} data-offset-x={"448"} data-offset-y={"38"}>
</view>
</view>
{/* start */}
<view className={"flexbox __inline-019"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"470"} data-offset-y={"8"}>
</view>
</view>
<view className={"flexbox __inline-020"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"492"} data-offset-y={"38"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"492"} data-offset-y={"8"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"492"} data-offset-y={"8"}>
</view>
</view>
</view>
<view className={"flexbox __inline-021"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"514"} data-offset-y={"78"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"514"} data-offset-y={"48"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"514"} data-offset-y={"48"}>
</view>
</view>
<view className={"c"} data-expected-width={"20"} data-expected-height={"40"} data-offset-x={"514"} data-offset-y={"8"}>
</view>
</view>
{/* end */}
<view className={"flexbox __inline-022"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"536"} data-offset-y={"198"}>
</view>
</view>
<view className={"flexbox __inline-023"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"558"} data-offset-y={"198"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"558"} data-offset-y={"168"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"558"} data-offset-y={"168"}>
</view>
</view>
</view>
<view className={"flexbox __inline-024"}>
<view className={"a"} data-expected-width={"20"} data-expected-height={"10"} data-offset-x={"580"} data-offset-y={"198"}>
</view>
<view className={"b"} data-expected-width={"20"} data-expected-height={"30"} data-offset-x={"580"} data-offset-y={"168"}>
<view className={"fixedSizeChild"} data-expected-width={"10"} data-expected-height={"30"} data-offset-x={"580"} data-offset-y={"168"}>
</view>
</view>
<view className={"c"} data-expected-width={"20"} data-expected-height={"40"} data-offset-x={"580"} data-offset-y={"128"}>
</view>
</view>
</view>
</>);
