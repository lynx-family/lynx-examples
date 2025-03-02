import { root } from "@lynx-js/react";
import "./index.scss";

const Order = () => {
  const containerStyle = {
    display: "linear" as const,
  };

  const getOrderStyle = (order: number) => ({
    order: order,
  });

  return (
    <view className="intro" style={containerStyle}>
      <text className="intro-item" style={getOrderStyle(1)}>order: 1</text>
      <text className="intro-item" style={getOrderStyle(3)}>order: 3</text>
      <text className="intro-item" style={getOrderStyle(2)}>first order: 2</text>
      <text className="intro-item" style={getOrderStyle(2)}>second order: 2</text>
    </view>
  );
};

root.render(<Order />);
