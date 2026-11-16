/*
Source: imported/wpt-upstream/css/css-color/t32-opacity-basic-0.0-a.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-15
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: opacity
Assert: Opacity of 0.0 makes box transparent.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text style={"margin-top: 8px;"} id={"one"} className={"__ua-p"}>
{"This should be the only text visible on this page."}
</text>
<text id={"two"} className={"__ua-p"}>
{"This text should NOT be visible."}
</text>
</view>
</>);
