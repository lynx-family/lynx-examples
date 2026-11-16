/*
Source: imported/wpt-upstream/css/CSS2/normal-flow/min-width-003.xht
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-19
Lynx-Status: passing
Title: CSS Test: Min-width using pixels with a minimum plus one value, 1px
Assert: The 'min-width' property sets a minimum plus one length value in pixels.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if there is a thin vertical line."}
</text>
<view id={"div1"}>
</view>
</>);
