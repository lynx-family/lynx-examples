/*
Source: imported/wpt-upstream/css/css-color/t421-rgb-func-no-mixed-f.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: no mixed rgb() values
Assert: Test that rgb() values are only accepted when all integers or all percentages.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"This text should be green."}
</text>
<view>
<text>
{"Note: the rules tested by this test may be changed in"}
</text>
<text>
{"\t\tfuture levels of the CSS Color Module."}
</text>
</view>
</view>
</>);
