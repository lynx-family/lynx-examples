/*
Source: imported/wpt-upstream/css/CSS2/borders/border-bottom-style-001.xht
WPT-Revision: 58b15ece027c804281a1874cbe0569cca12747e9
Adapted-By: agent
Adapted-Date: 2026-08-03
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Border-bottom-style set to 'none'
Assert: A 3px bottom border with border-bottom-style set to none does not paint below the instruction text.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is nothing below."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
