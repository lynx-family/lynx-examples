/*
Source: imported/wpt-upstream/css/CSS2/css1/c5524-height-002.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: partial
Lynx-Partial-Reason: Height geometry aligns to Web, but scaled image/text rasterization remains above the 0.5% screenshot threshold.
Title: CSS Test: height
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The blue rectangle below should be exactly 200 pixels by 120 pixels on the ruler (and the aqua bars should stick out of the blue box, with no red present)."}
</text>
{/* This test sucks. Anyone got any better ideas on how to do this? */}
<view className={"wrapper"}>
<image src={"support/test-inner-half-size.png"} className={"one"} {...{"alt": "FAIL: Image support required."}} />
</view>
</view>
</>);
