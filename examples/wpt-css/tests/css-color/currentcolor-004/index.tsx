/*
Source: imported/wpt-upstream/css/css-color/currentcolor-004.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: passing
Title: currentcolor and visited inherited parent color
Assert: No assert provided
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"link-wrapper"}>
<text className={"__html-a"}>
<text className={"inner-div"}>
{"This should be green and not red."}
</text>
</text>
</view>
</view>
</>);
