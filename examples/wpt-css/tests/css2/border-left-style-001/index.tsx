/*
Source: imported/wpt-upstream/css/CSS2/borders/border-left-style-001.xht
WPT-Revision: 82d79deebb4ae4b03edb6ab5316b8749298279a9
Adapted-By: agent
Adapted-Date: 2026-08-04
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Border-left-style set to 'none'
Assert: The 'border-left-style' property set to 'none' does not render any border for an element.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is nothing below."}
</text>
<view className={"test-box"}>
</view>
</view>
</>);
