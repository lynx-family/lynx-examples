/*
Source: imported/wpt-upstream/css/CSS2/positioning/right-offset-percentage-001.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-28
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Right offset using percentage
Assert: Percentage offset values for the 'right' property are based off the width of the containing block.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if a blue square is in the top-left corner of an hollow black rectangle."}
</text>
<view id={"div1"}>
<view>
</view>
</view>
</view>
</>);
