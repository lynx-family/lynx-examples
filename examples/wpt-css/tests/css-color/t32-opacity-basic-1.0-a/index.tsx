/*
Source: imported/wpt-upstream/css/css-color/t32-opacity-basic-1.0-a.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-15
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: opacity
Assert: Opacity of 1.0 makes box fully opaque.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text style={"margin-top: 8px"} id={"one"} className={"__ua-p"}>
{"This text should be the same color as the line below."}
</text>
<text id={"two"} className={"__ua-p"}>
{"This text should be the same color as the line above."}
</text>
</view>
</>);
