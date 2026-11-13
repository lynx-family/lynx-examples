/*
Source: imported/wpt-upstream/css/CSS2/normal-flow/max-width-001.xht
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-19
Lynx-Status: passing
Title: CSS Test: Max-width using pixels with a minimum minus one value, -1px
Assert: The 'max-width' property sets a minimum minus one length value in pixels.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if there is no red."}
</text>
<view id={"div1"}>
</view>
</>);
