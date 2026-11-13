/*
Source: imported/wpt-upstream/css/CSS2/positioning/right-offset-002.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-28
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Position 'right' property defines the offset from the right of the box itself for relative positioning
Assert: The 'right' property, for relative positioning, specifies the offset of the box itself from the right toward the left. If 'left' is 'auto', then its used value is minus the value of 'right' in which case the box will move from the right toward the left by the value of 'right'.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a blue square with its top-right corner missing."}
</text>
<view id={"div1"}>
<view>
</view>
</view>
</view>
</>);
