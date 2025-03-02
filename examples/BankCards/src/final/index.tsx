// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import ReactLynx, { root, useEffect, useRef, useState } from "@lynx-js/react";
import Amount from "./Components/Amount";
import BankCardScrollView from "./Components/BankCardScrollView";
import type { BankCard } from "./Components/BankCardScrollView";
import BottomNode from "./Components/BottomNode";
import Card from "./Components/Card";
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

  return (
    <view class="page">
      <Amount amount="1314" />
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
