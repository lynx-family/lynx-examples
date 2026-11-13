/*
Source: imported/wpt-upstream/css/CSS2/positioning/right-offset-001.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-28
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: 'right' property defines the offset from the right edge of the containing block
Assert: The 'right' property, for absolute positioning, specifies the offset of the element in relation to the containing block's right edge. The containing block of an absolutely positioned element is formed by the padding box of its nearest (closest) positioned ancestor element.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a blue square with its top-left corner missing."}
</text>
<view className={"container"}>
<view id={"div1"}>
</view>
<view id={"div2"}>
</view>
</view>
</view>
</>);
