/*
Source: imported/wpt-upstream/css/css-color/named-001.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: CSS Color 4 named color rebeccapurple is not recognized; Android screenshot diff 6.8679% at threshold 0.5%.
Title: CSS Color 4: Named colors
Assert: New named color, rebeccapurple
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if you see a purple square and no red."}
</text>
<view className={"outer"}>
<view className={"inner"}>
</view>
</view>
</>);
