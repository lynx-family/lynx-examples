/*
Source: imported/wpt-upstream/css/CSS2/box-display/display-none-001.xht
WPT-Revision: 8490c1753
Adapted-By: agent
Adapted-Date: 2026-07-10
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Display set to 'none' does not generate a box even with 'position' set to 'absolute'
Assert: Elements set to 'display: none' do not render even if element is positioned absolute.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"instruction"}>
<text className={"instruction-prefix"}>
{"Test passes if there is"}
</text>
<text className={"strong"}>
{"no red"}
</text>
<text>
{"."}
</text>
</view>
<view id={"display-none-target"}>
<text>
{"Filler Text"}
</text>
</view>
</view>
</>);
