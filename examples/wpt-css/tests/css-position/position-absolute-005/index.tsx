/*
Source: imported/wpt-upstream/css/CSS2/positioning/position-absolute-005.xht
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-26
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1522%
Android-Evidence: docs/evidence/css-position-absolute-css2-20260526-summary.tsv
Title: CSS Test: Absolutely positioned elements do not establish a new containing block for fixed position descendants
Assert: An absolutely positioned box does not establish a new containing block for fixed positioned descendants.
Lynx-Note: Physical setup units normalized for Web parity (1in = 96px); the assertion is fixed descendant containment, not native physical-unit support.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if there is a box in the upper-left corner of the page."}
</text>
<view id={"div1"}>
<view id={"div2"}>
<view id={"div3"}>
</view>
</view>
</view>
</>);
