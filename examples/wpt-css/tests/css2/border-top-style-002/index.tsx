/*
Source: imported/wpt-upstream/css/CSS2/borders/border-top-style-002.xht
WPT-Revision: 58b15ece0
Adapted-By: agent
Adapted-Date: 2026-08-03
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Title: CSS Test: Border-top-style set to 'hidden'
Assert: The 'border-top-style' property set to 'hidden' computes to 'none' and does not render any border for non-table elements.
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
