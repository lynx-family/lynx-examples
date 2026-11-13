/*
Source: imported/wpt-upstream/css/css-flexbox/flex-direction-column-reverse-001-visual.html
WPT-Revision: f90a67969
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-14
Reference-Mode: web-test-render
Lynx-Status: partial
Assert: Check if the web engine can identify the flex-direction value column-reverse.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if:\n    1. the rectangle 1, 2, 3 show up in a vertical column in a red rectangle and no gap between them.\n    2. the rectangle 1, 2, 3 appear in bottom left of red rectangle and from top to bottom of the column: 3, 2, 1."}
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
</>);
