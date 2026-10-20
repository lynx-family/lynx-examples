/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_order.html
WPT-Revision: 5ce815a83b2601ce920e39f001cd7e77642ea860
Adapted-By: agent
Adapted-Date: 2026-09-01
Reference-Mode: web-test-render
Lynx-Status: passing
Title: flexbox | flex-flow: column-reverse wrap-reverse; order
Assert: The order property reorders flex items before column-reverse and wrap-reverse place the resulting sequence across two reversed columns.
Lynx-Note: The tested flex-flow: column-reverse wrap-reverse shorthand and order values 4, 3, 2, and 1 are retained verbatim. Each source span remains one structural flex item containing Lynx text; only its inapplicable blockified display: inline-block declaration is omitted.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"test-box"}>
<view className={"item one"}>
<text className={"item-text"}>
{"one"}
</text>
</view>
<view className={"item two"}>
<text className={"item-text"}>
{"two"}
</text>
</view>
<view className={"item three"}>
<text className={"item-text light-text"}>
{"three"}
</text>
</view>
<view className={"item four"}>
<text className={"item-text light-text"}>
{"four"}
</text>
</view>
</view>
</view>
</>);
