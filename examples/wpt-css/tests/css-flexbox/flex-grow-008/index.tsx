/*
Source: imported/wpt-upstream/css/css-flexbox/flex-grow-008.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-03
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-grow - frozen items act as their frozen size
Assert: Items which become frozen due to a max-size violation use that clamped size in later steps to determine free space, so other children can grow to fill the space freed up by fixing the violation.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view className={"container"}>
<view className={"frozen-child"}>
</view>
<view className={"non-frozen-child"}>
</view>
</view>
</view>
</>);
