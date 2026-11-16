/*
Source: imported/wpt-upstream/css/CSS2/text/white-space-003.xht
WPT-Revision: 8490c1753
Adapted-By: agent
Adapted-Date: 2026-07-10
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: lynx/template-assembler#9255 — related nowrap Web-parity work
Title: CSS Test: White-space set to 'nowrap'
Assert: The 'white-space' property set to 'nowrap' removes extra spacing when more than one space is next to another. And the text does not wrap when width is constrained.
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
