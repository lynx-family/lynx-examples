/*
Source: imported/wpt-upstream/css/CSS2/borders/border-bottom-style-011.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: Border-bottom-style set to 'inherit'
Assert: The 'border-bottom-style' property set to 'inherit' properly applies the value from the parent's 'border-bottom-style' property value.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a dotted line below."}
</text>
<view className={"test-target"}>
</view>
</view>
</>);
