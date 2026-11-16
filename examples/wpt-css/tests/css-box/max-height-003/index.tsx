/*
Source: imported/wpt-upstream/css/CSS2/normal-flow/max-height-003.xht
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-19
Lynx-Status: passing
Title: CSS Test: Max-height using pixels with a minimum plus one value, 1px
Assert: The 'max-height' property sets a minimum plus one length value in pixels.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if there is a thin horizontal line."}
</text>
<view id={"div1"}>
</view>
</>);
