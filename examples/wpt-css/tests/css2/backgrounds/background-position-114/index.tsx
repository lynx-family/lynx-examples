/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-position-114.xht
WPT-Revision: 6ef32b046d691dd751b9c88417011b831feb034a
Adapted-By: agent
Adapted-Date: 2026-07-28
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0089%
Evidence: docs/evidence/background-position-five-more-20260728-summary.tsv
Title: CSS Test: Background-position using keyword values, right
Assert: The 'background-position' property correctly applies the keyword value, right.
Note: Source 3in setup geometry is normalized to 288px; the tested right keyword is unchanged. Explicit classes avoid styling the generated Lynx body wrapper.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if there is no red."}
</text>
<view id={"div1"} className={"background-box"}>
<view className={"background-box test-image"}>
</view>
</view>
</view>
</>);
