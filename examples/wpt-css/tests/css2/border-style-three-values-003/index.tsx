/*
Source: imported/wpt-upstream/css/CSS2/borders/border-style-003.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Border-style shorthand property set using three values
Assert: The 'border-style' property set using three values correctly renders the specified value for the appropriate sides of the element.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a box with a dashed top border, left and right borders that are dotted and a double line for the bottom border."}
</text>
<view className={"test-target"}>
</view>
</view>
</>);
