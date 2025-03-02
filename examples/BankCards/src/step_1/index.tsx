// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import ReactLynx, { root, useEffect, useRef, useState } from "@lynx-js/react";
import BankCardScrollView from "./Components/BankCardScrollView";

import "./index.scss";

function BankCards() {
  const handleBack = () => {
    // handle back logic
  };

  return (
    <view class="page">
      <BankCardScrollView />
    </view>
  );
}

export default BankCards;
root.render(<BankCards />);
