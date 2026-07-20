import "./Button.css";

export function Button({ children }) {
  return (
    <view className="button">
      {children}
    </view>
  );
}
