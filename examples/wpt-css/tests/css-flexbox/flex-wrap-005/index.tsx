/*
Source: imported/wpt-upstream/css/css-flexbox/flex-wrap-005.html
WPT-Revision: 5ce815a83b2601ce920e39f001cd7e77642ea860
Adapted-By: agent
Adapted-Date: 2026-09-01
Reference-Mode: web-test-render
Lynx-Status: passing
Title: css-flexbox: Tests that we size items in a wrapping column flexbox as fit-content
Assert: The flexbox here should have one flex line, 100px by 100px. The flex items overflow but are transparent.
Lynx-Note: The setup-only inline formatting context is represented by a wrapping flex row whose five non-shrinking 50px fragments preserve the source's 50px min-content and 250px max-content contributions. The tested max-width: 50%, align-self: center, column wrapping, and flex-start line alignment remain unchanged. The green oracle is anchored inside the positioned test container to reproduce the source overlap.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view className={"wrapping-column"}>
{/* This makes sure that we only see green if the flex items are sized correctly */}
<view className={"green-reference"}>
</view>
<view className={"flex-item"}>
{/* These zero-height divs give the flex item a min-content width of
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
