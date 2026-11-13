/*
Source: imported/wpt-upstream/css/filter-effects/filter-grayscale-002.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Filter Test: apply a filter to a div with background-color
Assert: grayscale syntax (zero percent)
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The test passes if the little box looks grey."}
</text>
<view className={"testzone"}>
<view className={"box filter"}>
</view>
</view>
</view>
</>);
