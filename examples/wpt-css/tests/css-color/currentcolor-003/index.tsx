/*
Source: imported/wpt-upstream/css/css-color/currentcolor-003.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Color 4: currentcolor
Assert: The currentcolor value applies to the first-line fragment, as discussed in https://github.com/w3c/csswg-drafts/issues/1510
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The first and third lines should have no red. The second line should have no green"}
</text>
<view className={"fragment"}>
<text className={"__html-span"}>
{"Lorem ipsum"}
</text>
<text className={"__html-span"}>
{"dolor amet."}
</text>
</view>
<view className={"fragment"}>
<text className={"__html-span"}>
{"Lorem ipsum."}
</text>
</view>
</view>
</>);
