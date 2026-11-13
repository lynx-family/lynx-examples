/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-position-100.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.117%
Evidence: docs/evidence/css2-backgrounds-background-position-percentage-five-20260917-summary.tsv
Title: CSS Test: Background-position using percentages with a negative zero value, -0%
Assert: The 'background-position' property correctly applies a negative zero length value in percentages.
Note: Source setup-only 3in dimensions are normalized to 288px; the tested -0% value is unchanged. Original-node selectors, Web box sizing, paragraph geometry, wrapping, and nested bold text are explicit.
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
