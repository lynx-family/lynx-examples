/*
Source: imported/wpt-upstream/css/CSS2/fonts/font-weight-rule-001.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-26
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Diff: 0.1218%
Title: CSS Test: Font-weight set to 'normal' corresponds to '400'
Assert: A font weight of 'normal' corresponds to the weight value '400'.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the lines of \"Filler Text\" below match."}
</text>
<view id={"div1"}>
<text>
{"Filler Text"}
</text>
</view>
<view id={"div2"}>
<text>
{"Filler Text"}
</text>
</view>
</view>
</>);
