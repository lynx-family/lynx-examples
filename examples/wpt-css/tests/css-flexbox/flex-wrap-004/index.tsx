/*
Source: imported/wpt-upstream/css/css-flexbox/flex-wrap-004.html
WPT-Revision: 9bc42055a930f29289ba627ed42bfa7cd0fb7a58
Adapted-By: agent
Adapted-Date: 2026-08-24
Reference-Mode: web-test-render
Lynx-Status: passing
Title: css-flexbox: Tests that we size items in a wrapping column flexbox as fit-content
Assert: The flexbox here should have one flex line, 100px by 100px. The flex items overflow but are transparent.
Note: Android WebView-reference pass at 0.0219% on Pixel_9_Pro emulator-5554, 2026-08-24 (run 20260824-flex-visual-06b-flex-wrap-004); audited case-local PNG evidence, matching summary, and Git LFS attributes verified. The adaptation preserves the wrapping column assertion. The setup-only inline formatting context is represented by a wrapping flex row whose five non-shrinking 50px fragments retain the source's 50px min-content and 250px max-content contributions; Web content-box, flex-start, stretch, and collapsed setup margins are explicit. The green reference is anchored inside the positioned test container because Lynx does not implement Web static positioning for an unoffset absolute sibling.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
{/* This makes sure that we only see green if the flex items are sized correctly */}
<view className={"wrapping-column"}>
<view className={"green-reference"}>
</view>
{/* The margin-right means that the flex item should be only 100px wide,
       because it will use the available width of 125px minus the 25px margin. */}
<view className={"flex-item"}>
{/* These zero-height divs give the flex item has a min-content width of
         50px and a max-content width of 250px */}
<view className={"intrinsic-fragment"}>
</view>
<view className={"intrinsic-fragment"}>
</view>
<view className={"intrinsic-fragment"}>
</view>
<view className={"intrinsic-fragment"}>
</view>
<view className={"intrinsic-fragment"}>
</view>
</view>
</view>
</view>
</>);
