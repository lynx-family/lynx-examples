// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

export const article = {
  eyebrow: "WEEKLY FIELD NOTES",
  title: "Let images, badges, and copy share one layout flow",
  lead:
    "After the rain stopped, an editor followed the old stone path uphill. Moss beside the trail caught the morning light, while ",
  highlight: "a newly fallen ginkgo leaf",
  tail:
    " rested on the damp stones. Farther ahead, a wooden sign reminded visitors to slow down, and the entire paragraph wrapped naturally with the container.",
  action: "View route",
};

export const longParagraph =
  "永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。";

export const truncationText =
  "This continuous passage verifies custom truncation. When the container narrows or the font grows, the outer text still owns measurement and places an interactive action at the end.";

export const bidiSamples = {
  mixed: "اَلْعَرَبِيَّةُ hello world 这是混合方向文本",
  rtl: "هذا نص للاختبار مع صورة وعلامة داخل السطر",
  emoji: "😄😅😄😅😄😅😄😅😄😅😄😅😄😅😄😅",
};

// A deterministic transparent pixel lets the example exercise a real nested
// image without a network request. Its visible treatment comes from CSS.
export const inlineImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=";
