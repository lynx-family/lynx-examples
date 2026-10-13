/*
Source: imported/wpt-upstream/css/CSS2/linebox/line-height-111.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-12
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 0.6228%
Evidence: docs/evidence/css-property-line-height-normal-20260812-summary.tsv
Lynx-Issue: Lynx resolves normal to 1.2em here while Android WebView resolves it to 1em.
Title: CSS Test: Line-height with keyword value of 'normal'
Assert: The 'line-height' property set to 'normal' uses the default line-height.
Note: The source's three floated 100px-wide boxes use an equivalent horizontal flex row because float is setup-only. Ahem is embedded for the Lynx card, the source paragraph margins are reproduced without relying on Web margin collapse, and line-height: normal remains unchanged. On Android Pixel_9_Pro/emulator-5556 (2026-08-12), WebView renders the blue box at 100 CSS px while Lynx renders it at 120 CSS px.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the height of the blue box is similar to the height of the black boxes. It is acceptable to have the blue box height be shorter or taller than the height of either of the black boxes. The black boxes represent the recommended settings for 'line-height'."}
</text>
<view className={"test-row"}>
<view id={"onepointtwo"}>
</view>
<view id={"test"}>
<text>
{"X"}
</text>
</view>
<view id={"one"}>
</view>
</view>
</view>
</>);
