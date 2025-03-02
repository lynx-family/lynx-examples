import "./Amount.scss";

interface AmountProps {
  amount: string | number;
}

export default function Amount({ amount }: AmountProps) {
  return (
    <view className="amount-wrapper">
      <text className="amount-label">Amount paid</text>
      <view className="amount-value">
        <text className="amount-currency">¥</text>
        <text className="amount-number">{amount}</text>
      </view>
    </view>
  );
}
