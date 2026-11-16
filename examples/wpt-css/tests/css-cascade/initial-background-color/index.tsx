/*
Source: imported/wpt-upstream/css/css-cascade/initial-background-color.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Cascading and Inheritance Test:
    Initial property and background-color
Assert:
    The initial keyword is supported on background-color.

*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"outer"}>
</view>
</view>
</>);
