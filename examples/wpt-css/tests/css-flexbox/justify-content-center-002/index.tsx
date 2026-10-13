/*
Source: imported/wpt-upstream/css/css-flexbox/justify-content_center.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-03
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: Check if the web engine can identify the justify-content value center.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if:\n1. the rectangle 1, 2, 3 show up in a row in a red rectangle and no gap between them.\n2. the rectangle 1, 2, 3 appear in middle of red rectangle.\n3. equal amounts of empty space between the left edge of the red rectangle and ractangle 1 and between the right edge of the red rectangle and rectangle 3.\n4. the height of the 1, 2, 3 is the same as the height of the red rectangle."}
</text>
<view id={"test"}>
<view id={"test01"}>
<text>
{"1"}
</text>
</view>
<view id={"test02"}>
<text>
{"2"}
</text>
</view>
<view id={"test03"}>
<text>
{"3"}
</text>
</view>
</view>
</view>
</>);
