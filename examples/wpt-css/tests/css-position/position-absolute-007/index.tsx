/*
Source: imported/wpt-upstream/css/CSS2/positioning/position-absolute-007.xht
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-26
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.3944%
Android-Evidence: docs/evidence/css-position-absolute-css2-20260526-summary.tsv
Title: CSS Test: Absolutely positioned elements child behavior
Assert: The contents of an absolutely positioned element do not flow around any other boxes and can obscure the contents of another box.
Lynx-Note: Physical setup units normalized for Web parity (1in = 96px); float is unsupported in Lynx and is removed from the non-asserted blue setup box; z-index preserves the WPT intended absolute box painting order.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if the \"Filler Text\" overflow below the orange square and overlaps the bottom blue square."}
</text>
<view id={"div1"}>
<view id={"div2"}>
<text className={"filler-text"}>
{"Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text"}
</text>
</view>
<view id={"div3"}>
</view>
</view>
</>);
