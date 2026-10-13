/*
Source: imported/wpt-upstream/css/CSS2/borders/border-style-002.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Border-style shorthand property set using two values
Assert: The 'border-style' property set using two values correctly renders the specified value for the appropriate sides of the element.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a box with dashed top and bottom borders and dotted left and right borders."}
</text>
<view className={"test"}>
</view>
</view>
</>);
