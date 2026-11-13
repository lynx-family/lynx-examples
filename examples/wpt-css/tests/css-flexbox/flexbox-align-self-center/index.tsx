/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_align-self-center.html
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-30
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: An item with align-self:center overrides its flex container align-items:flex-start setting.
Title: flexbox | align-self: center
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"scene"}>
<view className={"__html-span source-child-1"}>
<text>
{"one"}
</text>
</view>
<view className={"__html-span source-child-2"}>
<text>
{"two"}
</text>
</view>
<view className={"__html-span source-child-3"}>
<text>
{"three"}
</text>
</view>
</view>
</view>
</>);
