import "./App.css";

export function App() {
  return (
    <view className="page">
      <view className="card">
        <view className="header">
          <view className="avatar">
            <text className="initial">L</text>
          </view>
          <view>
            <text className="title">Lynx Explorer</text>
            <text className="subtitle">Styled with PostCSS</text>
          </view>
        </view>

        <view className="divider" />

        <view className="row">
          <text className="label">Authored in</text>
          <text className="value">px</text>
        </view>
        <view className="row">
          <text className="label">Shipped as</text>
          <text className="value">vw (375px base)</text>
        </view>

        <view className="actions">
          <view className="button primary">
            <text className="caption">Open</text>
          </view>
          <view className="button secondary">
            <text className="caption">Share</text>
          </view>
        </view>
      </view>
    </view>
  );
}
