/*
Source: imported/wpt-upstream/css/css-flexbox/abspos/flexbox_absolute-atomic.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: flexbox | abspos atomic flexitems
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"flex"}>
<view className={"item"}>
<text>
{"filler"}
</text>
</view>
<view id={"abs"} className={"item"}>
<text>
{"filler"}
</text>
</view>
<view className={"item"}>
<text>
{"filler"}
</text>
</view>
</view>
</view>
</>);
