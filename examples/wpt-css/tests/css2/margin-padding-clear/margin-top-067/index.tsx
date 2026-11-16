/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-top-067.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: in unit unsupported in Lynx; converted to px (1in = 96px)
Title: CSS Test: Margin-top using inches with a nominal value, 1in
Assert: The 'margin-top' property sets a nominal length value in inches.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is "}
<text>
{"no red"}
</text>
{"."}
</text>
<view id={"div1"}>
</view>
<view id={"div2"}>
</view>
</view>
</>);
