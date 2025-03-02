export default function TooltipContainer({ children, handleLayoutChange }) {
  return (
    <view
      main-thread:bindlayoutchange={handleLayoutChange}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        color: "white",
        background: "#222",
        borderRadius: "4px",
        padding: "4px",
      }}
    >
      {children}
    </view>
  );
}
