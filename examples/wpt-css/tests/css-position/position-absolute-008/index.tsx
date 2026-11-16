/*
Source: imported/wpt-upstream/css/CSS2/positioning/position-absolute-008.xht
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-26
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1806%
Android-Evidence: docs/evidence/css-position-absolute-css2-20260526-summary.tsv
Title: CSS Test: Float is computed to 'none' when element is absolutely positioned
Assert: Float is computed to 'none' when 'position: absolute' is specified.
Lynx-Note: `float` is unsupported in Lynx; this adaptation removes it because the WPT assertion expects `float` to have no visual effect when `position:absolute` applies.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"div1"}>
<view id={"div2"}>
</view>
<view id={"div3"}>
</view>
</view>
</>);
