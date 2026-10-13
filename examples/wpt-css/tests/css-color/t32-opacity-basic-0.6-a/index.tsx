/*
Source: imported/wpt-upstream/css/css-color/t32-opacity-basic-0.6-a.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-15
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: opacity
Assert: Opacity of 0.6 makes box partially opaque.  Colors are in sRGB color space (may test).
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The test passes if you see a gray square:"}
</text>
<view id={"one"} className={"__ua-p"}>
</view>
<view id={"two"} className={"__ua-p"}>
</view>
</view>
</>);
