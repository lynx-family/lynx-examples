/*
Source: imported/wpt-upstream/css/CSS2/borders/border-style-001.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Border-style shorthand property set using a single value
Assert: The 'border-style' property set using a single value correctly renders the specified value for all sides of the element.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a box with dashed borders."}
</text>
<view className={"test"}>
</view>
</view>
</>);
