/*
Source: imported/wpt-upstream/css/css-flexbox/flex-basis-014.html
WPT-Revision: 9bc42055a930f29289ba627ed42bfa7cd0fb7a58
Adapted-By: agent
Adapted-Date: 2026-08-24
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Lynx legacy Flex auto-margin/aspect-ratio sizing prematurely stretches the wrapped item to a 100x50 green block. Diff: 1.231% @0.5% limit (Pixel_9_Pro emulator-5554, 2026-08-24; run 20260824-flex-visual-04-flex-basis-014; diagnosis results/auto-adapt/reports/20260824-flex-basis-014-rca.md).
Title: CSS Test: flex base size that depends on cross size, with aspect-ratio
Assert: A stretched flex item of a single-line flex
  container with a definite cross size has a definite cross size too, so a
  descendant with a percentage block-size and a preferred aspect ratio can
  transfer it to the inline axis when the item's max-content flex base size is
  computed.
Note: The adaptation preserves each flex, stretch, wrapping, percentage-height, display, and aspect-ratio condition; it maps HTML containers to view elements, restores Web content-box and flex-start defaults, and expands setup-only inset: 0 to supported physical offsets.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
{/* The .ar block resolves its percentage height against the item's definite
     stretched cross size (50px), and transfers it through its aspect ratio. */}
<view className={"row"}>
<view className={"item __inline-001"} data-expected-width={"100"}>
<view className={"ar"}>
</view>
</view>
</view>
<view className={"row"}>
<view className={"item __inline-002"} data-expected-width={"100"}>
<view className={"ar"}>
</view>
</view>
</view>
<view className={"row"}>
<view className={"item __inline-003"} data-expected-width={"100"}>
<view className={"ar"}>
</view>
</view>
</view>
{/* The item is not stretched, so its cross size is not definite. */}
<view className={"row"}>
<view className={"item __inline-004"} data-expected-width={"0"}>
<view className={"ar"}>
</view>
</view>
</view>
{/* The flex container has no definite cross size. */}
<view className={"row __inline-005"}>
<view className={"item __inline-006"} data-expected-width={"0"}>
<view className={"ar"}>
</view>
</view>
</view>
{/* The flex container is not single-line. */}
<view className={"row __inline-007"}>
<view className={"item __inline-008"} data-expected-width={"0"}>
<view className={"ar"}>
</view>
</view>
</view>
<view className={"__inline-009"}>
<view className={"item __inline-010"} data-expected-width={"100"} data-expected-height={"100"}>
<view className={"item __inline-011"} data-expected-width={"100"} data-expected-height={"100"}>
<view className={"item __inline-012"}>
</view>
</view>
</view>
</view>
<view id={"log"}>
</view>
</view>
</>);
