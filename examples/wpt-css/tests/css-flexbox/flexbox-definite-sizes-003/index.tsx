/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-definite-sizes-003.html
WPT-Revision: 58b15ece027c804281a1874cbe0569cca12747e9
Adapted-By: agent
Adapted-Date: 2026-09-15
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Failure: Nested max-height: 100% does not constrain painted height; flex-end exposes green overflow above the intended square. See docs/diagnostics/flexbox-next-ten-20260915.md.
Title: CSS Test: nested flex containers with definite max-height
Assert: Nested percentage max-height resolves against the stretched flex item with max-height: 100px on the outer row container, producing a green 100px square without red.
Lynx-Note: Setup uses a Flex column body for percentage measurement, margin: 0 8px and paragraph margin: 1em 0. The block child stretches only in width; max-height: 100%, the 9999px child, flex-end alignment and source body overflow: hidden are unchanged. No tested node receives an added height.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if you see a green 100px x 100px square, and no red"}
</text>
<view className={"outerFlex __inline-001"}>
<view className={"innerFlex"}>
<view className={"block"}>
<view className={"__inline-002"}>
</view>
</view>
</view>
</view>
</view>
</>);
