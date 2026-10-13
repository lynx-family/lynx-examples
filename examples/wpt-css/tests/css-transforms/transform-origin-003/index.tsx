/*
Source: imported/wpt-upstream/css/css-transforms/transform-origin-003.html
WPT-Revision: ce9441ee673c68c5d175d2363c9ff2e4893b827c
Adapted-By: codex
Adapted-Date: 2026-08-06
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0581%
Evidence: docs/evidence/css-transforms-transform-origin-20260806-summary.tsv
Title: CSS Test (Transforms): transform-origin percentages 1
Assert: `transform-origin: 101px 51px` uses the 202px × 102px border box and therefore matches the default 50% 50% origin.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"test-box"}>
<text>
{"Some text!"}
</text>
</view>
</view>
</>);
