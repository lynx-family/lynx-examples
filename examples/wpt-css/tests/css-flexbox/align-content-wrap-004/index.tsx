/*
Source: imported/wpt-upstream/css/css-flexbox/align-content-wrap-004.html
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-28
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Source inline-block children are setup geometry, represented as explicit vertical linear stacks with unchanged dimensions; the paragraph uses an explicit entity space before nested bold text; the tested wrapping-column fit-content sizing, align-self, and align-content values are unchanged.
Title: css-flexbox: Tests that we size items in a wrapping column flexbox as fit-content
Assert: Flex items in a wrapping column flex container are cross-sized as fit-content, with the stretched item matching the widest intrinsic item.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and "}
<text className={"strong"}>
{"no red"}
</text>
{"."}
</text>
<view className={"flex"}>
<view className={"stretch-item inline-stack"}>
<view className={"small-block tall-block"}>
</view>
</view>
<view className={"intrinsic-item inline-stack"}>
<view className={"small-block short-block"}>
</view>
<view className={"wide-block short-block"}>
</view>
<view className={"wide-block short-block"}>
</view>
<view className={"wide-block short-block"}>
</view>
</view>
</view>
</view>
</>);
