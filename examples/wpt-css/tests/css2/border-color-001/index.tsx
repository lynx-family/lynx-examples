/*
Source: imported/wpt-upstream/css/CSS2/borders/border-color-001.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-04
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Border-color with one color value
Assert: The 'border-color' property with one color value is supported and applied to all sides of the box.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a wide hollow blue rectangle."}
</text>
<view className={"test"}>
</view>
</view>
</>);
