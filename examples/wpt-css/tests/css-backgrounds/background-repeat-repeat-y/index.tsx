/*
Source: imported/wpt-upstream/css/css-backgrounds/background-repeat/background-repeat-repeat-y.xht
WPT-Revision: af38980d2fcd74af19a226f5f651051cc15940ed
Adapted-By: agent
Adapted-Date: 2026-07-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0769%
Evidence: docs/evidence/todo-css-properties-20260723-ten-more-summary.tsv
Title: CSS Test: background-repeat:repeat-y
Assert: The image is repeated vertically as often as needed to cover the background painting area.
Note: The WPT bitmap is bundled case-locally. The image preview uses an explicit image block because Lynx text elements cannot host Web-style inline replaced content; the 240px by 150px test area and repeat-y value are unchanged.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"preview"}>
<image className={"preview-image"} src={"support/rectangle-96x60.png"} />
</view>
<text className={"instructions"}>
{"Test passes if the above image repeats vertically in the below rectangle 2½ times exactly. There should be a grey area to the right of the images, but not below them."}
</text>
<view className={"test"}>
</view>
</view>
</>);
