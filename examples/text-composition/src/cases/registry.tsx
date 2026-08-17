// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import {
  BadCase,
  BasicCase,
  BidiTextCase,
  BoringLayoutCase,
  EventWithPaddingCase,
  FontFamilyWeightCase,
  HyphensAutoCase,
  InlineElementAlignCenterCase,
} from "./FoundationCases.jsx";
import { InlineTextBackgroundImageCase, InlineTextCase } from "./InlineCases.jsx";
import {
  LayerBasicCase,
  LayerInlineTextCase,
  LayerMultiLineCase,
  MultiLineCase,
  MultipleFontFamilyCase,
  TextAlignRightBadCase,
  TextIndentCase,
  TransformCase,
  WhiteSpaceCase,
  WordBreakKeepAllCase,
} from "./LayoutCases.jsx";
import {
  InlineTruncationCase,
  InlineTruncationEventCase,
  InlineTruncationRtlCase,
  InlineTruncationUpdateCase,
} from "./TruncationCases.jsx";

export const sourceCases = [
  {
    name: "bad-case",
    title: "Historical regression collection",
    note: "Nested components, shared gradient state, overflow, maxlength, and decoration.",
    render: () => <BadCase />,
  },
  {
    name: "basic",
    title: "Basic text styling",
    note: "Alignment, the complete weight matrix, font style, decoration, and single/multiple shadows.",
    render: () => <BasicCase />,
  },
  {
    name: "bidi-text",
    title: "Bidirectional text and inline views",
    note: "Five auto/LTR/RTL mixed-direction and single-line truncation inputs.",
    render: () => <BidiTextCase />,
  },
  {
    name: "boring-layout",
    title: "Boring layout boundaries",
    note: "Nowrap, max-content, line height, alignment, empty text, and inline views.",
    render: () => <BoringLayoutCase />,
  },
  {
    name: "event-with-padding",
    title: "Inline element hit regions",
    note: "Six horizontal and vertical padding, margin, and border hit regions.",
    render: () => <EventWithPaddingCase />,
  },
  {
    name: "font-family-weight",
    title: "Font family, weight, and nested italics",
    note: "Preserves the 800/400 weights and regression sentence with public font fallbacks.",
    render: () => <FontFamilyWeightCase />,
  },
  {
    name: "hyphens-auto",
    title: "Automatic hyphenation",
    note: "Four auto/none and with/without soft-hyphen comparisons.",
    render: () => <HyphensAutoCase />,
  },
  {
    name: "inline-element-align-center",
    title: "Centered inline images and views",
    note: "Continuous text/image/view measurement inside a single-line truncated paragraph.",
    render: () => <InlineElementAlignCenterCase />,
  },
  {
    name: "inline-text",
    title: "Nested text styling",
    note: "Concatenation, font sizes, solid/gradient color inheritance, overrides, and distinct styles.",
    render: () => <InlineTextCase />,
  },
  {
    name: "inline-text-background-image",
    title: "Nested text backgrounds",
    note: "Six maxline, alignment, line-height, background, and custom truncation combinations.",
    render: () => <InlineTextBackgroundImageCase />,
  },
  {
    name: "inline-truncation",
    title: "Custom truncation size boundaries",
    note: "Height, line-height, overflow, empty content, percentage tails, and flex siblings.",
    render: () => <InlineTruncationCase />,
  },
  {
    name: "inline-truncation-event",
    title: "Custom truncation events",
    note: "Eight independent truncation/view/image/text states under LTR and RTL.",
    render: () => <InlineTruncationEventCase />,
  },
  {
    name: "inline-truncation-rtl",
    title: "RTL custom truncation matrix",
    note: "Sixteen direction, maxline, tail type, emoji, and vertical-align inputs.",
    render: () => <InlineTruncationRtlCase />,
  },
  {
    name: "inline-truncation-update",
    title: "Runtime truncation updates",
    note: "A tap inverts control and fixes the second paragraph maxline to -1.",
    render: () => <InlineTruncationUpdateCase />,
  },
  {
    name: "layer-basic",
    title: "Layer renderer basic matrix",
    note: "Runs the complete visible basic inputs independently and records the retired host-switch boundary.",
    render: () => <LayerBasicCase />,
  },
  {
    name: "layer-inline-text",
    title: "Layer renderer nested text",
    note: "Runs the complete visible inline-text inputs independently.",
    render: () => <LayerInlineTextCase />,
  },
  {
    name: "layer-multi-line",
    title: "Layer renderer multiline text",
    note: "Unlimited, two-line, four-line, nowrap, and ellipsis inputs.",
    render: () => <LayerMultiLineCase />,
  },
  {
    name: "multi-line",
    title: "Multiline text and dynamic maxline",
    note: "Preserves the source tap state machine between 1 and empty plus four static comparisons.",
    render: () => <MultiLineCase />,
  },
  {
    name: "multiple-font-family",
    title: "Multiple font fallback orders",
    note: "Preserves seven orders and empty-family boundaries with public font substitutes.",
    render: () => <MultipleFontFamilyCase />,
  },
  {
    name: "text-align-right-bad-case",
    title: "Nested right-alignment regression input",
    note: "Fixed sibling width, outer margin/border, and inner text-align:right.",
    render: () => <TextAlignRightBadCase />,
  },
  {
    name: "text-indent",
    title: "First-line indent matrix",
    note: "Five percentage, small, none, large, and max-content indent inputs.",
    render: () => <TextIndentCase />,
  },
  {
    name: "transform",
    title: "Text transform",
    note: "Two inputs covering 5rad rotation, transform origin, and 0.5 scaling.",
    render: () => <TransformCase />,
  },
  {
    name: "white-space",
    title: "White-space comparison",
    note: "Long normal text and nowrap text containing a source newline.",
    render: () => <WhiteSpaceCase />,
  },
  {
    name: "word-break-keep-all",
    title: "Multilingual word breaking",
    note: "Keep-all and normal comparisons using the same multilingual copy.",
    render: () => <WordBreakKeepAllCase />,
  },
] as const;
