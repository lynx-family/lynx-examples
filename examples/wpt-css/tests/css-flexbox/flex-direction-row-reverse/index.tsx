/*
Source: imported/wpt-upstream/css/css-flexbox/flex-direction-row-reverse.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-14
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexible Box Test: flex-direction proprety - row-reverse
Assert: flex-direction: row-reverse arranges flex items horizontally in reverse order
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"The test passed if you see all the cells are arranged horizontally and the order of cells are reversed."}
</text>
<view className={"container"}>
<text className={"__html-span"}>
{"first"}
</text>
<text className={"__html-span"}>
{"second"}
</text>
<text className={"__html-span"}>
{"third"}
</text>
<text className={"__html-span"}>
{"forth"}
</text>
</view>
</>);
