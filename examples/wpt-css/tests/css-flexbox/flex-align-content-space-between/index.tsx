/*
Source: imported/wpt-upstream/css/css-flexbox/flex-align-content-space-between.html
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-28
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Unsupported inline-block is omitted from the text flex items because their explicit Web width and height are preserved; paragraph/container margins are assigned to one adjoining side to match Web margin collapsing.
Title: CSS Flexible Box Test: align-content property - space-between
Assert: A wrapping flex container with align-content: space-between places its first and last flex lines at the cross-axis edges and distributes remaining space between them.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The test passed if you see a 2*2 table and all the cells are spaced equally apart."}
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
</view>
</>);
