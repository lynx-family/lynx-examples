/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-height-flex-items-030.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-20
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Lynx uses a zero automatic main-axis minimum instead of Web's content-based min-height:auto, collapsing the nested column flex item before its children can wrap into the green square. Diff: 2.0078% @0.5% limit (emulator-5554, 2026-09-20; diagnosis docs/diagnostics/flex-minimum-height-flex-items-030-20260920.md).
Assert: Inner column flexbox wraps its items when they don't fit in the vertical available space.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"__inline-001"}>
{/* min-height is min(200, 70) = 70 */}
{/* Final height is 70px. Items each have height 100px. They won't both fit, so they need to be wrapped. */}
<view className={"__inline-002"}>
{/* min-height is 100 */}
<view className={"__inline-003"}>
<view className={"__inline-004"}>
</view>
</view>
{/* min-height is 100 */}
<view className={"__inline-005"}>
<view className={"__inline-006"}>
</view>
</view>
</view>
</view>
</view>
</>);
