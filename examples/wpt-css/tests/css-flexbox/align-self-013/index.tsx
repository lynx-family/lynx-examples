/*
Source: imported/wpt-upstream/css/css-flexbox/align-self-013.html
WPT-Revision: 5ce815a83b2601ce920e39f001cd7e77642ea860
Adapted-By: agent
Adapted-Date: 2026-09-01
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: align-self - invalid if applied to flex container
Assert: The 'align-self' property is invalid if applied to flex container
Lynx-Note: The tested flex container is hosted by Lynx Relative layout so it is not itself a Flex, Grid, or Linear item; this preserves the source condition under which align-self is inapplicable without removing the tested declaration. The setup-only negative-margin cover remains in the outer Linear flow.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view className={"test-host"}>
<view id={"test"}>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
</view>
</view>
<view id={"cover"}>
</view>
</view>
</>);
