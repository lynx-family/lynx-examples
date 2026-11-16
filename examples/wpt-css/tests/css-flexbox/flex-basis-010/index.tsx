/*
Source: imported/wpt-upstream/css/css-flexbox/flex-basis-010.html
WPT-Revision: 9bc42055a930f29289ba627ed42bfa7cd0fb7a58
Adapted-By: agent
Adapted-Date: 2026-08-24
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Lynx treats unresolved 0% flex-basis as a definite 500px item height instead of Web content-sizing it to the 100px child. Diff: 9.8695% @0.5% limit (Pixel_9_Pro emulator-5554, 2026-08-24; run 20260824-flex-visual-03-flex-basis-010; diagnosis results/auto-adapt/reports/20260824-flex-basis-010-rca.md).
Title: CSS Flexbox Test: Indefinite % flex-basis should cause height to be ignored
Assert: An indefinite percentage flex-basis in a column flex container ignores the item's 500px height and sizes from its 100px child.
Note: The adaptation preserves flex: 0 0 0%; it restores Web content-box sizing, makes Web's flex-start default explicit, and compensates for Lynx not collapsing setup paragraph/body margins.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"container"}>
<view id={"item"}>
<view id={"child"}>
</view>
</view>
</view>
</view>
</>);
