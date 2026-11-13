/*
Source: imported/wpt-upstream/css/css-color/t422-rgba-a0.0-a.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: rgba() colors
Assert: Opacity of 0.0 makes text transparent.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text id={"one"} className={"__ua-p"}>
{"This should be the only text visible on this page."}
</text>
<text id={"two"} className={"__ua-p"}>
{"This text should NOT be visible."}
</text>
</view>
</>);
