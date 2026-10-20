/*
Source: imported/wpt-upstream/css/css-flexbox/negative-margins-001.html
WPT-Revision: f90a67969
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-26
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Diff: 0.0000%
Title: CSS Flexible Box Test: Negative margins
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"You should see a green rectangle with a black border, 40px wide. You should see no red."}
</text>
<view className={"container"}>
<view className={"flex"}>
<view className={"item first"}>
</view>
<view className={"item neg-marg"}>
</view>
<view className={"item"}>
</view>
</view>
</view>
</view>
</>);
