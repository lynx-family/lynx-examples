/*
Source: imported/wpt-upstream/css/CSS2/borders/border-bottom-style-005.xht
WPT-Revision: 58b15ece027c804281a1874cbe0569cca12747e9
Adapted-By: agent
Adapted-Date: 2026-08-03
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Border-bottom-style set to 'solid'
Assert: A 3px bottom border with border-bottom-style set to solid paints a solid black line below the instruction text.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a solid black line."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
