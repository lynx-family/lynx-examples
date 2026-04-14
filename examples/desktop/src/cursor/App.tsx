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
  return (
    <view className="Page">
      <view className="Panel">
        <text className="Eyebrow">CSS cursor</text>
        <text className="Title">Hover the buttons to preview cursor keywords.</text>
        <text className="Subtitle">Each button applies its own cursor value.</text>

        <view className="Buttons">
          {cursorPresets.map(cursor => (
            <view
              key={cursor}
              className="Button"
              style={{ cursor }}
            >
              <text className="ButtonText">{cursor}</text>
            </view>
          ))}
        </view>
      </view>
    </view>
  );
}
