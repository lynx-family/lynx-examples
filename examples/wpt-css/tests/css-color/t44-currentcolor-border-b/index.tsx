/*
Source: imported/wpt-upstream/css/css-color/t44-currentcolor-border-b.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: currentColor (with 'border-color')
Assert: currentColor uses the color from the color property
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text id={"one"} className={"__ua-p"}>
{"This paragraph should have a green border."}
</text>
<text id={"two"} className={"__ua-p"}>
{"This paragraph should have a green border."}
</text>
</view>
</>);
