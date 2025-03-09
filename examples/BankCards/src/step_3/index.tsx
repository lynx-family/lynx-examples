// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import ReactLynx, { root, useEffect, useRef, useState } from "@lynx-js/react";
import BankCardScrollView from "./Components/BankCardScrollView";
import type { BankCard } from "./Components/BankCardScrollView";
import BottomNode from "./Components/BottomNode";
import Card from "./Components/Card.tsx";
import "./index.scss";

function BankCards() {
  const [selectedCard, setSelectedCard] = useState<BankCard>({
    type: "visa",
    number: "4558 **** **** 6767",
    name: "Alex Quentin",
  });

  const [isFront, setIsFront] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleCardSelect = (card: BankCard) => {
    setSelectedCard(card);
    setIsFront(true);
  };

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
        selectedCard={selectedCard}
        isFront={isFront}
        isFirstRender={isFirstRender}
      />
      <BankCardScrollView onCardSelect={handleCardSelect} />
      <BottomNode onPayNow={handlePayNow} />
    </view>
  );
}

export default BankCards;
root.render(<BankCards />);
