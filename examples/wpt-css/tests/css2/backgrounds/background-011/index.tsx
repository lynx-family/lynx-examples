/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-011.xht
WPT-Revision: 7071993d531b18a91e503bd1e537f180b90cdff5
Adapted-By: agent
Adapted-Date: 2026-07-29
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0800%
Evidence: docs/evidence/css2-background-shorthand-20260729-summary.tsv
Title: CSS Test: Background with (image repeat)
Assert: Background with (image repeat) sets the background to the image specified, tiling it to cover the full width, but not height.
Note: The shorthand under test ('background: url(cat.png) repeat-x') is kept verbatim with a card-local copy of the image. The empty source div becomes a view. Verified on Android emulator-5554 (2026-07-29) at 0.0800% diff (2923 px); visual inspection confirms one row of cat images across the box and no vertical tiling, matching the oracle.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the box below has a cat image repeated across the screen, but not down the screen (there is not a cat on top of a cat)."}
</text>
<view id={"div1"}>
</view>
</view>
</>);
