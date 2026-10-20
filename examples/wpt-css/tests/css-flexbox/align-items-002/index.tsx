/*
Source: imported/wpt-upstream/css/css-flexbox/align-items-002.htm
WPT-Revision: 5ce815a83b2601ce920e39f001cd7e77642ea860
Adapted-By: agent
Adapted-Date: 2026-09-01
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: A flex container with the 'align-items' property set to 'flex-start'
Assert: This test checks that the flex container with 'align-items: flex-start' places each flex item's margin box flush with the cross-start edge of line.
Lynx-Note: The converted descendant selector is scoped to the original flex items so generated card wrappers are not styled as test content. Browser body and paragraph spacing are represented explicitly because Lynx does not collapse margins.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is no red visible on the page."}
</text>
<view id={"flexbox"}>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
</view>
</view>
</>);
