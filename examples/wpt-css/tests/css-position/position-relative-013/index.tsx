/*
Source: imported/wpt-upstream/css/CSS2/positioning/position-relative-013.xht
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-19
Lynx-Status: passing
Title: CSS Test: Relative positioning with top and bottom do not change element dimensions
Assert: Relatively positioned element dimensions are not changed with top/bottom applied. If 'top' is 'auto' and if 'bottom' is '100px', then top's used value becomes the negative of bottom. If both 'top' and 'bottom' are specified, 'bottom' is ignored.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"div1"}>
</view>
<view id={"div2"}>
</view>
<view id={"div3"}>
</view>
</>);
