/*
Source: imported/wpt-upstream/css/css-flexbox/gap-003-ltr.html
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-28
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Source block-size maps to height in horizontal LTR writing; selectors target only source flex items, and Web flex defaults, content-box sizing, body flow, paragraph spacing, and bold text are explicit. The tested gap: 20px and calc item widths are unchanged.
Title: CSS Flexbox Test: gap - rows and columns
Assert: The 'gap' property enables putting space exclusively between items
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there are "}
<text className={"strong"}>
{"green lines between boxes"}
</text>
{"."}
</text>
<view className={"flexbox"}>
<view className={"item"}>
</view>
<view className={"item"}>
</view>
<view className={"item"}>
</view>
<view className={"item"}>
</view>
</view>
</view>
</>);
