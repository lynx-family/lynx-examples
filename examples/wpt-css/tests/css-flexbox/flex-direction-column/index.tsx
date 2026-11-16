/*
Source: imported/wpt-upstream/css/css-flexbox/flex-direction-column.html
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-13
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexible Box Test: flex-direction property - column
Assert: flex-direction: column arranges flex items vertically
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"The test passed if you see all the cells are arranged vertically."}
</text>
<view className={"container"}>
<text className={"flex-item"}>
{"first"}
</text>
<text className={"flex-item"}>
{"second"}
</text>
<text className={"flex-item"}>
{"third"}
</text>
<text className={"flex-item"}>
{"forth"}
</text>
</view>
</>);
