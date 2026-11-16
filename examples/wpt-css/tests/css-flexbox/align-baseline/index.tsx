/*
Source: imported/wpt-upstream/css/css-flexbox/align-baseline.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"flexbox column align-items-baseline"}>
<text className={"__ua-h1"}>
{"This text"}
</text>
<text className={"__ua-p"}>
{"should be left aligned."}
</text>
</view>
<view className={"flexbox column align-items-baseline wrap-reverse"}>
<text className={"__ua-h1"}>
{"This text"}
</text>
<text className={"__ua-p"}>
{"should be right aligned."}
</text>
</view>
</view>
</>);
