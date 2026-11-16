/*
Source: imported/wpt-upstream/css/CSS2/visuren/left-offset-position-fixed-001.xht
WPT-Revision: (to be filled during import)
Adapted-By: atlas
Adapted-Date: 2026-05-28
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: left:auto offset of position:fixed box in a position:relative containing block
Assert: The 'left' box offset property, for fixed positioning, when set to 'auto' specifies the offset of the box from its 'static-position containing block'. Here, in this test, the 'static-position containing block' is #shifted-column and the containing block for #red is established by the viewport.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a solid green square and "}
<text>
{"no red"}
</text>
{"."}
</text>
<view id={"shifted-column"}>
<view id={"red"} className={"square"}>
</view>
</view>
<view id={"green"} className={"square"}>
</view>
</view>
</>);
