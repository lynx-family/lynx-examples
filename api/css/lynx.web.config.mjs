// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import config from "./lynx.config.mjs";

config.source.entry = {
  position: "./src/position/App.tsx",
};

config.environments = {
  web: {},
};

config.output ??= {};
config.output.cleanDistPath = false;
config.output.filename = "[name].[platform].bundle";

export default config;
