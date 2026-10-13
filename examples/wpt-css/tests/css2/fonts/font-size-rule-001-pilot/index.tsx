/*
Source: imported/wpt-upstream/css/CSS2/fonts/font-size-rule-001.xht
WPT-Revision: (to be filled during import)
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-29
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Diff: 0.0588%
Title: CSS Test: Font-size, negative values
Assert: The 'font-size' does not allow for a negative value; such 'font-size' declaration should be ignored.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a single box below and the top edge is not jagged."}
</text>
<view id={"div1"}>
<text className={"__html-span"} id={"span1"}>
{"X"}
</text>
<text className={"__html-span"} id={"span2"}>
{"X"}
</text>
</view>
</view>
</>);
