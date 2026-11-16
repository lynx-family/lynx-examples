/*
Source: imported/wpt-upstream/css/CSS2/borders/border-color-004.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-04
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Border-color with four color values
Assert: The 'border-color' property with four color values is supported and applied to the correct sides of the box.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a box with top border that is blue, right border that is green, a bottom border that is orange and a left border that is silver."}
</text>
<view className={"test"}>
</view>
</view>
</>);
