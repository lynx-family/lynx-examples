/*
Source: imported/wpt-upstream/css/CSS2/css1/c5524-height-001.xht
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: skipped
Lynx-Note: Skipped until the web-test-render reference path preserves XHTML CDATA CSS for this .xht source; current reference rendering drops the .one height rule and only shows the image intrinsic size.
Title: CSS Test: height
Assert: The blue square's rendered height should be exactly 100px and align with the vertical 100px ruler.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"The square below should be exactly 100 pixels high on the ruler."}
</text>
<view className={"ruler height-ruler"}>
<image src={"support/swatch-blue.png"} className={"one height-one"}>
</image>
</view>
</>);
