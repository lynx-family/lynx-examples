/*
Source: imported/wpt-upstream/css/css-flexbox/align-self-004.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-03
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: align-self - stretch
Assert: The 'align-self' property set 'stretch' makes the cross size of the item's margin box as close to the same size as the line as possible
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"test"}>
<view>
</view>
<view>
</view>
<view>
</view>
<view>
</view>
</view>
</view>
</>);
