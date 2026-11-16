/*
Source: imported/wpt-upstream/css/css-color/t422-rgba-a1.0-a.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: rgba() colors
Assert: Opacity of 1.0 makes text fully opaque.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text id={"one"} className={"__ua-p"}>
{"This text should be the same color (black) as the line below."}
</text>
<text id={"two"} className={"__ua-p"}>
{"This text should be the same color (black) as the line above."}
</text>
</view>
</>);
