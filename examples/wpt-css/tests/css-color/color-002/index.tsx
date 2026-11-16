/*
Source: imported/wpt-upstream/css/css-color/color-002.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Color 4: color property, initial value
Assert: The initial value of this property is black.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test"}>
{"Test passes if this text is black"}
</text>
</>);
