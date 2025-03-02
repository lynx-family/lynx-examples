// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { useState } from "@lynx-js/react";
import "./BankCardScrollView.scss";
import bac from "../../../resource/payment_bac.png";
import boc from "../../../resource/payment_boc.png";
import checkIcon from "../../../resource/payment_check.png";
import citi from "../../../resource/payment_citi.png";
import cmb from "../../../resource/payment_cmb.png";
import hsbc from "../../../resource/payment_hsbc.png";
import icbc from "../../../resource/payment_icbc.png";

const urlMap = new Map([
  ["bac", bac],
  ["boc", boc],
  ["citi", citi],
  ["cmb", cmb],
  ["hsbc", hsbc],
  ["icbc", icbc],
]);

const getUrlByType = (type: string) => {
  return urlMap.get(type) || "URL not found";
};

const cards = [
  { type: "bac", number: "4558 **** **** 6767", name: "Alex Quentin" },
  { type: "boc", number: "6222 **** **** 8058", name: "Alex Quentin" },
  { type: "citi", number: "4128 **** **** 5588", name: "Alex Quentin" },
  { type: "cmb", number: "6225 **** **** 7689", name: "Alex Quentin" },
  { type: "hsbc", number: "4565 **** **** 5168", name: "Alex Quentin" },
  { type: "icbc", number: "6212 **** **** 8958", name: "Alex Quentin" },
];

export interface BankCard {
  type: string;
  number: string;
  name: string;
}

export default function BankCardScrollView() {
  const [selectedCard, setSelectedCard] = useState(cards[0]);

  const handleCardSelect = (card: BankCard) => {
    setSelectedCard(card);
  };

  return (
    <view className="payment-wrapper">
      <text className="payment-title">Payment method</text>
      <view className="payment-container">
        <scroll-view scroll-y className="payment-sv">
          {cards.map((card, idx) => (
            <view
              className="payment-card"
              bindtap={() => handleCardSelect(card)}
            >
              <view className="payment-card-info">
                <image className="payment-card-icon" src={getUrlByType(card.type)} />
                <view className="payment-card-details">
                  <text className="payment-card-name">
                    {card.type.charAt(0).toUpperCase() + card.type.slice(1)}
                  </text>
                </view>
              </view>
              {selectedCard === card && <image className="payment-check-icon" src={checkIcon} />}
            </view>
          ))}
        </scroll-view>
      </view>
    </view>
  );
}
