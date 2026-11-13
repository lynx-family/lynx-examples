/*
Source: imported/wpt-upstream/css/css-text/text-align/text-align-007.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Text Test: text-align - end (basic)
Assert: The 'text-align' property set to 'end' on a block element aligns the text to the end edge.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the words \"Filler Text\" below are aligned to the right, inside the blue box."}
</text>
<view className={"test-target"}>
<text>
{"Filler Text"}
</text>
</view>
</view>
</>);
