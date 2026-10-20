/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-height-flex-items-029.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-20
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Lynx uses a zero automatic main-axis minimum instead of Web's content-based min-height:auto, collapsing the nested column flex item and its green region. Diff: 2.0078% @0.5% limit (emulator-5554, 2026-09-20; diagnosis docs/diagnostics/flex-minimum-height-flex-items-029-20260920.md).
Assert: Inner column flexbox doesn't wrap its items because its min-size reported to the outer flexbox accommated the sum of the items' intrinsic block sizes.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"__inline-001"}>
{/* min-height is min(100, 500) = 100 */}
{/* Final height is 100px. */}
<view className={"__inline-002"}>
{/* min-height is 50 */}
<view className={"__inline-003"}>
<view className={"__inline-004"}>
</view>
</view>
{/* min-height is 50 */}
<view className={"__inline-005"}>
<view className={"__inline-006"}>
</view>
</view>
</view>
</view>
</view>
</>);
