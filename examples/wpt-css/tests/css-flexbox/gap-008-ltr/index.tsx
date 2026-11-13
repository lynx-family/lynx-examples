/*
Source: imported/wpt-upstream/css/css-flexbox/gap-008-ltr.html
WPT-Revision: 5ce815a83b2601ce920e39f001cd7e77642ea860
Adapted-By: agent
Adapted-Date: 2026-09-01
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: gap - row and column gap
Assert: The 'gap' property enables putting space exclusively between items
Lynx-Note: The tested gap: 40px 20px shorthand and width: calc(50% - 10px) geometry are retained verbatim. Source block-size is mapped to height for horizontal LTR writing, original section children are explicitly scoped, and Web row/flex-start/stretch defaults are restored.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there are 40px horizontal green lines and 20px vertical green lines between boxes."}
</text>
<view className={"container"}>
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
