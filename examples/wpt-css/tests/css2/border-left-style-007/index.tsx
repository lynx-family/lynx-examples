/*
Source: imported/wpt-upstream/css/CSS2/borders/border-left-style-007.xht
WPT-Revision: 82d79deebb4ae4b03edb6ab5316b8749298279a9
Adapted-By: agent
Adapted-Date: 2026-08-04
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Border-left-style set to 'groove'
Assert: The 'border-left-style' set to 'groove' renders the proper line style for the border.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the line below is solid green or shades of green."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
