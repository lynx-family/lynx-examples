/*
Source: imported/wpt-upstream/css/css-flexbox/flex-direction-column-reverse-002-visual.html
WPT-Revision: f90a67969
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-14
Reference-Mode: web-test-render
Lynx-Status: partial
Assert: This test checks that column-reverse flex-direction swaps the main start and main end directions
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if both the two columns below are identical."}
</text>
<view className={"test"} id={"column"}>
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
<view className={"test"} id={"column-reverse"}>
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
