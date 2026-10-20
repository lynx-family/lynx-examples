/*
Source: imported/wpt-upstream/css/css-overflow/text-overflow-ellipsis-changing-scroll.html
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-17
Lynx-Status: passing
Title: CSS Overflow: text-overflow: ellipsis after scroll changes
Assert: Ellipsis rendering should match the original WebView rendering after the scroll offset is changed back to the original offset.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"overflow-text"}>
{"ELLIPSISELLIPSIS"}
</text>
</>);
