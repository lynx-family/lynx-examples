/*
Source: imported/wpt-upstream/css/CSS2/css1/c5523-width-002.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: partial
Lynx-Partial-Reason: Width constraint aligns to the Web body content box, but long text rendering/wrapping remains above the 0.5% screenshot threshold.
Title: CSS Test: width
Assert: The blue text should not go past the 50% mark on the ruler below.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The blue text should not go past the 50% mark on the ruler below."}
</text>
<view className={"text-block"}>
<text className={"text-content"}>
{"a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text a bit of dummy text"}
</text>
</view>
</view>
</>);
