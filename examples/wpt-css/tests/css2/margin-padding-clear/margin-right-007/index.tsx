/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/margin-right-007.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Margin-right using pixels with a nominal value, 96px
Assert: The 'margin-right' property sets a nominal length value in pixels.
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
<view id={"div2"}>
</view>
</view>
</view>
</>);
