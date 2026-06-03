// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      basic: "./src/basic/index.tsx",
      gif: "./src/gif/index.tsx",
      image: "./src/image/index.tsx",
      image_caption: "./src/image_caption/index.tsx",
      image_caption_style: "./src/image_caption_style/index.tsx",
      image_size: "./src/image_size/index.tsx",
      inline_view: "./src/inline_view/index.tsx",
      link_style: "./src/link_style/index.tsx",
      paragraph_style: "./src/paragraph_style/index.tsx",
      selection_copy: "./src/selection_copy/index.tsx",
      selection_menu: "./src/selection_menu/index.tsx",
      selection_paragraph: "./src/selection_paragraph/index.tsx",
      selection_select_all: "./src/selection_select_all/index.tsx",
      span_mark: "./src/span_mark/index.tsx",
      span_style: "./src/span_style/index.tsx",
      style: "./src/style/index.tsx",
      text_mark_attachments: "./src/text_mark_attachments/index.tsx",
      text_selection: "./src/text_selection/index.tsx",
      truncation: "./src/truncation/index.tsx",
      truncation_text: "./src/truncation_text/index.tsx",
      truncation_view: "./src/truncation_view/index.tsx",
      typewriter: "./src/typewriter/index.tsx",
      typewriter_cursor: "./src/typewriter_cursor/index.tsx",
      typewriter_keep_cursor: "./src/typewriter_keep_cursor/index.tsx",
      typewriter_mask: "./src/typewriter_mask/index.tsx",
    },
  },
  plugins: [
    pluginQRCode(),
    pluginReactLynx(),
    pluginTypeCheck(),
  ],
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/markdown/dist",
    filename: "[name].[platform].bundle",
  },
  environments: {
    web: {},
    lynx: {},
  },
});
