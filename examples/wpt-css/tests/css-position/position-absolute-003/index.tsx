/*
Source: imported/wpt-upstream/css/CSS2/positioning/position-absolute-003.xht
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.2222%
Android-Evidence: docs/evidence/css-position-absolute-css2-20260526-summary.tsv
Title: CSS Test: Absolute position element taken out of flow
Assert: Absolute positioned elements are taken out of the normal flow when they have explicit offsets.
Lynx-Note: Browser default body and paragraph spacing is normalized with page padding plus paragraph margins; the tested position:absolute behavior is unchanged.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and"}
<text className={"strong-text"}>
{" no red"}
</text>
{"."}
</text>
<view id={"div1"}>
<view id={"div2"}>
</view>
<view id={"div3"}>
</view>
</view>
</>);
