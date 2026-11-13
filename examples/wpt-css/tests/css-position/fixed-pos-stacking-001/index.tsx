/*
Source: imported/wpt-upstream/css/CSS2/visuren/fixed-pos-stacking-001.xht
WPT-Revision: (to be filled during import)
Adapted-By: atlas
Adapted-Date: 2026-05-28
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS test: fixed positioning makes a stacking context
Assert: auto The stack level of the generated box in the current stacking context is 0. If the box has 'position: fixed' or if it is the root, it also establishes a new stacking context.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"There should be no red."}
</text>
<view id={"absolute"}>
<view>
<view>
</view>
</view>
</view>
<view id={"fixed"}>
<view>
<view>
</view>
</view>
</view>
</view>
</>);
