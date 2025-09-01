export function MainThreadDraggable({ size }: { size: number }) {
  return (
    <view
      id="intro"
      style={{
        height: size + "px",
        width: size + "px",
        background: "lightskyblue",
        transform: `translate(0px, 500px)`,
      }}
    >
      <text>MTDraggable</text>
    </view>
  );
}
