/*
Source: imported/wpt-upstream/css/CSS2/text/white-space-001.xht
WPT-Revision: 8490c1753
Adapted-By: agent
Adapted-Date: 2026-07-10
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: unfiled — consecutive spaces are not collapsed for white-space: normal
Title: CSS Test: White-space set to 'normal'
Assert: The 'white-space' property set to 'normal' removes extra spacing when more than one space is next to another.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there are 2 filled black squares."}
</text>
<text id={"test"}>
{"XX   XX"}
</text>
<view id={"reference"}>
<view id={"div1"}>
</view>
<view id={"div2"}>
</view>
<view id={"div3"}>
</view>
</view>
</view>
</>);
