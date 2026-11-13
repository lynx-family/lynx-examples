/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_justifycontent-spacebetween-only.html
WPT-Revision: 5ce815a83b2601ce920e39f001cd7e77642ea860
Adapted-By: agent
Adapted-Date: 2026-09-01
Reference-Mode: web-test-render
Lynx-Status: passing
Title: flexbox | justify-content: space-between | single item
Assert: With a single flex item, justify-content: space-between falls back to flex-start and places the item at the main-start edge after its margin.
Lynx-Note: The source span remains the sole flex item as a structural view containing Lynx text. Its tested justify-content: space-between and exact flex: 1 0 0%, width, max-width, and margin values are unchanged; only the inapplicable blockified display: inline-block declaration is omitted.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"test-box"}>
<view className={"item"}>
<text className={"item-text"}>
{"one"}
</text>
</view>
</view>
</view>
</>);
