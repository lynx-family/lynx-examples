/*
Source: imported/wpt-upstream/css/css-flexbox/flex-direction-row-reverse-002-visual.html
WPT-Revision: 44e2211
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-14
Reference-Mode: web-test-render
Lynx-Status: partial
Assert: This test checks that row-reverse flex-direction swaps the main start and main end directions
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if both the lines below are identical."}
</text>
<view className={"test"} id={"row"}>
<text className={"__html-span"}>
{"A"}
</text>
<text className={"__html-span"}>
{"B"}
</text>
<text className={"__html-span"}>
{"C"}
</text>
</view>
<view className={"test"} id={"row-reverse"}>
<text className={"__html-span"}>
{"C"}
</text>
<text className={"__html-span"}>
{"B"}
</text>
<text className={"__html-span"}>
{"A"}
</text>
</view>
</>);
