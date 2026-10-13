/*
Source: imported/wpt-upstream/css/css-color/t31-color-currentColor-b.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: color
Assert: That currentColor on the color property acts like inherit.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"one"}>
<text id={"two"} className={"__ua-p"}>
{"This text should be green."}
</text>
</view>
</view>
</>);
