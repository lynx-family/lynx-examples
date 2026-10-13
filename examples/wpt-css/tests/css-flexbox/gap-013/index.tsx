/*
Source: imported/wpt-upstream/css/css-flexbox/gap-013.html
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-28
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: The tested 100px main-axis gap, two 30px flex bases, flex: 1 1 auto, and fixed 100px container are unchanged; content-box sizing and explicit Web body/paragraph defaults provide only setup parity.
Title: Flex gaps
Assert: Main axis gap makes grow turn to shrink.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and "}
<text className={"strong"}>
{"no red"}
</text>
{"."}
</text>
<view className={"flexbox"}>
<view className={"item"}>
</view>
<view className={"item"}>
</view>
</view>
</view>
</>);
