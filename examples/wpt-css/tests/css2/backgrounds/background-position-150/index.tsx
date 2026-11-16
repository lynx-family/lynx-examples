/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-position-150.xht
WPT-Revision: 6ef32b046d691dd751b9c88417011b831feb034a
Adapted-By: agent
Adapted-Date: 2026-07-28
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 5.0122%
Android-Diff-Limit: 0.5%
Evidence: docs/evidence/background-position-five-20260728-summary.tsv
Lynx-Issue: background-position: inherit is rejected by the property parser, so the child uses initial 0% 0% instead of the parent's computed position.
Title: CSS Test: Background-position using 'inherit', inheriting one value
Assert: The 'background-position' property correctly applies the one value that was inherited.
Note: Source 3in setup geometry is normalized to 288px; the tested inherit value and its 192px parent declaration are unchanged. Explicit classes avoid styling the generated Lynx body wrapper.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if there is no red."}
</text>
<view id={"div1"} className={"background-box"}>
<view id={"div2"} className={"background-box"}>
<view className={"background-box test-image"}>
</view>
</view>
</view>
</view>
</>);
