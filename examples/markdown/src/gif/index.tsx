// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { renderExample } from "../common.js";

const gifUrl = "https://upload.wikimedia.org/wikipedia/commons/3/32/Earth_rotation.gif";

function App() {
  const content = `
gif:

![](${gifUrl})
  `;

  return (
    <view className="plain-surface">
      <markdown content={content} enable-gif={true}>
        {" "}
      </markdown>
    </view>
  );
}

renderExample("GIF", <App />);
