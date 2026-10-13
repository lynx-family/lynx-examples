/*
Source: imported/wpt-upstream/css/css-flexbox/align-self-003.html
WPT-Revision: 58b15ece0
Adapted-By: agent
Adapted-Date: 2026-07-08
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: align-self - center
Assert: The 'align-self' property set 'center' centered the flex items in the cross axis within the line
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
<view id={"top"}>
</view>
<view id={"bottom"}>
</view>
</view>
</>);
