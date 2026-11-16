/*
Source: imported/wpt-upstream/css/css-color/t422-rgba-func-whitespace-b.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: whitespace in rgba() values
Assert: Test that whitespace is allowed within rgba() functions.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text id={"one"} className={"__ua-p"}>
{"This text should be green."}
</text>
<text id={"two"} className={"__ua-p"}>
{"This text should be green."}
</text>
<text id={"three"} className={"__ua-p"}>
{"This text should be green."}
</text>
<text id={"four"} className={"__ua-p"}>
{"This text should be green."}
</text>
<text id={"five"} className={"__ua-p"}>
{"This text should be green."}
</text>
<text id={"six"} className={"__ua-p"}>
{"This text should be green."}
</text>
</view>
</>);
