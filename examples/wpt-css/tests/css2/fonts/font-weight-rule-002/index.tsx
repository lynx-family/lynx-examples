/*
Source: imported/wpt-upstream/css/CSS2/fonts/font-weight-rule-002.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-26
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Diff: 0.1873%
Assert: Font weight value 100 to 900 indicate a weight that is either darker than OR as dark as its predecessor.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the darkness of the below lines are from light to dark. Each line needs to be either darker than or as dark as its previous line."}
</text>
<view id={"test1"}>
<text>
{"Filler Text"}
</text>
</view>
<view id={"test2"}>
<text>
{"Filler Text"}
</text>
</view>
<view id={"test3"}>
<text>
{"Filler Text"}
</text>
</view>
<view id={"test4"}>
<text>
{"Filler Text"}
</text>
</view>
<view id={"test5"}>
<text>
{"Filler Text"}
</text>
</view>
<view id={"test6"}>
<text>
{"Filler Text"}
</text>
</view>
<view id={"test7"}>
<text>
{"Filler Text"}
</text>
</view>
<view id={"test8"}>
<text>
{"Filler Text"}
</text>
</view>
<view id={"test9"}>
<text>
{"Filler Text"}
</text>
</view>
</view>
</>);
