/*
Source: imported/wpt-upstream/css/css-color/t422-rgba-a0.6-a.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: rgba() colors
Assert: Opacity of 0.6 makes background partially opaque.  Colors are in sRGB color space (may test).
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The test passes if you see a gray square:"}
</text>
<text id={"one"} className={"__ua-p"}>
</text>
<text id={"two"} className={"__ua-p"}>
</text>
</view>
</>);
