/*
Source: imported/wpt-upstream/css/css-color/t423-transparent-2-a.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: transparent
Assert: That the 'transparent' color keyword makes colors transparent.
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
