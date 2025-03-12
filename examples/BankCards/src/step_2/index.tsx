// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import ReactLynx, { root, useEffect, useRef, useState } from "@lynx-js/react";
import BottomNode from "../final/Components/BottomNode.tsx";
import BankCardScrollView from "./Components/BankCardScrollView";
import Card from "./Components/Card";

import "./index.scss";

function BankCards() {
  const [isFront, setIsFront] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handlePayNow = () => {
    if (isFirstRender) {
      setIsFirstRender(false);
    }
    setIsFront(!isFront);
  };

  const handleBack = () => {
    // handle back logic
  };

  return (
    <view className="page">
      <Card
        isFirstRender={isFirstRender}
        isFront={isFront}
      />
      <BankCardScrollView />
      <BottomNode onPayNow={handlePayNow} />
    </view>
  );
}

export default BankCards;
root.render(<BankCards />);
