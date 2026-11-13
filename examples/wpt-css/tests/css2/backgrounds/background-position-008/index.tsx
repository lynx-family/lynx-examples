/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-position-008.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-16
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1175%
Evidence: docs/evidence/css2-backgrounds-background-position-signed-four-20260916-summary.tsv
Title: CSS Test: Background-position using pixels with a nominal value and a plus sign, +96px
Assert: The 'background-position' property correctly applies a nominal length value in pixels with a plus sign.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if there is "}
<text className={"strong"}>
{"no red"}
</text>
{"."}
</text>
<view id={"div1"} className={"background-box"}>
<view className={"background-box test-image"}>
</view>
</view>
</view>
</>);
