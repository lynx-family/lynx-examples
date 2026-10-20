/*
Source: imported/wpt-upstream/css/css-color/hex-004.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Color 4: The RGB hexadecimal notations: #RRGGBB
Assert: 4 digit hex, fully opaque
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"description"}>
{"Test passes if you see a green square, and no red."}
</text>
<view className={"ref"}>
</view>
<view className={"test"}>
</view>
</view>
</>);
