/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-236.xht
WPT-Revision: 7071993d531b18a91e503bd1e537f180b90cdff5
Adapted-By: agent
Adapted-Date: 2026-07-29
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 9.8595%
Evidence: docs/evidence/css2-background-shorthand-20260729-summary.tsv
Lynx-Issue: The five-component shorthand 'background: url(cat.png) repeat-x green scroll bottom' appears to be dropped entirely on Lynx (the inner box paints no background at all), while the same combination without the attachment component (background-087) parses correctly.
Title: CSS Test: Background with (image repeat color attachment position)
Assert: Background with (image repeat color attachment position) sets the background to the color specified, tiling the image across the x-axis at the bottom of the element.
Note: Probe case. The five-component shorthand under test ('background: url(cat.png) repeat-x green scroll bottom') and 'overflow: scroll' are kept verbatim with a card-local copy of the image; the source 'div div' selector becomes an explicit .inner class. The source carries flags 'interact' — scrolling reveals the cat stripe at the bottom of the inner box — so a static screenshot only covers the initial render position (green box, no stripe visible). Verified on Android emulator-5554 (2026-07-29): FAILS at 9.8595% diff. The oracle shows a 200x200 green box; Lynx paints no inner background at all — the five-component shorthand including the 'scroll' attachment keyword is dropped wholesale (compare background-087, the same components minus attachment, which passes). Whether 'overflow: scroll' itself works cannot be judged from the initial frame; the interact-flag scroll behavior is out of screenshot scope. Recorded as a suspected engine gap for the decision list.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a green box below, and when the box is scrolled down, there is a line of cat images at the bottom of the box."}
</text>
<view id={"div1"}>
<view className={"inner"}>
</view>
</view>
</view>
</>);
