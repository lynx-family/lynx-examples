/*
Source: imported/wpt-upstream/css/css-flexbox/flex-direction-column-reverse.html
WPT-Revision: 5ce815a83b2601ce920e39f001cd7e77642ea860
Adapted-By: agent
Adapted-Date: 2026-09-01
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexible Box Test: flex-direction proprety - column-reverse
Assert: A column-reverse flex container lays out its cells vertically in reverse source order.
Lynx-Note: Source span cells are represented directly by Lynx text flex items because display:inline-block is unsupported; their tested order, explicit 8em width, colors, and margins are preserved. Setup paragraph spacing compensates for Lynx not collapsing margins.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The test passed if you see all the cells are arraged vertically and reversed."}
</text>
<view className={"container"}>
<text className={"cell"}>
{"first"}
</text>
<text className={"cell"}>
{"second"}
</text>
<text className={"cell"}>
{"third"}
</text>
<text className={"cell"}>
{"forth"}
</text>
</view>
</view>
</>);
