/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-intrinsic-002.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-16
Reference-Mode: web-test-render
Lynx-Status: partial
Lynx-Partial-Reason: SVG CSS-background painting is a prerequisite and fails before this intrinsic-width-only assertion can be observed; this card was not run and is not classified as an intrinsic-sizing failure.
Title: CSS Test: Background Intrinsic Sizes: Intrinsic Width
Assert: A background image with only an intrinsic width
    covers its intrinsic width and the height of the padding box.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"There must be two green boxes below and no red."}
</text>
<view className={"cover"}>
<view className={"control"}>
</view>
<view className={"test"}>
</view>
</view>
<view className={"limit"}>
<view className={"test"}>
</view>
<view className={"control"}>
</view>
</view>
</view>
</>);
