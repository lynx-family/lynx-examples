/*
Source: imported/wpt-upstream/css/css-flexbox/flex-basis-011.html
WPT-Revision: 5ce815a83b2601ce920e39f001cd7e77642ea860
Adapted-By: agent
Adapted-Date: 2026-09-01
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: % flex-basis should not cause engines to treat items as percentage sized
Assert: Percentage flex-basis values in a content-sized column flex container must use the items' content for intrinsic sizing rather than resolving against the container's indefinite height.
Lynx-Note: The source-local support/flexbox.css declarations used by this case are merged into TTSS. The generated body wrapper uses a Flex column so it does not interrupt the nested outer-row and inner-column percentage-sizing chain; the tested flex: 1 0 100% declaration is unchanged.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"flexbox"}>
<view className={"flexbox column"}>
<view className={"flex-item"}>
<view className={"item-content"}>
<text>
{"AAA"}
</text>
</view>
</view>
<view className={"flex-item"}>
<view className={"item-content"}>
<text>
{"BBB"}
</text>
</view>
</view>
</view>
</view>
</view>
</>);
