/*
Source: imported/wpt-upstream/css/css-color/border-color-currentcolor.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: failing
Title: `border-color: currentColor` resolves to `color` value
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if all the border colors are green"}
</text>
<view className={"case-box __inline-001"}>
<text>
{"inset"}
</text>
</view>
<view className={"case-box __inline-002"}>
<text>
{"outset"}
</text>
</view>
<view className={"case-box __inline-003"}>
<text>
{"ridge"}
</text>
</view>
<view className={"case-box __inline-004"}>
<text>
{"groove"}
</text>
</view>
</view>
</>);
