/*
Source: imported/wpt-upstream/css/CSS2/positioning/position-absolute-001.xht
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.2101%
Android-Evidence: docs/evidence/css-position-absolute-css2-20260526-summary.tsv
Lynx-Note: Added z-index only to preserve the WPT intended green-over-red overlap in Lynx paint order; the tested position:absolute behavior is unchanged.
Title: CSS Test: Absolute positions impact on later siblings
Assert: Absolute positioned elements do not impact later siblings.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and "}
<text>
{"no red"}
</text>
{"."}
</text>
<view id={"div1"}>
<view id={"div2"}>
</view>
<view id={"div3"}>
</view>
</view>
</>);
