import "./App.css";

export function App() {
  return (
    <view className="page">
      <view className="card">
        <view className="header">
          <view className="avatar">
            <text className="initial">P</text>
          </view>
          <view>
            <text className="title">PostCSS</text>
            <text className="subtitle">src/App.css</text>
          </view>
        </view>

        <view className="divider" />

        <view className="rows">
          <view className="row">
            <text className="label">Authored in</text>
            <text className="value">px</text>
          </view>
          <view className="row">
            <text className="label">Shipped as</text>
            <text className="value">vw</text>
          </view>
          <view className="row">
            <text className="label">Design width</text>
            <text className="value">375px</text>
          </view>
        </view>
      </view>
    </view>
  );
}
