/*
Source: imported/wpt-upstream/css/css-cascade/all-prop-initial-color.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Cascade: "color" property preceded by "all: initial"
Assert: Own 'color', preceded by 'all: initial', overrides inherited 'color'.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"outer __ua-p inner __html-span"}>
{"Test passes if this text is green."}
</text>
</view>
</>);
