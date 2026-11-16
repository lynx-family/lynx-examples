/*
Source: imported/wpt-upstream/css/css-flexbox/flex-direction-row-vertical.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-14
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Warning: writing-mode: vertical-lr is NOT supported by Lynx; property was removed during template encode
Lynx-Warning: direction property (ltr/rtl) support is unverified in Lynx
Title: CSS Test: flex-direction:row has the same orientation as inline axis
Assert: This test checks that the main axis of the row flex-direction has the same orientation as the inline axis of the current vertical writing mode
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if both the two columns below are identical."}
</text>
<view id={"vertical"}>
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
</view>
</>);
