/*
Source: imported/wpt-upstream/css/css-color/border-right-color.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Border-right-color set to hex with three digits with the maximum plus one value of #1000
Assert: The 'border-right-color' set to #1000 is a transparent dark red square.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a transparent square surrounded by a blue border."}
</text>
<view className={"test"}>
<view>
</view>
</view>
</view>
</>);
