/*
Source: imported/wpt-upstream/css/CSS2/positioning/position-absolute-004.xht
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-26
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1754%
Android-Evidence: docs/evidence/css-position-absolute-css2-20260526-summary.tsv
Title: CSS Test: Absolutely positioned elements establishes a new containing block for normal flow children
Assert: An absolutely positioned box establishes a new containing block for normal flow children.
Lynx-Note: Physical setup units normalized for Web parity (1in = 96px); the assertion is absolute-position containing-block behavior, not native physical-unit support.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if the blue square is directly below the orange square."}
</text>
<view id={"div1"}>
<view id={"div2"}>
<view id={"div3"}>
</view>
</view>
</view>
</>);
