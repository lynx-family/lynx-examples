/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_justifycontent-stretch.html
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: justify-content:stretch behaves as justify-content:flex-start
Assert: justify-content: stretch packs the two 50px green items at the start of the 200px container (behaves like flex-start), forming a filled green square.
Note: inline styles converted to TTSS classes.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"container"}>
<view className={"item"}>
</view>
<view className={"item"}>
</view>
</view>
</view>
</>);
