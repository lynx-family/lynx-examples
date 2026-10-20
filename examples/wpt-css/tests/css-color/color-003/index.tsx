/*
Source: imported/wpt-upstream/css/css-color/color-003.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Color 4: color property, currentcolor
Assert: If the currentcolor keyword is set on the color property itself, it is treated as color: inherit.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"outer"}>
<text className={"inner"}>
{"Test passes if this text is green"}
</text>
</text>
</>);
