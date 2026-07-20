// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { renderExample } from "../common.js";

function App() {
  const content = `
this is a **Markdown**!!
`;

  return (
    <view className="plain-surface">
      <markdown
        content={content}
        animation-type="typewriter"
        animation-velocity={20}
      />
    </view>
  );
}

renderExample("Typewriter", <App />);
