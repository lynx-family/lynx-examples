/*
Source: imported/wpt-upstream/css/CSS2/borders/border-left-style-006.xht
WPT-Revision: 82d79deebb4ae4b03edb6ab5316b8749298279a9
Adapted-By: agent
Adapted-Date: 2026-08-04
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Border-left-style set to 'double'
Assert: The 'border-left-style' set to 'double' renders the proper line style for the border.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a double line below."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
