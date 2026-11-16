/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_flex-0-0-N.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-03
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Diff: 0.0001%
Lynx-Issue: None
Assert: Check if the web engine can identify the flex value 0 0 N.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"test"}>
<text className={"__html-span span-1"}>
{"one"}
</text>
<text className={"__html-span span-2"}>
{"two"}
</text>
<text className={"__html-span span-3"}>
{"three"}
</text>
<text className={"__html-span span-4"}>
{"four"}
</text>
</view>
</view>
</>);
