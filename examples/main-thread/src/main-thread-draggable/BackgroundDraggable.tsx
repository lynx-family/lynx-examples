export function BackgroundDraggable({ size, posStyle }: { size: number; posStyle: { x: number; y: number } }) {
  return (
    <view
      style={{
        height: size + "px",
        width: size + "px",
        background: "lightskyblue",
        transform: `translate(${posStyle.x}px, ${posStyle.y}px)`,
      }}
    >
      <text>BGDraggable</text>
    </view>
  );
}
