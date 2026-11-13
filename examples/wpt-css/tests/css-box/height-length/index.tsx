/*
Source: imported/wpt-upstream/css/CSS2/css1/c5524-height-000.xht
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1976%
Lynx-Note: Android screenshot diff 0.1976% against original WPT test HTML via --use-test-as-ref.
Title: CSS Test: height
Assert: The blue square's rendered height should be exactly 50px and align with the vertical 50px ruler.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"The square below should be exactly 50 pixels high on the ruler."}
</text>
<view className={"ruler height-ruler"}>
<image src={"support/swatch-blue.png"} className={"one height-one"}>
</image>
</view>
</>);
