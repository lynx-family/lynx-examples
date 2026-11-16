/*
Source: imported/wpt-upstream/css/CSS2/borders/border-top-style-001.xht
WPT-Revision: 58b15ece0
Adapted-By: agent
Adapted-Date: 2026-08-03
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border-top-style set to 'none'
Assert: The 'border-top-style' property set to 'none' does not render any border for an element.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is nothing below."}
</text>
<view className={"test"}>
</view>
</view>
</>);
