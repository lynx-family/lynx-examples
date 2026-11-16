/*
Source: imported/wpt-upstream/css/css-flexbox/flex-direction-column-001-visual.html
WPT-Revision: f90a67969
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-14
Reference-Mode: web-test-render
Lynx-Status: partial
Assert: Check if the web engine can identify the flex-direction value column.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if:\n    1. the rectangle 1, 2, 3 show up in a vertical column in a red rectangle and no gap between them.\n    2. They are all appear in upper left of the red rectangle."}
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
