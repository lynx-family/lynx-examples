/*
Source: imported/wpt-upstream/css/css-flexbox/stretch-obeys-min-max-001.html
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: item's min/max cross sizes
Assert: The specified max cross size (max-width: 50px) on the stretched flex item is honored pre-flexing, so the two 40px-wide blocks wrap onto two rows and the green square stays 100px tall with no red showing.
Note: the source wraps two display:inline-block boxes inside the max-width item; inline-block is unsupported in Lynx, so the item becomes a flex row-wrap container with two explicit 40x50 children, preserving the same wrap-vs-not-wrap mechanism. line-height: 0 dropped (no inline line boxes in the Lynx flex equivalent).
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"reference-overlapped-red"}>
</view>
<view className={"container"}>
<view className={"item"}>
<view className={"block"}>
</view>
<view className={"block"}>
</view>
</view>
</view>
</view>
</>);
