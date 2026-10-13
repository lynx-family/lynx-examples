/*
Source: imported/wpt-upstream/css/CSS2/css1/c5524-height-001.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: height
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The square below should be exactly 100 pixels high on the ruler."}
</text>
<view className={"test-block"}>
<image src={"support/swatch-blue.png"} className={"one"} {...{"alt": "FAIL: Image support required."}} />
</view>
</view>
</>);
