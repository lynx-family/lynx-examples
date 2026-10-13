/*
Source: imported/wpt-upstream/css/CSS2/borders/border-bottom-style-007.xht
WPT-Revision: 58b15ece027c804281a1874cbe0569cca12747e9
Adapted-By: agent
Adapted-Date: 2026-08-03
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Border-bottom-style set to 'groove'
Assert: A 12px green bottom border with border-bottom-style set to groove paints a green or shaded-green groove below the instruction text.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the line below is solid green or shades of green."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
