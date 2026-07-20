// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { renderExample } from "../common.js";

const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/b/be/Grapefruit_free.jpg";

function App() {
  const content = `
image:

![alt text](${imageUrl} width=100 height=100)
  `;

  return (
    <view className="plain-surface">
      <markdown content={content}></markdown>
    </view>
  );
}

renderExample("Image Size", <App />);
