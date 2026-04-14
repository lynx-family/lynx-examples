import { useResponsiveScale } from "../useResponsiveScale";
import "./App.css";

const cursorPresets = [
  "default",
  "pointer",
  "text",
  "grab",
  "grabbing",
  "not-allowed",
] as const;

export function App() {
  const { handleLayoutChange, scale } = useResponsiveScale({
    baseWidth: 640,
    baseHeight: 420,
    minScale: 0.58,
  });
  const pageStyle = {
    padding: `${32 * scale}px`,
  };
  const panelStyle = {
    padding: `${28 * scale}px`,
    gap: `${18 * scale}px`,
    borderRadius: `${28 * scale}px`,
  };
  const eyebrowStyle = {
    fontSize: `${14 * scale}px`,
    letterSpacing: `${scale}px`,
  };
  const titleStyle = {
    fontSize: `${34 * scale}px`,
  };
  const subtitleStyle = {
    fontSize: `${16 * scale}px`,
  };
  const buttonsStyle = {
    gap: `${12 * scale}px`,
  };
  const buttonStyle = {
    minWidth: `${96 * scale}px`,
    padding: `${14 * scale}px ${16 * scale}px`,
    borderRadius: `${16 * scale}px`,
  };
  const buttonTextStyle = {
    fontSize: `${16 * scale}px`,
  };

  return (
    <view className="Page" style={pageStyle} bindlayoutchange={handleLayoutChange}>
      <view className="Panel" style={panelStyle}>
        <text className="Eyebrow" style={eyebrowStyle}>CSS cursor</text>
        <text className="Title" style={titleStyle}>Hover the buttons to preview cursor keywords.</text>
        <text className="Subtitle" style={subtitleStyle}>Each button applies its own cursor value.</text>

        <view className="Buttons" style={buttonsStyle}>
          {cursorPresets.map(cursor => (
            <view
              key={cursor}
              className="Button"
              style={{ ...buttonStyle, cursor }}
            >
              <text className="ButtonText" style={buttonTextStyle}>{cursor}</text>
            </view>
          ))}
        </view>
      </view>
    </view>
  );
}
