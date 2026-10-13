/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-flex-wrap-flexing.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-21
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-wrap flexes widths after line breaking
Assert: Flex items given more space after line breaking should flex wider
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a green rectangle and no red."}
</text>
<view className={"container"}>
<view className={"item"}>
</view>
<view className={"item"}>
</view>
</view>
</view>
</>);
