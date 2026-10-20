/*
Source: imported/wpt-upstream/css/CSS2/abspos/abspos-containing-block-initial-004b.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-01
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Lynx page supplies the viewport and propagated Web-root canvas background; the fixed child preserves the authored root box's explicit offsets, dimensions, border, and background.
Title: CSS Test: Test for containing block for absolutely positioned elements being initial containing block
Assert: If there is no such ancestor, the containing block is the initial containing block.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"html-root"}>
<view className={"body-root"}>
</view>
</view>
</>);
