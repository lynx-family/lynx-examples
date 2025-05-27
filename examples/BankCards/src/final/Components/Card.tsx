import "./Card.scss";
import type { BankCard } from "./BankCardScrollView.jsx";

interface CardProps {
  selectedCard: BankCard;
  isFront: boolean;
  isFirstRender: boolean;
}

export default function Card({
  selectedCard,
  isFront,
  isFirstRender,
}: CardProps) {
  const getCardNumberParts = (number: string) => {
    const parts = number?.split(" ") || [];
    return {
      firstFour: parts[0] || "4558",
      lastFour: parts[3] || "6767",
    };
  };

  const { firstFour, lastFour } = getCardNumberParts(selectedCard.number);

  return (
    <view className="card-content">
      <view
        className={`card-back ${!isFirstRender ? (isFront ? "back" : "front") : ""}`}
      >
        <view className="card-back">
          <view className="card-inputs">
            <view className="input-group">
              <text className="input-label">Card Holder</text>
              <view className="input-field">
                <text>Alex Quentin</text>
              </view>
            </view>
            <view className="input-group input-ccv">
              <view className="input-label-wrapper">
                <text className="input-label">CCV2</text>
              </view>
              <view className="input-field-small" />
            </view>
          </view>
        </view>
      </view>

      <view
        className={`card-front ${!isFirstRender ? (isFront ? "front" : "back") : ""}`}
      >
        <view className="card-number">
          <text className="first-digits">{firstFour}</text>
          <text className="middle-digits">**** ****</text>
          <text className="last-digits">{lastFour}</text>
        </view>
        <view className="card-info">
          <text>{selectedCard?.name || "Card holder"}</text>
        </view>
      </view>
    </view>
  );
}
