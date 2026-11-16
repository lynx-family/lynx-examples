/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_justifycontent-right-001.html
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: #justify-content-right — Lynx does not support `justify-content: right`; items fall back to start-side packing instead of the physical right in both row and row-reverse containers. Diff: 3.278% @0.5% limit (emulator-5554, 2026-07-22).
Title: flexbox | justify-content: right in rows
Assert: justify-content: right places the items in the top right corner of the container; left-to-right order is 1, 2, 3 for row and 3, 2, 1 for row-reverse.
Note: broad div/span selectors, div+div sibling selector, and :nth-child converted to explicit #id/.class selectors; adjacent vertical margins that collapse on Web were reduced to a single side (no margin collapsing in Lynx).
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the numbered boxes are placed in the top right corner of the first flex container and left-to-right order is 1, 2, 3, and placed in the top right corner of the second flexbox container and left-to-right order is 3, 2, 1."}
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
