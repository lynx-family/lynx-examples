/*
Source: imported/wpt-upstream/css/CSS2/css1/c5523-width-000.xht
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.4044%
Lynx-Note: Android screenshot diff 0.4044% against original WPT test HTML via --use-test-as-ref.
Title: CSS Test: width
Assert: The blue square's rendered width should be exactly 50px and align with the horizontal 50px ruler.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"The square below should be exactly 50 pixels wide on the ruler."}
</text>
<view className={"ruler width-ruler"}>
<image src={"support/swatch-blue.png"} className={"one width-one"}>
</image>
</view>
</>);
