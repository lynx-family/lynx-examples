/*
Source: imported/wpt-upstream/css/CSS2/fonts/font-weight-rule-005.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-26
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Diff: 0.1037%
Title: CSS Test: Font-weight set to 'bolder' increasing the value above '900'
Assert: The 'font-weight' property set to 'bolder' does not increase the value of font weight when the parent values is already set at 900.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the lines of \"Filler Text\" below match."}
</text>
<view id={"reference"}>
<text>
{"Filler Text"}
</text>
</view>
<view id={"parent"}>
<view>
<text>
{"Filler Text"}
</text>
</view>
</view>
</view>
</>);
