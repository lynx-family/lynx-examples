/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_justifycontent-left-001.html
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: #justify-content-left — Lynx treats `justify-content: left` as main-start (flex-start fallback); in the row-reverse container items pack to the right instead of the physical left. Diff: 3.254% @0.5% limit (emulator-5554, 2026-07-22).
Title: flexbox | justify-content: left in rows
Assert: justify-content: left places the items in the top left corner of the container; left-to-right order is 1, 2, 3 for row and 3, 2, 1 for row-reverse.
Note: broad div/span selectors and :nth-child converted to explicit #id/.class selectors; adjacent vertical margins that collapse on Web were reduced to a single side (no margin collapsing in Lynx).
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the numbered boxes are placed in the top left corner of the first flex container and left-to-right order is 1, 2, 3, and placed in the top left corner of the second flexbox container and left-to-right order is 3, 2, 1."}
</text>
<view id={"row"}>
<text className={"item item-1"}>
{"one"}
</text>
<text className={"item item-2"}>
{"two"}
</text>
<text className={"item item-3"}>
{"three"}
</text>
</view>
<view id={"row-reverse"}>
<text className={"item item-1"}>
{"one"}
</text>
<text className={"item item-2"}>
{"two"}
</text>
<text className={"item item-3"}>
{"three"}
</text>
</view>
</view>
</>);
