/*
Source: imported/wpt-upstream/css/css-color/currentcolor-visited-fallback.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: passing
Title: currentcolor and visited inherited parent color fallback
Assert: No assert provided
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"case"}>
<text className={"__html-a"}>
{"This should be green"}
</text>
</view>
<view className={"case"}>
<text className={"__html-a"}>
{"This should be green"}
</text>
</view>
</view>
</>);
