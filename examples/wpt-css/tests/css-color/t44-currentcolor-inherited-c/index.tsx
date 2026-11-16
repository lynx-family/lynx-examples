/*
Source: imported/wpt-upstream/css/css-color/t44-currentcolor-inherited-c.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: currentColor (with 'background-color')
Assert: currentColor is a computed value
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"one"}>
<view id={"two"}>
<text id={"three"} className={"__ua-p"}>
{"This paragraph should have a green background."}
</text>
</view>
</view>
</view>
</>);
