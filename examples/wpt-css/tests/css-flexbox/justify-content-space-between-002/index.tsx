/*
Source: imported/wpt-upstream/css/css-flexbox/justify-content_space-between-001.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-03
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: Check if the web engine can identify the justify-content value space-between.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if:\n1. the rectangle 1, 2, 3 show up in a row in a red rectangle.\n2. No gap between the left edge of red rectangle and the left of rectangle 1, no gap between the right edge of red rectangle and the right of rectangle 3 too, and rectangle 2 is distributed so that the empty space between rectangle 1 and rectangle 3 is the same.\n3. the height of the 1, 2, 3 is the same as the height of the red rectangle."}
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
