/*
Source: imported/wpt-upstream/css/css-flexbox/flex-direction-row-002-visual.html
WPT-Revision: f90a67969
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-14
Reference-Mode: web-test-render
Lynx-Status: partial
Assert: This test checks that the main axis of the row flex-direction has the same orientation as the inline axis of the current writing mode
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if both the lines below are identical."}
</text>
<view className={"test"} id={"row-ltr"}>
<text className={"__html-span"}>
{"A"}
</text>
<text className={"__html-span"}>
{"B"}
</text>
<text className={"__html-span"}>
{"C"}
</text>
</view>
<view className={"test"} id={"row-rtl"}>
<text className={"__html-span"}>
{"C"}
</text>
<text className={"__html-span"}>
{"B"}
</text>
<text className={"__html-span"}>
{"A"}
</text>
</view>
</>);
