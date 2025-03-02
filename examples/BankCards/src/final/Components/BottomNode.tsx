import "./BottomNode.scss";

interface BottomNodeProps {
  onPayNow?: () => void;
}

export default function BottomNode({ onPayNow }: BottomNodeProps) {
  return (
    <view className="bottom-node">
      <view className="bottom-continue-button" bindtap={onPayNow}>
        <text className="bottom-continue-text">Pay Now</text>
      </view>
    </view>
  );
}
